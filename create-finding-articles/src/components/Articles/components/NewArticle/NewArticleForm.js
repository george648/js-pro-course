import { useState } from 'react';
import './NewArticleForm.scss';

export const NewArticleForm = ({addTaskHendler}) => {
  // let author; 
  // let description;
  // let title;

  const [article, setArticle] = useState('');
  const [emptyDescription, setDescription] = useState('');
  const [emptyTitle, setTitle] = useState('');

  const clickAuthorHandler = (event) => {
    //  author = event.target.value;
     setArticle(event.target.value)
    };

  const changeDescription = (event) => {
    setDescription(event.target.value);
    // description = event.target.value;
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    // title = event.target.value;
  }; 

  const onSubmit = (event) => {
    event.preventDefault();
    addTaskHendler({article, emptyDescription, emptyTitle});
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
        value={article}
      />
      <input
        onChange={onChangeTitle}
        type="text"
        value={emptyTitle}
        placeholder="Title"
      />
      <textarea
        onChange={changeDescription}
        value={emptyDescription}
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