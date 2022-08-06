import React from 'react'
import { createContext, useEffect, useReducer } from "react";
// import PropTypes from "prop-types";
// utils
// import axios from "../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  products: null,
  count: 0,
  totalPrice: 0
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { products, count, totalPrice } = action.payload;
    return {
      ...state,
      products,
      count,
      totalPrice
    };
  },
  UPDATECART: (state, action) => {
    const { products, count, totalPrice } = action.payload;
    return {
      ...state,
      products,
      count,
      totalPrice
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const CartContext = createContext({
  ...initialState,
  updateCart: () => Promise.resolve()
});

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const sumTotal = (array) => {
    let totalCount = 0
    let totalPrice = 0
    const data = array.map((product) => {
      totalCount += product.count
      totalPrice += product.price * product.count
      return { 
        totalCount: totalCount, 
        totalPrice: totalPrice
      }
    })

    return data
  }

  useEffect(() => {
    const initialize = async () => {
      const products = JSON.parse(localStorage.getItem("products"))
      if (products) {
        let data = sumTotal(products)
        console.log(data)
        dispatch({
          type: "INITIALIZE",
          payload: {
            products: products,
            count: data[0].totalCount,
            totalPrice: data[0].totalPrice
          },
        });
      }

      console.log("cartContext=>", products)
    }

      initialize();
    }, []);

  const updateCart = async (data) => {
    console.log("cartcontext=>", data)
    const result = sumTotal(data)
    dispatch({
      type: "UPDATECART",
      payload: {
        products: data,
        count: result[0].totalCount,
        totalPrice: result[0].totalPrice
      },
    });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        updateCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
