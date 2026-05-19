import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface DesignObject {
  id: number;
  imageLink: string;
  title: string;
  link: string;
}

interface DesignCardProps {
  designProp: DesignObject;
}

const DesignCard = ({ designProp }: DesignCardProps) => {
  return (
    <Card className='rounded m-5 shadow-lg' style={{color:"#3a5474"}}>
      <Card.Img variant="top" src={designProp.imageLink} className='img-fluid rounded'></Card.Img>
      <Card.Body>
        <Card.Title>{designProp.title}</Card.Title>
        <Button href={designProp.link} target='_blank'>{designProp.title}</Button>
      </Card.Body>
    </Card>
  );
};

export default DesignCard;
