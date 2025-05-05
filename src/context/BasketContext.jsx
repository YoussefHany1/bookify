import { createContext, useContext, useReducer } from "react";

// Create Context for Basket
export const BasketContext = createContext();

// Action types for reducer
const ADD_TO_BASKET = "ADD_TO_BASKET";
const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";
const CLEAR_BASKET = "CLEAR_BASKET";

// Reducer function for basket state
const basketReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex > -1) {
        return state.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    
    case REMOVE_FROM_BASKET:
      return state.filter(item => item.id !== action.payload);
    
    case UPDATE_QUANTITY:
      return state.map(item => 
        item.id === action.payload.id 
          ? { ...item, quantity: action.payload.quantity } 
          : item
      );
    
    case CLEAR_BASKET:
      return [];
    
    default:
      return state;
  }
};

export const BasketProvider = ({ children }) => {
  const [basketItems, dispatch] = useReducer(basketReducer, []);

  const addToBasket = (book) => {
    dispatch({ type: ADD_TO_BASKET, payload: book });
  };

  const removeFromBasket = (bookId) => {
    dispatch({ type: REMOVE_FROM_BASKET, payload: bookId });
  };

  const updateQuantity = (bookId, quantity) => {
    if (quantity < 1) {
      removeFromBasket(bookId);
      return;
    }
    dispatch({ type: UPDATE_QUANTITY, payload: { id: bookId, quantity } });
  };

  const clearBasket = () => {
    dispatch({ type: CLEAR_BASKET });
  };

  const getBasketTotal = () => {
    return basketItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };

  const basketItemCount = basketItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <BasketContext.Provider value={{ 
      basketItems, 
      addToBasket, 
      removeFromBasket, 
      updateQuantity, 
      clearBasket, 
      getBasketTotal,
      basketItemCount
    }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};