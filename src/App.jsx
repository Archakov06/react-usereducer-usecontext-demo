import React from 'react';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

import Article from './components/Article';
import AddArticleModal from './components/AddArticleModal';
import FullArticleModal from './components/FullArticleModal';

import { reducer, initialState } from './reducer';

export const StateContext = React.createContext();

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const openModal = (name, data) => {
    dispatch({
      type: 'OPEN_MODAL',
      payload: { name, data },
    });
  };

  const closeModal = (name) => {
    dispatch({
      type: 'CLOSE_MODAL',
      payload: { name },
    });
  };

  const onAddArticle = (data) => {
    dispatch({
      type: 'ADD_ARTICLE',
      payload: data,
    });
  };

  const onRemoveArticle = (id) => {
    dispatch({
      type: 'REMOVE_ARTICLE',
      payload: id,
    });
  };

  return (
    <Container className="articles">
      <Button onClick={() => openModal('addArticle')}>Добавить статью</Button>

      <StateContext.Provider value={[state, dispatch, closeModal]}>
        <AddArticleModal
          show={state.visibleModal.addArticle}
          onClose={() => closeModal('addArticle')}
          onAddArticle={onAddArticle}
        />

        <FullArticleModal />
      </StateContext.Provider>

      <CardColumns className="mt-4">
        {state.articles.map((obj) => (
          <Article
            key={obj.id}
            title={obj.title}
            text={obj.text}
            image={obj.image}
            onRemove={() => onRemoveArticle(obj.id)}
            onOpen={() => openModal('fullPost', obj)}
          />
        ))}
      </CardColumns>
    </Container>
  );
}

export default App;
