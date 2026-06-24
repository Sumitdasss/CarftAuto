import { Suspense } from "react";
import CarServicePage from "./MainServicepage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CarServicePage />
    </Suspense>
  );
}