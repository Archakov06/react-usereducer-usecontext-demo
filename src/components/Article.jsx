import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Article({ title, text, image, onRemove, onOpen }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text.substr(0, 100)}</Card.Text>
        <Button onClick={onOpen} variant="outline-primary" className="mr-3">
          Просмотр
        </Button>
        <Button variant="outline-danger" onClick={onRemove}>
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Article;
