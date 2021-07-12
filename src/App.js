import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from "./components/globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData } from './components/Products/data';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Chose your favorite' data={productData}/>
    </Router>
  );
}

export default App;
