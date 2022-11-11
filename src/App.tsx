import React from 'react';
import imgMobile from './img/image-product-mobile.jpg';
import imgDesktop from './img/image-product-desktop.jpg';
import cartIcon from './img/icon-cart.svg';
import Card from "./components/Card/Card";
import ResponsiveImg from "./components/ResponsiveImg/ResponsiveImg";
import {bodyText, button, subtitle, title} from "./styles";
import Price from "./components/Price/Price";

function App() {
  return (
      <Card>
        <Card.Header>
          <ResponsiveImg
            alt="Gabrielle Essence Eau De Parfum"
            mobileSrc={imgMobile}
            desktopSrc={imgDesktop}
          />
        </Card.Header>
        <Card.Body>
          <p className={subtitle}>
            PERFUME
          </p>
          <h2 className={title}>
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className={bodyText}>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <Price oldPrice={'$169.99'} newPrice={'$149.99'} />
          <a href="/" className={button}>
            <img className={'inline mx-3'} src={cartIcon} alt=""/>
            Add to Cart
          </a>
        </Card.Body>
      </Card>
  );
}

export default App;
