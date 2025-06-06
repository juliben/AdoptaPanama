import { useState } from "react";
import { motion } from "motion/react";
import { TopRow } from "../components/TopRow";
import { Formik, FormikValues } from "formik";
import { signIn } from "../supabase/auth";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: FormikValues) => {
    const session = await signIn(values.email, values.password);
    if (session) {
      console.log("Session:" + session);
      navigate("/");
    } else {
      setError("Correo electrónico o contraseña incorrectos.");
    }
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
                whileTap={{ scale: 0.97 }}
                className="button-submit"
                type="submit"
              >
                Iniciar sesión
              </motion.button>
            </form>
          )}
        </Formik>
      </div>
      {error && <p className="error-text px-5 mt-7">{error}</p>}
      <div className="flex flex-row justify-center items-center gap-1.5 mt-7">
        <p>¿No tienes una cuenta?</p>
        <Link to="/register">
          <p className="text-primary">Registrarse</p>
        </Link>
      </div>
    </>
  );
};
