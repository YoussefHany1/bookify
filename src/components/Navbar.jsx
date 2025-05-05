import React from "react";
import { BookOpen } from "lucide-react";
import { useNavigate } from "../hooks/useNavigate";
import BasketCounter from "./BasketCounter";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div onClick={() => navigate("/")}className="d-flex align-items-center gap-2 btn border-0">
            <BookOpen size={24} className="text-primary" />
            <span className="fw-bold fs-3">Bookify</span>
          </div>
          <BasketCounter />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;