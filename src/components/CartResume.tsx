export default function CartResume() {
  return (
    <div className="bg-gray rounded-[5px] p-[30px] m-[10px] h-[220px] flex justify-between w-[340px] flex-col">
      <div className="grow flex flex-col justify-between">
        <h2 className="text-xl font-bold">
          <span>Resumen</span>
          <span> del</span>
          <span> pedido</span>
        </h2>
        <div className="flex justify-between items-center">
          <h3>Total</h3>
          <strong>$ 800000</strong>
        </div>
        <small className="pb-10">
          Incluye impuesto PAIS y percepción AFIP.
        </small>
      </div>
      <button
        className="w-full bg-red text-white font-bold border-none rounded-[10px] h-[40px] cursor-pointer hover:bg-[#ff5151]"
        id="buy"
        type="button"
      >
        COMPRAR
      </button>
    </div>
  );
}
