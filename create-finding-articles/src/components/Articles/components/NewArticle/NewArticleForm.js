import { useState } from 'react';
import './NewArticleForm.scss';

export const NewArticleForm = ({addTaskHendler}) => {
  const [author, setArticle] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const clickAuthorHandler = (event) => {
     setArticle(event.target.value)
    };

  const changeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  }; 

  const onSubmit = (event) => {
    event.preventDefault();
    addTaskHendler({author, description, title});
    setArticle('');
    setDescription('');
    setTitle('');
  }
  
  return (
    <form onSubmit={onSubmit} className="add-new-article">
      <input
        onChange={clickAuthorHandler}
        type="text"
        placeholder="Author"
        value={author}
      />
      <input
        onChange={onChangeTitle}
        type="text"
        value={title}
        placeholder="Title"
      />
      <textarea
        onChange={changeDescription}
        value={description}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
      >

      </textarea>
      <div className="add-new-article__buttons">
        <button type="button">Close form</button>
        <button type="submit">Create article</button>
      </div>
    </form>
  )
}