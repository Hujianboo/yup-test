// app component
import React from "react";
import fish from "imgs/fish.png";
import * as yup from "yup";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const SignupSchema = yup.object().shape({
  firstName: yup.string().test("firstName", "test", (value, ctx) => {
    const lastName = ctx.parent.lastName;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (value === "" && lastName === "") {
      console.log("firstName", value, "current lastname", lastName);
      return ctx.createError({
        message: "firstName and lastName can't all be empty",
      });
    } else {
      return true;
    }
  }),
  lastName: yup.string().test("lastName", "test", (value, ctx) => {
    const firstName = ctx.parent.firstName;
    if (value === "" && firstName === "") {
      console.log("lastName", value, "current firstname", firstName);
      return ctx.createError({
        message: "firstName and lastName can't all be empty",
      });
    } else {
      return true;
    }
  }),
});

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    mode: "all",
  });
  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && (
          <div
            style={{
              color: "red",
            }}
          >
            {errors.firstName.message}
          </div>
        )}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && (
          <div
            style={{
              color: "red",
            }}
          >
            {errors.lastName.message}
          </div>
        )}
      </div>
      <input type="submit" />
    </form>
  );
}
