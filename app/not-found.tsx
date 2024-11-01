"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./components/ui/Button";
const NotFound = () => {
  const router = useRouter();
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      ¿{" "}
      <div className="relative w-screen h-screen">
        <Image
          src="/images/error2.jpg"
          alt="Fondo"
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
      <Button
        variant="secondary"
        size="lg"
        className="absolute bottom-5 left-50%"
        type="button"
        handlerClick={() => router.push("/")}
      >
        Volver
      </Button>
    </div>
  );
};

export default NotFound;
