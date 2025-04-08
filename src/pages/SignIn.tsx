import { motion } from "motion/react";
import { TopRow } from "../components/TopRow";
import { Formik, FormikValues } from "formik";
import { signIn } from "../supabase/auth";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: FormikValues) => {
    const session = signIn(values.email, values.password);
    console.log("Signed in:" + session);
    navigate("/");
  };

  return (
    <>
      <TopRow />
      <div className="flex flex-row m-4 mx-5 ">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({
            values,

            handleChange,

            handleSubmit,
          }) => (
            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={handleSubmit}
            >
              <h3 className="text-dark-primary">Iniciar sesión</h3>
              <p>Correo electrónico</p>
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
              />

              <p>Contraseña</p>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Contraseña"
              />

              <motion.button
                // whileTap={{ scale: 0.99 }}
                className="button-submit"
                type="submit"
              >
                Iniciar sesión
              </motion.button>
            </form>
          )}
        </Formik>
      </div>
      <div className="flex flex-row justify-center items-center gap-1.5 mt-7">
        <p>¿No tienes una cuenta?</p>
        <a href="/register">
          <p className="text-primary">Registrarse</p>
        </a>
      </div>
      {/* <button onClick={() => signOut()} className="button-submit mx-2">
        Debug
      </button> */}
    </>
  );
};
