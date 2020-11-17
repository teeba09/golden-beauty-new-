import Nav from "./nav";
import Footer from "./../components/footer";

const SingleCard = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="product-card">
          <h1>Blusher</h1>
          <p>pops your cheecks</p>
          <div className="product-pic1"></div>
          <div className="product-colors"></div>
          <div className="product-info">
            <div className="product-price">$7</div>
            <a href="/checkout" className="product-button">
              buy
            </a>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default SingleCard;
