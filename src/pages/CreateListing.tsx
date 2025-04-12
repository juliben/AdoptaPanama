import { useContext, useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { TopRow } from "../components";
import { AuthContext } from "../contexts/AuthContext";
import { Formik, FormikValues } from "formik";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/supabase";
import { SyncLoader } from "react-spinners";

export const CreateListing = () => {
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const imagePublicUrlsRef = useRef<string[] | null>(null);
  const { id, email } = useContext(AuthContext) ?? {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      alert("Por favor, vuelve a iniciar sesión.");
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
      const { error } = await supabase.from("pets").insert({
        species: values.species,
        name: values.name,
        age: values.age,
        sex: values.sex,
        location: values.location,
        description: values.description,
        images: imagePublicUrlsRef.current,
        user: id,
        email: email,
        contact: values.contact,
      });
      if (error) {
        console.log(error);
        alert("Hubo un error");
      }
      if (!error) {
        setLoading(false);
        alert("Publicación creada con éxito");
        navigate("/listings");
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
          <h3 className=" text-dark-primary font-sans">
            Crear una publicación
          </h3>
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
            species: "",
            sex: "",
            name: "",
            age: "",
            location: "",
            description: "",
            contact: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form className="mt-7" onSubmit={handleSubmit}>
              <p>Especie</p>
              <div className="flex space-x-4 my-3">
                <label>
                  <input
                    id="dog"
                    name="species"
                    value="dog"
                    checked={values.species === "dog"}
                    onChange={handleChange}
                    type="radio"
                    className="mr-2 accent-primary"
                  />
                  Perro
                </label>
                <label>
                  <input
                    id="cat"
                    name="species"
                    value="cat"
                    checked={values.species === "cat"}
                    onChange={handleChange}
                    type="radio"
                    className="mr-2  accent-primary "
                  />
                  Gato
                </label>
                <label>
                  <input
                    id="other"
                    name="species"
                    value="other"
                    checked={values.species === "other"}
                    onChange={handleChange}
                    type="radio"
                    className="mr-2  accent-primary"
                  />
                  Otro
                </label>
              </div>

              <p>Sexo</p>
              <div className="flex space-x-4 my-3">
                <label>
                  <input
                    id="macho"
                    name="sex"
                    value="macho"
                    checked={values.sex === "macho"}
                    onChange={handleChange}
                    type="radio"
                    className="mr-2 accent-primary"
                  />
                  Macho
                </label>
                <label>
                  <input
                    id="hembra"
                    name="sex"
                    value="hembra"
                    checked={values.sex === "hembra"}
                    onChange={handleChange}
                    type="radio"
                    className="mr-2  accent-primary "
                  />
                  Hembra
                </label>
              </div>

              <p>Añade hasta cinco fotos</p>
              <input
                multiple
                onChange={handleImagePick}
                type="file"
                accept="image/*"
                className="input bg-white my-3"
              />
              <p>Nombre</p>
              <input
                autoCapitalize="words"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="input bg-white my-3"
                placeholder="Nombre del animal"
              />
              <p>Edad</p>
              <input
                name="age"
                value={values.age}
                onChange={handleChange}
                type="number"
                max="15"
                min="0"
                className="input bg-white my-3 max-w-[100px] "
                placeholder="0"
              />
              <p>Ubicación</p>
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
                maxLength={400}
                value={values.description}
                onChange={handleChange}
                className="input bg-white my-3 h-[110px] rounded-2xl  "
                placeholder=""
              />
              <p>Contacto</p>
              <input
                name="contact"
                value={values.contact}
                maxLength={15}
                onChange={handleChange}
                className="input bg-white my-3"
                placeholder="Número de contacto"
              />
              {error && <p className="error-text mb-4">{error}</p>}
              <motion.button
                disabled={loading}
                whileTap={{ scale: 0.97 }}
                className="button-submit w-full mb-7"
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
