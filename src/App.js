import React from "react";
import "./App.css";
import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import Products from "./Pages/Products";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <section className='hero'>
          <div className='hero-text'>
            <h1>Lorem ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Faucibus at parturient est
              tincidunt et platea volutpat at. Etiam id iaculis tincidunt sem
              scelerisque tincidunt elementum tellus. Risus vel fermentum
              faucibus tincidunt.
            </p>
          </div>
          <img src='path/to/your/image' alt='StudyFin' className='hero-image' />
        </section>

        <section className='products-section'>
          <Products />
        </section>

        <section className='logos'>
          <div className='logo'>LOGO</div>
          <div className='logo'>LOGO</div>
          <div className='logo'>LOGO</div>
          <div className='logo'>LOGO</div>
          {/* Add more logos as needed */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
