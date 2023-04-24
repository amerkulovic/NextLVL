import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../utils/queries";

const Shop = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const products = data?.products || [];
  return (
    <>
      <div className="pt-40 bg-[#2C2E43]" />
      <section className="bg-gradient-to-b from-[#2C2E43] from-7% via-white via-50% to-[#2C2E43] to-98%">
        {products.map((product) => (
          <>
            <h1 className="pt-40">{product.title}</h1>
            <h1 className="pt-40">{product.description}</h1>
          </>
        ))}
      </section>
    </>
  );
};

export default Shop;
