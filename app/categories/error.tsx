"use client";

import Button from "../components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-8 flex flex-col gap-3 items-center w-1/2 mx-auto">
      <h2 className="text-2xl font-bold text-orange-600">
        Error loading categories
      </h2>
      <div>
        <p className="text-lg text-gray-700 font-bold">Error:</p>
        <p className="text-lg text-gray-700">{error.message}</p>
      </div>

      <Button handlerClick={() => reset()} variant="secondary" size="lg">
        Reload
      </Button>
    </div>
  );
}
