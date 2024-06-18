import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import Hero from "../components/Hero";

function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");

  return (
    <>
      <Hero firstText="mi" secondText="carrito" />
      <main
        className="w-full block justify-center items-start p-[20px]
      sm:block
      md:flex"
      >
        <div>
          {cart.length > 0 ? (
            cart.map((product, index) => (
              <CartCard
                key={index}
                id={product.id}
                image={product.images[0]}
                title={product.title}
                color={product.colors[0]}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
              />
            ))
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>

        <CartResume />
      </main>
    </>
  );
}

export default Cart;
