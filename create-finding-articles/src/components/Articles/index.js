import { useState } from 'react';
import { Select } from './components/select/Select';
import { SearchInput } from './components/NewArticle/searchInput/SearchInput';
import './Articles.scss';
import { NewArticleForm } from './components/NewArticle/NewArticleForm';
import { ArticleList } from './components/ArticleList/ArticleList';
import { Button } from './UI/Button/Button';
import { ArticleNotFound } from './components/ArticleNotFound/ArticleNotFound';

export function Articles({ articles: articlesMock }) {
  const [articles, setArticle] = useState(articlesMock);
  const [serachingString, setSearch] = useState('');
  const [serachingAuthor, setAuthor] = useState('');
  const [isFormOpened, setOpenForm] = useState(false);

  const addTaskHendler = ({author, description, title}) => {
    if(!author || !description || !title) {
      return
    }
    
    setArticle(
      [ 
      {author, description, title,  articleId: articles.length +1 },
      ...articles,
      ]
    )
    setOpenForm(false)
  };

  const filteredArticles = articles
  .filter((article) => article.description.includes(serachingString))
  .filter((article) => !serachingAuthor || article.author === serachingAuthor);

  const onFilterAuthor = (author) => {
    setAuthor(author)
  };

  const authorsOfArticles = articles.map((author) => author.author)
  
  const onSearchDescriptionInput = (searchDescriptionString) => {
    setSearch(searchDescriptionString)
  };

  const openFormHandler = () => { 
    setOpenForm(true)
  };

  const onCloseForm = () => {
    setOpenForm(false)
  };

  return (
    <div className="articles">
      <Button label="open form" onClick={openFormHandler} />
      {isFormOpened && <NewArticleForm onCloseForm={onCloseForm} addTaskHendler={addTaskHendler} />}
      <SearchInput onSearchDescriptionInput={onSearchDescriptionInput} />
      <Select onFilterAuthor={onFilterAuthor} author={authorsOfArticles} />
      { filteredArticles.length ? (
        <ArticleList articles={filteredArticles} />
        ) :
        <ArticleNotFound />
      }

    </div>
  )
}