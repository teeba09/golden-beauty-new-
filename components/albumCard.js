import { Image, Card } from "antd";
const { Meta } = Card;
const MyAlbumCard = ({image, name,id}) => {
  return (
    <a href="/singleCard">
    <Card  key={id} hoverable cover={<Image className="pics" src={image} />}>
      <Meta title={name} />
    </Card>
    </a>
  );
};
export default MyAlbumCard;
