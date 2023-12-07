import { FormLogin } from "../store/types";

export const emptyLogin = (): FormLogin => ({
    user: "",
    password:""
  });