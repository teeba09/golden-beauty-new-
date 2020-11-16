// import Link from "next/link";

const Card = ({ image, name, description }) => {
    return (
      <div className="card">

    <img src={image} alt="" />
      <h1>{name}</h1>
      <p>{description}</p>

      
              
            {/* </Link>{" "} */}
      </div>
    );
  };

  export default Card;

