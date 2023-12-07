import React from "react";
import { MainLayout } from "../../components/layouts/Mainlayout";
import { Form, Formik } from "formik";
import { loginValidations } from "@/lib/validations/loginValidations";
import Swal from "sweetalert2";
import { emptyLogin } from "@/lib/utils/helpers";
import { FormLogin } from "@/lib/store/types";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "@/lib/store/slices/auth";
import { InputFieldText } from "../../components/forms/InputFieldText";
export default function Home() {
  let initialValues: FormLogin = emptyLogin();
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSubmit = (values: any) => {
    if (values.user === "test" && values.password === "12345") {
      dispatch(login(values));
      Swal.fire({
        title: "Bienvenido",
        html: "Ya podrás ingresar al sistema",
        timer: 2000,
        icon: "success",
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      }).then((result) => {
        router.push("Dashboard");
      });
    } else {
      Swal.fire({
        title: "Información",
        text: "La credenciales de acceso no son correctas",
        icon: "error",
        confirmButtonColor: "#32BB2B",
      });
    }
  };
  return (
    <MainLayout>
      <>
        <Formik
          validationSchema={loginValidations}
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {(formik) => (
            <Form>
              <div className="flex  flex-col w-full items-center justify-center h-screen">
                <div className="px-8 pt-6 pb-4 mb-4 flex flex-col sm:w-full text-center">
                  <h2 className="text-4xl font-extrabold text-principal-10">
                    Welcome to the fruits market!
                  </h2>
                </div>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col sm:w-full lg:w-1/6">
                  <div className="mb-4">
                    <label className="block text-grey-darker text-sm font-bold mb-2">
                      User
                    </label>
                    <InputFieldText
                      name={"user"}
                      placeholder={"Enter the user"}
                      disable={false}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-grey-darker text-sm font-bold mb-2">
                      Password
                    </label>
                    <InputFieldText
                      name={"password"}
                      placeholder={"Enter your password"}
                      disable={false}
                      type={"password"}
                    />
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      className="bg-principal-10 hover:bg-principal-20 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </>
    </MainLayout>
  );
}
