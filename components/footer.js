const Footer = () => {
  return (
    <>
        <footer>
      <div className="footer-container">
        <div className="footer-left">
          <h4>Quick Links</h4>

          <ul>
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          {/* <h4>Follow us on</h4> */}

          <div className="social-icons">
            <a href="#">
              {/* <img src="images/instagram-logo.png" alt="" /> */}
            </a>

            <a href="#">
              {/* <img src="images/facebook-logo.png" alt="" /> */}
            </a>

            <a href="#">
              {/* <img src="images/twitter-logo.png" alt="" /> */}
            </a>
          </div>

          <p>This website is managed by Live Blogger</p>
        </div>
      </div>
      </footer>
    </>
  );
};

export default Footer;
