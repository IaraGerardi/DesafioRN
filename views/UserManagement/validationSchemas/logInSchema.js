import * as Yup from "yup";

export const LogInSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .email()
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});