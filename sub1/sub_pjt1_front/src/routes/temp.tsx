import React from 'react'
import { useForm } from 'react-hook-form';

export default function Temp() {
  const { register, watch } = useForm();
  console.log(watch("id"))

  return (
    <>
    <form>
      <input {...register("id")} type="text" />
      <input {...register("password")} type="text" />
      <input {...register("name")} type="text" />
      <input {...register("email")} type="text" />
    </form>
    </>
  )
}
