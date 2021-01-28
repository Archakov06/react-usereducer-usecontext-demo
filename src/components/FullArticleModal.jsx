import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { StateContext } from '../App';

import Text from './Text';

function FullArticleModal() {
  const [state, dispatch, closeModal] = React.useContext(StateContext);

  if (!state.currentPost) {
    return null;
  }

  return (
    <Modal show={state.visibleModal.fullPost} onHide={() => closeModal('fullPost')}>
      <Modal.Header closeButton>
        <Modal.Title>{state.currentPost.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          style={{ width: '100%' }}
          src={state.currentPost.image}
          alt={state.currentPost.title}
          className="mb-3"
        />
        <Text value={state.currentPost.text} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => closeModal('fullPost')}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FullArticleModal;
