const ShopItem = (props) => {
  return (
    <>
      <div class="w-full max-w-sm bg-white border-2 border-yellow-400 hover:border-green-400 shadow my-4 animation">
        <div className="flex justify-center">
          <img class="p-4 h-96" src={props.image} alt="product image" />
        </div>
        <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-black pb-2" style={{ fontFamily: "Bruno Ace SC" }}>
            {props.title}
          </h5>
          <div class="flex items-center justify-between pt-2">
            <span class="text-3xl font-bold text-black">{props.price}</span>
            <button class="text-white bg-[#e9c10f] hover:bg-yellow-500 font-medium text-sm px-5 py-2.5 text-center" onClick={props.addToCartHandler}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopItem;
