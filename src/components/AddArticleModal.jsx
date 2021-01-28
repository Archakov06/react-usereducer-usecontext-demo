import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddArticleModal({ show, onClose, onAddArticle }) {
  const [data, setData] = React.useState({
    title: '',
    text: '',
    image: '',
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onClickAdd = () => {
    if (onAddArticle) {
      onAddArticle(data);
    }
    setData({
      title: '',
      text: '',
      image: '',
    });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавление статьи</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChangeInput}
              name="title"
              value={data.title}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Изображение</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChangeInput}
              name="image"
              value={data.image}
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Текст</Form.Label>
            <Form.Control
              as="textarea"
              onChange={handleChangeInput}
              name="text"
              rows={5}
              value={data.text}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Закрыть
        </Button>
        <Button variant="success" onClick={onClickAdd}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddArticleModal;
