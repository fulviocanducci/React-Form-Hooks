import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

export default function App() {
  const { register, handleSubmit, errors } = useForm();
  function onSubmit(data) {
    console.log("Data submitted: ", data);
  }
  return (
    <div className="content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input fn={register} label="E-mail:" name={"email"} />
        <Input
          fn={register}
          label="Password:"
          name={"password"}
          type="password"
        />
      </form>
    </div>
  );
}
