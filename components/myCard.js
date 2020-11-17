

const Card = ({ image, name, description }) => {
    return (

      <a href="./singleCard">
      <div className="card">
    <img src={image} alt="" />
      <h1>{name}</h1>
      <p >{description}</p>
      </div></a>
    );
  };

  export default Card;

