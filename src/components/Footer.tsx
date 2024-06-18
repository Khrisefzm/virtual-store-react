// import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className=" w-full min-h-[200px] bg-[#7525a7] flex flex-col items-center">
      <div
        id="footer"
        className="w-full max-w-[1080px] flex flex-col justify-between items-center p-[10px]
          sm:flex-row sm:items-start"
      >
        <ul className="w-[15%] list-none p-10">
          <li className="font-bold pb-[20px]">
            <a className="text-white no-underline" href="./index.html">
              Ofertas
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Laptops
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Audio
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Auriculares
            </a>
          </li>
        </ul>
        <ul className="w-[15%] list-none p-10">
          <li className="font-bold pb-[20px]">
            <a className="text-white no-underline" href="./index.html">
              Cómo comprar
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Formas de pago
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Envios
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Devoluciones
            </a>
          </li>
        </ul>
        <ul className="w-[15%] list-none p-10">
          <li className="font-bold pb-[20px]">
            <a className="text-white no-underline" href="./index.html">
              Costos y tarifas
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Impuestos
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Facturación
            </a>
          </li>
        </ul>
        <ul className="w-[15%] list-none p-10">
          <li className="font-bold pb-[20px]">
            <a className="text-white no-underline" href="./index.html">
              Mis pedidos
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Pedir nuevamente
            </a>
          </li>
          <li className="py-[5px]">
            <a className="text-white no-underline" href="./index.html">
              Lista de deseos
            </a>
          </li>
        </ul>
        <ul className="w-[15%] list-none p-10">
          <li className="font-bold pb-[20px]">
            <a className="text-white no-underline" href="./index.html">
              Garantía
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full max-w-[1080px] border-solid border-t text-center text-white font-bold py-[30px] box-border">
        Hecho con Vite + React
      </div>
    </footer>
  );
}
export default Footer;
