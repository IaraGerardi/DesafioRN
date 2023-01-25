import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .email()
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])/,
      "Must contain uppercase and lowercase characters"
    )
    .matches(/^(?=.*[0-9])/, "Must contain a number")
    .required("Required"),
});
