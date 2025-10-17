import { Button, Checkbox, Label, TextInput, Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/loginSchema";
import type { LoginSchemaType } from "../schemas/loginSchema";

export default function Home() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [openModalForm, setOpenModalForm] = React.useState<boolean>(false);

  const onSubmit = (data: LoginSchemaType) => {
    console.log(data.email1);
    console.log(data.password1);
    setOpenModalForm(true);
  };

  return (

    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Terms of Service</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              This is an example of a flowbite modal. The modal component is a dialog box/popup window that is displayed on top of the current page. It is used to display important information or to get user input without navigating away from the current page.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              This is an example of a flowbite modal. The modal component is a dialog box/popup window that is displayed on top of the current page. It is used to display important information or to get user input without navigating away from the current page.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>

      <Modal show={openModalForm} onClose={() => setOpenModal(false)}>
        <ModalHeader>Terms of Service</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Form submitted successfully!
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpenModalForm(false)}>I accept</Button>
          <Button color="alternative" onClick={() => setOpenModalForm(false)}>
            Decline
          </Button>
        </ModalFooter>
      </Modal>

    <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Dashboard con Tailwind CSS 🎉
      </h1>

      {/* Formulario de prueba */}
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 mb-8">
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required {...register("email1")}/>
              {errors.email1 && <p className="text-red-500 text-sm">{errors.email1.message}</p>}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
            </div>
            <TextInput id="password1" type="password" required  {...register("password1")}/>
              {errors.password1 && <p className="text-red-500 text-sm">{errors.password1.message}</p>}
          </div>
          <div className="flex items-center w-full">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <a href="#" className="text-gray-300 text-sm ml-auto">Forgot your password?</a>
          </div>
          <Button pill type="submit">Submit</Button>
        </form>
      </div>

      {/* Botones de prueba */}
      <div className="flex justify-center gap-4 mb-8">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setOpenModal(true)}>Azul</Button>
        <Button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={() => setOpenModal(true)}>Verde</Button>
        <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={() => setOpenModal(true)}>Rojo</Button>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-2">Tarjeta 1</h3>
          <p className="text-gray-600">Contenido de ejemplo para la tarjeta 1.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-2">Tarjeta 2</h3>
          <p className="text-gray-600">Contenido de ejemplo para la tarjeta 2.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold text-lg mb-2">Tarjeta 3</h3>
          <p className="text-gray-600">Contenido de ejemplo para la tarjeta 3.</p>
        </div>
      </div>
    </div>
    </>

  );
}
