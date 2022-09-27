import React, { useReducer, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Checkout from "./Checkout";
import About from "./About";
import cartReducer from "./cartReducer";
import { Carousel } from "react-responsive-carousel";
import {
  carouselStock1,
  carouselStock2,
  carouselStock3,
  carouselStock4,
  carouselStock5,
  carouselStock6,
  imageNotFound,
} from "./images/index.js";
const images = [
  {
    src: carouselStock1,
    label: "Battery Changes",
  },
  {
    src: carouselStock2,
    label: "AC/Heat Repair",
  },
  {
    src: carouselStock3,
    label: "Welding",
  },
  {
    src: carouselStock4,
    label: "Breaks",
  },
  {
    src: carouselStock5,
    label: "Enginge Shit",
  },
  {
    src: carouselStock6,
    label: "Oil Changes",
  },
];
let initialCart;
try {
  initialCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  console.error("The cart could not be parsed into JSON.");
  initialCart = [];
}

export default function App() {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);
  return (
    <>
      <div className="content p-0">
        <Header />
        <main className="p-0">
          <Routes>
            <Route
              path="/Aruka-Repair-WebApp"
              element={
                <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                >
                  {images.map((image) => (
                    <div>
                      <img
                        src={image.src}
                        alt={imageNotFound}
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          maxHeight: "500px",
                        }}
                      />
                      <p className="legend">{image.label}</p>
                    </div>
                  ))}
                </Carousel>
              }
            />
            <Route path="/about" element={<About />}></Route>
            {/* <Route path="/:category" element={<Products />} />
            <Route
              path="/:category/:id"
              element={<Detail dispatch={dispatch} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} dispatch={dispatch} />}
            />
            <Route
              path="/checkout"
              element={<Checkout cart={cart} dispatch={dispatch} />}
            /> */}
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
