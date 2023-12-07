import * as Yup from "yup";

export const loginValidations = Yup.object().shape({
  user: Yup.string().required(
    "Este campo es requerido"
  ),
  password: Yup.string().required(
    "Este campo es requerido"
  ),
});
