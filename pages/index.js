import { useEffect, useState } from "react";
import Card from "../components/myCard";
import Card1 from "../components/myCard1";
import Cover from "./cover";
import Link from "next/Link";
import Nav from './nav';
import Footer from './../components/footer';
export async function getStaticProps() {
  const res = await fetch("https://goldenbeauty.herokuapp.com/v1/products/5");
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
    fetch("https://goldenbeauty.herokuapp.com/v1/products/5")
      .then((response) => response.json())
      .then((result) => {
        setTop(result.results);
        setTopLoading(false);
      });

    fetch("https://goldenbeauty.herokuapp.com/v1/products/5")
      .then((response) => response.json())
      .then((result) => {
        setUpcoming(result.results);
        setUpcomingLoading(false);
        setCover({
          img: `https://goldenbeauty.herokuapp.com/v1/products/5${result.data[1].image}`,
          title: result.data.name,
        });
      });

    fetch("https://goldenbeauty.herokuapp.com/v1/products/5")
      .then((response) => response.json())
      .then((result) => {
        setPopular(result.results);
        setPopularLoading(false);
      });
  }, []);
  return (
    <>
      <div>
        <Nav/>
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
                <h2>best sellers</h2>
                <div className="cards">
                  {props.posts.data.map((e) => (
                    <Card1
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
        <Footer/>
      </div>
    </>
  );
};

export default Home;
