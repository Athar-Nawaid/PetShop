import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { petSchema } from "../utils/petSchema";

export default function usePetForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(petSchema),
    defaultValues: {
      name: "",
      breed: "",
      age: "",
      price: "",
    },
  });

  return {
    control,
    handleSubmit,
    errors,
  };
}