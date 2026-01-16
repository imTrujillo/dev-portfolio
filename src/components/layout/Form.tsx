import { useRef, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import Toast from "../common/Toast";

const Form = () => {
  const [loading, setLoading] = useState(false);

  const notify = () => toast(<Toast />);

  const formRef = useRef<HTMLFormElement>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        notify();
        formRef.current?.reset();
      })
      .catch(() => {
        alert("Error al enviar el correo.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      className="max-w-md text-white/60 placeholder:text-white/60 space-y-3 px-2"
    >
      <Input name="name" type="text" placeholder="NOMBRE COMPLETO" />

      <Input name="email" type="email" placeholder="CORREO" />

      <Input name="message" type="textarea" placeholder="MENSAJE" />

      <Button
        type="submit"
        label={loading ? "Enviando..." : "Enviar"}
        disabled={loading}
        colors={[
          "from-rose-300/80",
          "to-rose-400/80",
          "",
          "after:bg-rose-500/60",
        ]}
      />
    </form>
  );
};

export default Form;
