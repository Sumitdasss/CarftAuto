import ProductDetails from "../../Componant/Layout/Ditailspage"
import {carPartsAPI} from "../../../DatA/Data"


export default async function Page({ params }) {
  const { Id } = await params;



  const product = carPartsAPI.find(
    (item) => String(item.id) === String(Id)
  );



  return <ProductDetails product={product} />;
}