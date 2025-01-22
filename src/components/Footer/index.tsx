import { FC } from "react";
import products from "../../assets/products.png";
import "./styles.scss";

const Footer: FC = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__left">
          <span className="footer__text">Con el patrocinio de</span>
        </div>
        <div className="footer__right">
          <img src={products} alt="products" className="footer__image" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
