import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, addItem } from "../../redux/slices/cartSlice";
import Toast from "../toast/Toast";

type pizzaCardProps = {
  id: number;
  title: string;
  price: number[];
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

const PizzaCard: React.FC<pizzaCardProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const [showToast, setShowToast] = useState(false); // Состояние для показа уведомления
  const dispatch = useDispatch();

  const cartItem = useSelector((state: any) =>
    state.cart.items.find((obj: any) => obj.id === id)
  );

  const typeNames = ["тонкое", "традиционное"];

  const currentPrice = price[activeSize];

  const uniqueId = `${id}_${sizes[activeSize]}_${types[activeType]}`;

  const onClickAdd = () => {
    const item: CartItem = {
      id: uniqueId,
      title,
      price: currentPrice,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      count: 0,
    };
    dispatch(addItem(item));
    setShowToast(true);
  };

  return (
    <div className="pizza-block__wrapper">
      <div className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((type, index) => (
              <li
                key={index}
                className={index === activeType ? "active" : ""}
                onClick={() => setActiveType(index)}
              >
                {typeNames[type]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                className={index === activeSize ? "active" : ""}
                onClick={() => setActiveSize(index)}
              >
                {`${size} см`}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{currentPrice} ₽</div>
          <button
            className="button button--outline button--add"
            onClick={onClickAdd}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
          </button>
        </div>
      </div>
      {showToast && (
        <Toast
          message="Пицца добавлена в корзину!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default PizzaCard;
