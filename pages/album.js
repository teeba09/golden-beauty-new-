import { useEffect, useState } from "react";
import { Row, Col, Progress } from "antd";
import MyAlbumCard from '../components/albumCard'
import Nav from './nav';
import Footer from '../components/footer';


const Album = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://goldenbeauty.herokuapp.com/v1/products/4")
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Nav/>
    <div className="bg">
      {/* {loading ? (
        <Progress
          className="progress"
          type="circle"
          percent={100}
          format={() => "Done"}
        />
      ) : ( */}
        <div className="container">
          <div>
            <Row className="album-grid">
              {data.map((item) =>{
                console.log(item)
                return(
                  <MyAlbumCard image={item.image} name={item.name} id={item.id}/>
                )
              })}
            </Row>
          </div>
        </div>
      {/* )} */}
    </div>
    <Footer/>
    </div>
  );
};

export default Album;

3
