import { useEffect, useState } from "react";
import Card from "../components/myCard";
import Login from "./signIn";
import Cover from "./cover";
import Link from "next/Link"

export async function getStaticProps() {
  const res = await fetch("https://goldenbeauty.herokuapp.com/v1/products");
  const posts = await res.json();
  return { props: { posts } };
}

const Home = (props) => {
  const [top, setTop] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topLoading, setTopLoading] = useState(true);
  const [upcomingLoading, setUpcomingLoading] = useState(true);
  const [popularLoading, setPopularLoading] = useState(true);
  const [cover, setCover] = useState("");
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch("https://goldenbeauty.herokuapp.com/v1/products")
      .then((response) => response.json())
      .then((result) => {
        setTop(result.results);
        setTopLoading(false);
      });

    fetch("https://goldenbeauty.herokuapp.com/v1/products")
      .then((response) => response.json())
      .then((result) => {
        setUpcoming(result.results);
        setUpcomingLoading(false);
        setCover({
          img: `https://goldenbeauty.herokuapp.com/v1/products${result.data[1].image}`,
          title: result.data.name,
        });
      });

    fetch("https://goldenbeauty.herokuapp.com/v1/products")
      .then((response) => response.json())
      .then((result) => {
        setPopular(result.results);
        setPopularLoading(false);
      });
  }, []);
  return (
    <>
      <Login/>

      {/* <div>
        <header>
          <div className="container">
            <nav>
              <h1 className="golden">Golden Beauty</h1>
              <ul className="nav-area">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <div className="dropdown">
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                      <a href="/[1]">hair</a>
                      <a href="/[3]">skin care</a>
                      <a href="/[2]">makeup</a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="/signIn">SIGN UP</a>
                </li>
                <li>
                  <a href="/Checkout">CONTACT US</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Cover
            count={count}
            setCount={setCount}
            cover={cover}
            setCover={setCover}
            upcoming={upcoming}
          />  
          <section className="grid">
            <div className="container">
              <div className="top-rated">
                <h2>Selling Fast</h2>
                <div className="cards">
                  {props.posts.data.map((e) => (
                    <Card
                      image={e.image}
                      title={e.name}
                      description={e.description}

                      
                    />  




                  ))}
                </div>
              </div>
              <div className="most-popular">
                <h2>Most Popular</h2>
                <div className="cards">
                  {props.posts.data.map((e) => (
                    <Card
                      image={e.image}
                      title={e.name}
                      description={e.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div> */}
    </>
  );
};

export default Home;
