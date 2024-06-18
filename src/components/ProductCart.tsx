import { Link } from "react-router-dom";
import ProductCartInterface from "../interfaces/ProductCart";

export default function ProductCart({
  id,
  image,
  title,
  color,
  price,
  onSale,
  discount,
}: ProductCartInterface) {
  return (
    <Link
      to={`/details/${id}`}
      className="bg-gray text-[#383838] rounded-[15px] w-[250px] m-[15px] no-underline"
    >
      <img
        className="w-full h-[250px] object-cover object-center rounded-t-[15px]"
        src={image}
        alt={title}
      />
      <div className="p-[20px] box-border">
        <span className="text-[20px] font-bold leading-[25px] block break-words">
          {title}
        </span>
        <span className="text-[12px] font-normal text-[#383838] mb-[5px]">
          {color}
        </span>
        {onSale ? (
          <span className="block text-[15px] font-light text-gray-400">
            {`Antes: `}
            <span className="line-through"> $ {price}</span>
          </span>
        ) : (
          <></>
        )}
        <div className="flex mt-[-5px] mb-[5px] justify-between items-center">
          <span className="text-[20px] font-bold">
            $ {onSale ? (price * discount) / 100 : price}
          </span>
          <span className="text-[12px] font-bold text-[#428f13]">
            {onSale ? `${discount}% OFF` : ""}
          </span>
        </div>
        <div className="text-[10px] font-light">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </Link>
  );
}
