import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

export default function App() {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange"
  });
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          fn={register({
            required: "Enter your e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address"
            }
          })}
          label="E-mail:"
          name={"email"}
          errors={errors}
        />
        <Input
          fn={register({
            required: "Enter your password"
          })}
          label="Password:"
          name={"password"}
          type="password"
          errors={errors}
        />
        <button className="btn btn-primary" disabled={!formState.isValid}>
          Send
        </button>
      </form>
    </div>
  );
}
