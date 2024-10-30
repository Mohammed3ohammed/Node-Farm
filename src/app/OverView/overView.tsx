import Link from "next/link";
import './main.css';

const OverView = () => {
  return (
    <div className="container">
        <h1>🌽 Node Farm 🥦</h1>
        <div className="cards-container">
            <figure className="card">
                <div className="card__emoji">🥑🥑</div>
                <div className="card__title-box">
                    <h2 className="card__title">Frech Avocado</h2>
                </div>
                <div className="card__details">
                    <div className="card__detail-box">
                        <h6 className="card__detail">4 🥑 per 📦</h6>
                    </div>
                    <div className="card__details-box">
                        <h6 className="card__detail card__detail--price">6.50$</h6>
                    </div>
                </div>
                <Link className="card__link" href='#'>
                <span>Detail <i className="emoji-right">👉</i></span>
                </Link>
            </figure>
            <figure className="card">
                <div className="card__emoji">🧀🧀</div>
                <div className="card__title-box">
                    <h2 className="card__title">Got and Sheep Cheese</h2>
                </div>
                <div className="card__details">
                    <div className="card__detaiil-box">
                        <h6 className="card__detail">250g per 📦</h6>
                    </div>

                    <div className="card__detail-box">
                        <h6 className="card__detail card__detail--price">5.00$</h6>
                    </div>
                </div>
                <Link href='#' className="card__link">
                <span>Detail <i className="emoji-right">👉</i></span>
                </Link>
            </figure>

            <figure className="card">
               <div className="card__emoji">🥦🥦</div>
               <div className="card__title-box">
                    <h2 className="card__title">Apollo Broccoli</h2>
               </div>
               <div className="card__details">
                <div className="card__detail-box">
                    <h6 className="card__detail card__detail--organic">Organic</h6>
                </div>
                <div className="card__detail-box">
                    <h6 className="card__detail">3 🥦 per 📦</h6>
                </div>
                <div className="card__detail-box">
                    <h6 className="card__detail card__detail--price">5.50$</h6>
                </div>
               </div>
               <Link href='#' className="card__link">
               <span>Detail <i className="emoji-right">👉</i></span>
               </Link>
            </figure>

            <figure className="card">
                <div className="card__emoji">🥕🥕</div>
                <div className="card__title-box">
                    <h2 className="card__title">Baby Carrots</h2>
                </div>

                <div className="card__details">
                    <div className="card__detail-box">
                        <h6 className="card__detail card__detail--organic">Organic!</h6>
                    </div>
                    <div className="card__detail-box">
                        <h6 className="card__detail">20 🥕 per 📦</h6>
                    </div>
                    <div className="card__detail-box">
                        <h6 className="card__detail card__detail--price">3.00$</h6>
                    </div>
                </div>
                <Link href='#' className="card__link">
                <span>Detail <i className="emoji-right">👉</i></span>
                </Link>
            </figure>

            <figure className="card">
                <div className="card__emoji">🌽🌽</div>
                <div className="card__title-box">
                    <h2 className="card__title">Sweet Corncobs</h2>
                </div>
                <div className="card__details">
                    <div className="card__detail-box">
                        <h6 className="card__detail">2 🌽 per 📦</h6>
                    </div>
                    <div className="card__detail-box">
                        <div className="card__detail card__detail--price">2.00$</div>
                    </div>
                </div>
                <Link href='#' className="card__link">
                <span>Detail <i className="emoji-right">👉</i></span>
                </Link>
            </figure>
        </div>
    </div>
  )};

export default OverView;
