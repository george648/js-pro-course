import { useState, useCallback, useMemo } from 'react';
import { compose } from '../../utils/compose';
import { Button } from '../UI/Button';
import { Modal } from '../UI/Modal/Modal';
import { NewArticleForm } from './components/NewArticle';
// import { NewArticleForm } from './components/NewArticle/NewArticleFormClass';
import { Search } from './components/Search';
import { AuthorFilter } from './components/AuthorFilter';
import { ArticlesList } from './components/ArticlesList';
import { ArticlesNotFound } from './components/ArticlesNotFound';
import { filterByAuthor, filterByDescription } from './utils';
import { TagOnModal } from './../Tags/components/TagOnModal/TagOnModal';
import './Articles.scss';

export function Articles({ articles: articlesMock }) {
  const [articles, setArticles] = useState(articlesMock);
  const [searchedValue, setSearchedValue] = useState('');
  const [searchedAuthor, setAuthor] = useState('');
  const [isFormOpened, setIsFormOpened] = useState(false);

  const searchHandler = (value) => {
    setSearchedValue(value);
  };

  const authorFilterHandler = useCallback((author) => {
    setAuthor(author);
  }, [setAuthor]);

  const authors = useMemo(() => {
    return articles.map((article) => article.author);
  }, [articles]);

  const createArticleHandler = useCallback(({ author, description, title }) => {
    if (!author || !description || !title) {
      return
    }
    const newArticle = { author, description, title, articleId: articlesMock.length + 1 };
    setArticles([
      newArticle,
      ...articles
    ]);
    setIsFormOpened(false);
  }, [setArticles, articles, setIsFormOpened]);

  const openFormHandler = () => {
    setIsFormOpened(true);
  }

  const closeFormHandler = useCallback(() => {
    setIsFormOpened(false);
  }, [setIsFormOpened]);

  const filteredArticles = compose(
    filterByAuthor(searchedAuthor),
    filterByDescription(searchedValue)
  )(articles);


  const closeModalBtn = () => {
    setIsFormOpened(false)
  };

  const cancelModalBtn = () => {
    setIsFormOpened(false)
    
  };

  const submitBtn = () => {

    setIsFormOpened(false)
  };

  const onFormClose = () => {
    setIsFormOpened(false)
  };

  return (
    <div className="articles">

      {isFormOpened && (
          <Modal cancelModalBtn={cancelModalBtn} submitBtn={submitBtn} closeModalBtn={closeModalBtn} >
            <NewArticleForm onFormClose={onFormClose} createArticleHandler={createArticleHandler}/>
            <TagOnModal />
        </Modal> 
      )}

      <div className="articles__controls">
        <Search onSearch={searchHandler} />
        <AuthorFilter authors={authors} onFilter={authorFilterHandler} />
        <Button label="Create article" onClick={openFormHandler} />

      </div>

      {filteredArticles.length ? (
        <ArticlesList articles={filteredArticles} />
      ) : (
        <ArticlesNotFound />
      )}
    </div>
  )
}