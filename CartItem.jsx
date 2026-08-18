```jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "./redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <div>
                <h2>{item.name}</h2>
                <p>Precio: ${item.price.toLocaleString()}</p>

                <div>
                  <button onClick={() => handleDecrease(item)}>
                    -
                  </button>

                  <span> {item.quantity} </span>

                  <button onClick={() => handleIncrease(item)}>
                    +
                  </button>
                </div>

                <p>
                  Subtotal: $
                  {(item.price * item.quantity).toLocaleString()}
                </p>

                <button onClick={() => handleRemove(item.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h2>
              Total: ${total.toLocaleString()}
            </h2>

            <button>Proceder al pago</button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;
```
