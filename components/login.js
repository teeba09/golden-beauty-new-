const login = () => {
  return (
    <>
      <div class="container">
        <form id="signup">
          <div class="header">
            <h3>Sign Up</h3>

            <p>You want to fill out this form</p>
          </div>

          <div class="sep"></div>

          <div class="inputs">
            <input type="email" placeholder="e-mail" autofocus />

            <input type="password" placeholder="Password" />

            <div class="checkboxy">
              <input name="cecky" id="checky" value="1" type="checkbox" />
              <label class="terms">I accept the terms of use</label>
            </div>

            <a id="submit" href="#">
              SIGN UP FOR INVITE NOW
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default login;
