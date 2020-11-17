

const Card1 = ({ image, name, description }) => {
    return (

      <a href="./singleCard1">
      <div className="card">
    <img src={image} alt="" />
      <h1>{name}</h1>
      <p >{description}</p>
      </div></a>
    );
  };

  export default Card1;

