import React from "react";
import { Check, BookOpen } from "lucide-react";
import { useBasket } from "../context/BasketContext";
import { useNavigate } from "../hooks/useNavigate";
import BasketItem from "../components/BasketItem";

const BasketPage = () => {
  const { basketItems, getBasketTotal, clearBasket } = useBasket();
  const navigate = useNavigate();
  
  const handleConfirm = () => {
    if (basketItems.length === 0) {
      alert("Your basket is empty. Please add books before confirming.");
      return;
    }
    
    clearBasket();
    navigate("/confirmation");
  };
  
  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="fs-3 fw-bold">Your Basket</h1>
      
      {basketItems.length === 0 ? (
        <div className="bg-white rounded shadow p-4 text-center">
          <div className="d-flex justify-content-center mb-4">
            <BookOpen size={48} className="text-muted" />
          </div>
          <h2 className="fs-4 fw-medium mb-2">Your basket is empty</h2>
          <p className="text-muted">Looks like you haven't added any books to your basket yet.</p>
          <button onClick={() => navigate("/")}className="btn btn-primary text-white py-2 px-3 rounded hover:bg-primary-dark transition">
            Browse Books
          </button>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-3">
          <div className="col-12 col-md-8">
            <div className="bg-white rounded shadow p-4">
              {basketItems.map(item => (
                <BasketItem key={item.id} item={item} />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="bg-white rounded shadow p-4 position-sticky">
              <h2 className="fs-3 fw-medium mb-4">Order Summary</h2>
              <div className="d-flex justify-content-between mb-2">
                <span>Items ({basketItems.reduce((total, item) => total + item.quantity, 0)})</span>
                <span>${getBasketTotal().toFixed(2)}</span>
              </div>
              <div className="border-top border-light my-4 pt-4">
                <div className="d-flex justify-content-between fw-medium fs-4">
                  <span>Total</span>
                  <span>${getBasketTotal().toFixed(2)}</span>
                </div>
              </div>
              <button onClick={handleConfirm}className="btn btn-success text-white py-3 rounded hover:bg-success-dark transition mt-4 d-flex align-items-center justify-content-center gap-2">
                <Check size={18} />Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketPage;