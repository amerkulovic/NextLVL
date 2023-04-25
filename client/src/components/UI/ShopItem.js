const ShopItem = (props) => {
  return (
    <>
      <div class="w-full max-w-sm bg-white border-2 border-yellow-400 shadow my-4">
        <div className="flex justify-center">
          <img class="p-8 h-96" src={props.image} alt="product image" />
        </div>
        <div class="px-5 pb-5">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900">{props.title}</h5>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900">{props.price}</span>
            <a href="#" class="text-white bg-[#e9c10f] hover:bg-yellow-500 font-medium text-sm px-5 py-2.5 text-center">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopItem;
