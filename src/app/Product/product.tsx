import Link from 'next/link';
import './app.css';

const Product = () => {
    return (
        <div className="container">
        <h1> 🌽 Node Farm 🥦 </h1>
        <figure className="product">
          <div className="product__organic"><h5>Organic</h5></div>
          <Link href='#' className='product__back'>
          <span className="emoji-left">👈</span>Bac
          </Link>
          <div className="product__hero">
          <span className="product__emoji product__emoji--1">🥑</span>
          <span className="product__emoji product__emoji--2">🥑</span>
          <span className="product__emoji product__emoji--3">🥑</span>
          <span className="product__emoji product__emoji--4">🥑</span>
          <span className="product__emoji product__emoji--5">🥑</span>
          <span className="product__emoji product__emoji--6">🥑</span>
          <span className="product__emoji product__emoji--7">🥑</span>
          <span className="product__emoji product__emoji--8">🥑</span>
          <span className="product__emoji product__emoji--9">🥑</span>
          </div>
          <h2 className='product__name'>Fresh Avocados</h2>
          <div className="product__details">
          <p><span className="emoji-left">🌍</span> From Portugal</p>
          <p><span className="emoji-left">❤️</span> Vitamin B, Vitamin K</p>
          <p><span className="emoji-left">📦</span> 4 🥑</p>
          <p><span className="emoji-left">🏷</span> 6.50€</p>
          </div>
          <Link href='#' className='product__link'>
            <span className='emoji-left'>🛒</span>
            <span>Add to shopping card (6.50$)</span>
          </Link>
          <p className='product__description'>
          A ripe avocado yields to gentle pressure when held in the palm of the
          hand and squeezed. The fruit is not sweet, but distinctly and subtly
          flavored, with smooth texture. The avocado is popular in vegetarian
          cuisine as a substitute for meats in sandwiches and salads because of
          its high fat content. Generally, avocado is served raw, though some
          cultivars, including the common Hass, can be cooked for a short time
          without becoming bitter. It is used as the base for the Mexican dip
          known as guacamole, as well as a spread on corn tortillas or toast,
          served with spices.
          </p>
        </figure>
      </div>
    )
}

export default Product;