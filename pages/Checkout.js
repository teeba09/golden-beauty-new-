import Nav from "./nav";

const Checkout = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="wrapper">
          <div className="title">
            <h1> Checkout form</h1>
          </div>
          <div className="contact-form">
            <div className="input-fields">
              <input type="text" className="input" placeholder="Name" />
              <input
                type="text"
                className="input"
                placeholder="Email Address"
              />
              <input type="text" className="input" placeholder="Phone" />
              <input type="text" className="input" placeholder="Address" />
            </div>
            <div className="msg">
              <textarea placeholder="Message"></textarea>
              <div className="btn">
                <a href="/invoiceL">DONE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
