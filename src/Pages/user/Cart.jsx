import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../../store/actions/UserAction";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const AddHandler = (index) => {
    const copyUser = { ...user, cart: [...user.cart] };
    copyUser.cart[index] = {
      ...copyUser.cart[index],
      quantity: copyUser.cart[index].quantity + 1,
    };
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const SubstractHandler = (index) => {
    const copyUser = { ...user, cart: [...user.cart] };
    if (copyUser.cart[index].quantity <= 1) {
      copyUser.cart.splice(index, 1);
    } else {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity - 1,
      };
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const totalAmount = user?.cart?.reduce(
    (acc, item) => acc + Number(item.product.price) * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:flex md:gap-6">
      {/* Left: Cart Items */}
      <div className="md:w-2/3">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {user?.cart?.length ? (
          user.cart.map((item, i) => {
            const { product, quantity } = item;
            const total = Number(product.price) * quantity;

            return (
              <div
                key={i}
                className="flex items-center justify-between  shadow p-4 mb-4 rounded-xl"
              >
                <div className="flex items-center gap-4 w-2/3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 object-contain"
                  />
                  <div>
                    <h2 className="text-lg font-medium">{product.title}</h2>
                    <p className="text-sm text-gray-500">
                      ₹{Number(product.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => SubstractHandler(i)}
                    className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="font-medium">{quantity}</span>
                  <button
                    onClick={() => AddHandler(i)}
                    className="border border-gray-300 px-2 py-1 rounded hover:bg-gray-100"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>

                <div className="text-right font-semibold text-green-600">
                  ₹{total.toFixed(2)}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-600 mt-10 text-lg">
            Your cart is empty.
          </div>
        )}
      </div>

      {/* Right: Summary */}
      {user?.cart?.length > 0 && (
        <div className="md:w-1/3 mt-6 md:mt-0 sticky top-6 h-fit">
          <div className=" shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Total Items:</span>
              <span>{user.cart.length}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Total Amount:</span>
              <span className="font-bold text-green-700">
                ₹{Number(totalAmount).toFixed(2)}
              </span>
            </div>
            <button className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded font-semibold transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
