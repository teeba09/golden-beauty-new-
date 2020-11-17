import Nav from "./nav";
import Footer from "./../components/footer";

const SingleCard = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="product-card">
          <h1>Lorial shampoo</h1>
          <p>fix hair failling</p>
          <div className="product-pic"></div>
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
