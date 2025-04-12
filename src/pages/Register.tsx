import { motion } from "motion/react";
import { TopRow } from "../components/TopRow";
import { Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { signUp } from "../supabase/auth";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Ingrese un correo electrónico válido.")
      .required("Se requiere un correo electrónico."),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres.")
      .required("Se requiere una contraseña."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden.")
      .required("Se requiere confirmar la contraseña."),
  });

  const handleSubmit = (values: FormikValues) => {
    const session = signUp(values.email, values.password);
    console.log("Signed up:" + session);
    navigate("/");
  };

  return (
    <>
      <TopRow />
      <div className="flex flex-row m-4 mx-5 ">
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form
              className="flex flex-col gap-4 w-full"
              onSubmit={handleSubmit}
            >
              <h3 className="text-dark-primary">Crear cuenta</h3>
              <p>Correo electrónico</p>
              <input
                className="input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Correo electrónico"
              />
              {errors.email && touched.email && (
                <p className="error-text" style={{ fontSize: "1.0rem" }}>
                  {errors.email}
                </p>
              )}
              <p>Contraseña</p>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Contraseña"
              />
              {errors.password && touched.password && (
                <p className="error-text" style={{ fontSize: "1.0rem" }}>
                  {errors.password}
                </p>
              )}
              <p>Confirmar contraseña</p>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Confirmar contraseña"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error-text" style={{ fontSize: "1.0rem" }}>
                  {errors.confirmPassword}
                </p>
              )}
              <motion.button
                // whileTap={{ scale: 0.99 }}
                className="button-submit"
                type="submit"
              >
                Crear cuenta
              </motion.button>
            </form>
          )}
        </Formik>
      </div>
      <div className="flex flex-row justify-center items-center gap-1.5 mt-7">
        <p>¿Ya tienes una cuenta?</p>
        <Link to="/sign-in">
          <p className="text-primary">Iniciar sesión</p>
        </Link>
      </div>
      {/* <button onClick={() => signOut()} className="button-submit mx-2">
        Debug
      </button> */}
    </>
  );
};
