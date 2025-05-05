import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from "../hooks/useNavigate";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="mx-auto bg-white rounded shadow p-4 text-center">
        <div className="d-inline-flex align-items-center justify-content-center w-auto h-auto rounded-circle bg-success text-light mb-5">
          <Check size={32} />
        </div>
        <h1 className="fs-2 fw-bold mb-2">Order Confirmed!</h1>
        <p className="text-muted">
          Thank you. Your books will be available for pickup shortly.
        </p>
        <button onClick={() => navigate("/")}className="btn btn-primary text-white py-2 px-3 rounded hover:bg-primary-dark transition">
            Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;