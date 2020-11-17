const Nav =()=> {

    return(

        <>
         <header>
          <div className="container">
            <nav>
              <h1 className="golden">Golden Beauty</h1>
              <ul className="nav-area">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <div className="dropdown">
                    <button className="dropbtn">CATAGORIES</button>
                    <div className="dropdown-content">
                      <a href="/album">hair</a>
                      <a href="/album">skin care</a>
                      <a href="/album">makeup</a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/login">Login</a>
                </li>
                {/* <li>
                  <a href="/singleCard">CONTACT US</a>
                </li> */}
              </ul>
            </nav>
          </div>
        </header>
        </>
    )
}

export default Nav;