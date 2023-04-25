import { useQuery } from "@apollo/client";
import { useState } from "react";
import { QUERY_PRODUCTS } from "../utils/queries";
import ShopItem from "../components/UI/ShopItem";
import { v4 as uuidv4 } from "uuid";
import classes from "./Shop.module.css";

const Shop = (props) => {
  const uuid = uuidv4();
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];

  const [cartProducts, setCartProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(cartProducts);

  return (
    <>
      {isModalOpen && (
        <div className={classes.backdrop}>
          <div className={classes.modal}>
            <h1 className="text-3xl text-center text-yellow-400 my-3 font-bold">Your Cart</h1>
            {cartProducts.map((item, index) => (
              <div className="flex flex-wrap justify-between my-3">
                <div>
                  <h1 className="font-bold text-lg" style={{ fontFamily: "Bruno Ace SC" }}>
                    {item.title}
                  </h1>
                  <div>${item.price}</div>
                  <button
                    className="text-white bg-red-400 hover:bg-red-500 font-light text-sm px-2 py-1.5 text-center mt-1"
                    onClick={() => {
                      setCartProducts(cartProducts.filter((item) => item.id !== cartProducts[index].id));
                    }}
                  >
                    Remove
                  </button>
                </div>
                <img style={{ height: "200px", width: "180px" }} src={item.image} alt="product image" />
              </div>
            ))}
            <div className="flex justify-between mt-3 items-center">
              <div>
                <h2 className="font-bold text-lg">Total</h2>
                <h1>
                  $
                  {cartProducts.reduce((currNumber, item) => {
                    return currNumber + item.price;
                  }, 0)}
                </h1>
              </div>
              <div>
                <button className="text-white bg-gray-400 hover:bg-gray-500 font-medium text-sm px-5 py-2.5 text-center mx-2" onClick={() => setIsModalOpen(false)}>
                  Go Back
                </button>
                <button className="text-white bg-yellow-400 hover:bg-yellow-500 font-medium text-sm px-5 py-2.5 text-center">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-40 bg-[#2C2E43] flex justify-between">
        <div className="pb-5 text-center"></div>
        <button className="flex items-center mr-11 bg-yellow-400 p-2" onClick={() => setIsModalOpen(true)}>
          <svg style={{ width: "40px", height: "40px", color: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-4 mr-1">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span className="bg-white py-2 px-4 rounded-2xl mx-2">
            {cartProducts.reduce((currNumber, item) => {
              return currNumber + item.amount;
            }, 0)}
          </span>
        </button>
      </div>
      <section className="bg-gradient-to-b from-[#2C2E43] from-7% via-white via-50% to-[#2C2E43] to-98% flex flex-wrap justify-around pb-10">
        {products.map((product) => (
          <>
            <ShopItem
              title={product.title}
              price={product.price}
              image={product.imageURL}
              addToCartHandler={() => {
                setCartProducts([...cartProducts, { id: uuid, title: product.title, image: product.imageURL, price: product.price, amount: 1 }]);
              }}
            />
          </>
        ))}
      </section>
    </>
  );
};

export default Shop;
