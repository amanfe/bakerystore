import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addItem } from '../common/cartSlice';

const Card = ({ cake }) => {
  const { id, title, price, previewDescription, image } = cake;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const cartItem = cartItems.find((item) => item.id === id);
  const [addedTocart, setAddedTocart] = useState(!!cartItem);

  useEffect(() => {
    setAddedTocart(!!cartItem);
  }, [cartItem]);
  const addToCart = (event) => {
    event.preventDefault();
    dispatch(addItem(cake));
  };

  return (
    <Link
      to={`/store-detail/${id}`}
      style={{ textDecoration: "inherit", color: "inherit" }}
    >
      <div className="card">
        <img className="card-image" src={image} alt={title} />
        <p className="title">{title}</p>
        <p className="card-desc">{previewDescription}</p>
        <p className="price">{price}</p>
        {!addedTocart ? (
          <button className="add-to-cart" onClick={(e) => addToCart(e)}>
            Add to cart
          </button>
        ) : (
          <button className="added-to-cart">
            Added
          </button>
        )}
      </div>
    </Link>
  );
};

export default Card;
