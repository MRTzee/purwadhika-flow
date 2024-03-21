"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormik } from "formik";
import axios from "axios";
import { appConfig } from "@/utils/config";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { RegisterValidationSchema } from "./schemas/RegisterValidationSchema";
import FormInput from "@/components/forms/FormInput";

const Register: React.FC = () => {
  const router = useRouter();
  const { baseUrl } = appConfig;
  const { errors, handleSubmit, handleBlur, values, handleChange, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: RegisterValidationSchema,
      onSubmit: async (values) => {
        const { data } = await axios.get(
          baseUrl + `/users?email=${values.email}`,
        );
        if (data.length) {
          return toast("Email already exist.");
        }

        await axios.post(baseUrl + `/users`, {
          name: values.name,
          email: values.email,
          password: values.password,
          isVerify: false,
        });
        toast.success("Register sukses");
        setTimeout(() => router.push("/login"), 800);
      },
    });

  return (
    <main className="container mx-auto px-4 py-4">
      <div className="flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Welcome to Sosmed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                {/* NAME */}
                <FormInput
                  name="name"
                  errors={errors.name}
                  isError={!!touched.name && !!errors.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Masukkan Nama disini"
                  type="text"
                  value={values.name}
                />

                {/* EMAIL */}
                <FormInput
                  name="email"
                  errors={errors.email}
                  isError={!!touched.email && !!errors.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Masukkan Email disini"
                  type="email"
                  value={values.email}
                />

                {/* PASSWORD */}
                <FormInput
                  name="password"
                  errors={errors.password}
                  isError={!!touched.password && !!errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Masukkan Password disini"
                  type="password"
                  value={values.password}
                />
                <Button className="mt-6 w-full" type="submit">
                  Register
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;
