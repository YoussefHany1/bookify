import React from "react";
import { ShoppingCart } from "lucide-react";
import { useBasket } from "../context/BasketContext";
import { useNavigate } from "../hooks/useNavigate";

const BasketCounter = () => {
  const { basketItemCount } = useBasket();
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/basket")}className="p-2 border-0 rounded-3 bg-transparent fw-semibold fs-4 d-flex align-items-center">
    <ShoppingCart size={24} className="me-2"/> Cart
      {basketItemCount > 0 && (
        <span className="position-absolute translate-middle badge rounded-pill bg-danger text-white">
          {basketItemCount}
        </span>
      )}
    </button>
  );
};

export default BasketCounter;