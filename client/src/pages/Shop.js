import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";
import ShopItem from "../components/UI/ShopItem";

const Shop = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];
  return (
    <>
      <div className="pt-40 bg-[#2C2E43]" />
      <section className="bg-gradient-to-b from-[#2C2E43] from-7% via-white via-50% to-[#2C2E43] to-98% flex flex-wrap justify-around pb-40">
        {products.map((product) => (
          <>
            <ShopItem title={product.title} price={product.price} image={product.imageURL} />
          </>
        ))}
      </section>
    </>
  );
};

export default Shop;
