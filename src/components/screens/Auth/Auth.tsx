"use client";

import { Button } from "@/components/ui/Button/Button";
import Field from "@/components/ui/Field/Field";
import "./Auth.style.scss";

import { signIn, useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuthFormState } from "./Auth.types";
import { getRandomFullName } from "@/utils/random-full-name";
import toast from "react-hot-toast";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { Replace } from "lucide-react";
// import { useRouter } from "next/router";

interface IAuth {
  type?: "Login" | "Register";
}

export function Auth({ type }: IAuth) {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit } = useForm<IAuthFormState>({
    mode: "onChange",
  });

  const { replace } = useRouter();

  const { data } = useSession();

  const onSubmit: SubmitHandler<IAuthFormState> = async (data) => {
    setIsLoading(true);

    const response = await signIn(
      "credentials",
      type === "Login"
        ? {
            redirect: false,
            ...data,
          }
        : {
            redirect: false,
            username: getRandomFullName(),
            ...data,
          }
    );

    if (response?.error) {
      toast.error(response.error);
      setIsLoading(false);
      return;
    }
    // console.log(response);

    setIsLoading(false);
    replace("/");
  };

  return (
    <div id="auth">
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <h1 className="formName">{type}</h1>
        <Field
          {...register("email", {
            required: true,
          })}
          placeholder="Введите почту"
          type="email"
        />
        <Field
          {...register("password", {
            required: true,
            minLength: {
              value: 6,
              message: "Минимум 6 символов",
            },
          })}
          placeholder="Введите пароль"
          type="password"
        />

        <Button isLoading={isLoading} disabled={isLoading} type="submit">
          {type}
        </Button>
      </form>
    </div>
  );
}
