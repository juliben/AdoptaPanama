import { useContext, useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { TopRow } from "../components";
import { AuthContext } from "../contexts/AuthContext";
import { Formik, FormikValues } from "formik";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/supabase";
import { SyncLoader } from "react-spinners";
import dayjs from "dayjs";

export const CreateReport = () => {
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const imagePublicUrlsRef = useRef<string[] | null>(null);
  const { id, email } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();
  const today = dayjs().format("YYYY-MM-DD");

  useEffect(() => {
    if (!id) {
      alert("Por favor vuelva a iniciar sesión.");
      navigate("/sign-in");
    }
  }, []);

  const handleImagePick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = event.target.files;
    if (!selectedImages) {
      return;
    }
    const fileArray = Array.from(selectedImages).slice(0, 5);
    setImages(fileArray);
  };

  const uploadImages = async () => {
    if (images.length > 0) {
      const uploadPromises = images.map(async (image, index) => {
        const filePath = `pets/${id}_${Date.now()}_${index}`;
        const { data, error } = await supabase.storage
          .from("images")
          .upload(filePath, image, {
            cacheControl: "3600",
          });
        if (error) {
          console.log(error);
        }
        if (data) {
          const publicUrl = await getPublicUrl(data.path);
          return publicUrl ?? null;
        }
      });
      const publicUrls = await Promise.all(uploadPromises);
      imagePublicUrlsRef.current = publicUrls.filter(Boolean) as string[];
    }
  };

  const getPublicUrl = async (path: string) => {
    try {
      const { data } = supabase.storage.from("images").getPublicUrl(path);
      if (data) {
        return data.publicUrl;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values: FormikValues) => {
    setError(null);
    setLoading(true);
    await uploadImages();

    const allValuesOk = Object.values(values).every((value) => value !== "");
    if (!allValuesOk) {
      setError("Por favor rellene todos los campos");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.from("reports").insert({
        title: values.title,
        age: values.age,
        species: values.species,
        sex: values.sex,
        location: values.location,
        description: values.description,
        images: imagePublicUrlsRef.current,
        user: id,
        email: email,
      });
      if (error) {
        console.log(error);
        alert("Hubo un error");
      }
      if (!error) {
        setLoading(false);
        alert("Reporte creado con éxito");
        navigate("/reports");
      }
    } catch {
      console.log("Error creating listing in Supabase");
      alert("Hubo un error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <TopRow />
      <div className="flex flex-col p-7 bg-light-gray rounded-t-3xl mt-2">
        <div className="flex flex-row items-center justify-between">
          <h3 className=" text-dark-primary font-sans">Crear un reporte</h3>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(-1)}
            className="outline rounded-full px-2 py-1 hover:cursor-pointer text-dark-primary"
          >
            Cancelar
          </motion.button>
        </div>

        <Formik
          initialValues={{
            images: [],
            title: "",
            date: today,
            location: "",
            description: "",
            contact: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form className="mt-7" onSubmit={handleSubmit}>
              <p>Título</p>
              <input
                autoCapitalize="words"
                name="title"
                value={values.title}
                onChange={handleChange}
                className="input bg-white my-3"
                placeholder="Título del reporte"
              />
              <p>Añade hasta cinco fotos</p>
              <input
                multiple
                onChange={handleImagePick}
                type="file"
                accept="image/*"
                className="input bg-white my-3"
              />

              <p>¿Cuándo se perdió?</p>
              <input
                name="date"
                type="date"
                value={values.date}
                onChange={handleChange}
                className="input bg-white my-3 appearance-none w-fit"
              />
              <p>¿Dónde fue visto por última vez?</p>
              <input
                autoCapitalize="words"
                name="location"
                value={values.location}
                onChange={handleChange}
                className="input bg-white my-3"
                placeholder="Ubicación"
              />
              <p>Descripción</p>
              <textarea
                autoCapitalize="sentences"
                name="description"
                maxLength={500}
                value={values.description}
                onChange={handleChange}
                className="input bg-white my-3 h-[110px] rounded-2xl  "
                placeholder=""
              />
              <p>Contacto</p>
              <input
                name="contact"
                maxLength={15}
                value={values.contact}
                onChange={handleChange}
                className="input bg-white my-3 rounded-2xl  "
                placeholder="Número de contacto"
              />
              {error && <p className="error-text mb-4">{error}</p>}
              <motion.button
                disabled={loading}
                whileTap={{ scale: 0.97 }}
                className="button-submit w-full mb-7 mt-2"
                type="submit"
              >
                {loading ? <SyncLoader size={5} color={"black"} /> : "Publicar"}
              </motion.button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
