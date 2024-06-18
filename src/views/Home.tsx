import products from "../assets/products.js";
import Hero from "../components/Hero.js";
import ProductCart from "../components/ProductCart.js";
import Product from "../interfaces/Product.js";

function Home() {
  return (
    <>
      <Hero firstText={"tecnología"} secondText={"renovada"} />
      <main className="w-full flex justify-center items-center p-[20px]">
        <div
          className="w-[1080px] flex flex-wrap justify-between"
          id="products"
        >
          {products?.map((product: Product, index: number) => {
            return (
              <ProductCart
                key={index}
                id={product.id}
                image={product.images[0]}
                title={product.title}
                color={product.colors[0]}
                price={product.price}
                onSale={product.onsale}
                discount={product.discount}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Home;
