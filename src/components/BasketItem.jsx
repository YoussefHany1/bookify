import { Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { useBasket } from "../context/BasketContext";

const BasketItem = ({ item }) => {
  const { updateQuantity, removeFromBasket } = useBasket();
  
  return (
    <div className="d-flex align-items-center border-bottom py-4 border-secondary-subtle flex-lg-row flex-column gap-4">
      <img src={item.coverUrl} alt={`Cover of ${item.title}`}className="object-fit-cover"/>
      <div className="flex-grow-1">
        <h3 className="fw-medium">{item.title}</h3>
        <p className="text-secondary small">{item.author}</p>
        <p className="mt-1">${item.price.toFixed(2)}</p>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center me-6">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}className="text-secondary p-1 border-0 ">
            <ChevronDown size={20} />
          </button>
          <span className="mx-2 w-8 text-center">{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}className="text-secondary p-1 border-0">
            <ChevronUp size={20} />
          </button>
        </div>
        <button onClick={() => removeFromBasket(item.id)}className="text-danger p-1 border-0 ms-3"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
