import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Button onClick={handleBack} className="mb-4">
      Volver
    </Button>
  );
}
