import { useState } from 'react';
import { Article } from './components/Article';
import { Select } from './components/select/Select';
import './Articles.scss';

import { NewArticleForm } from './components/NewArticle/NewArticleForm';

export function Articles({ articles: articlesMock }) {
  
  console.log(articlesMock)

  const [articles, setTask] = useState(articlesMock);

  const addTaskHendler = ({author, description, title}) => {
    if(!author || !description || !title) {
      return
    }
    
    setTask(
      [ 
      {author, description, title,  articleId: articles.length +1 },
      ...articles,
      ]
    )
  }
  
  console.log(articles)
  
  const onChangeDescription = ( {target: {value}} ) => {
    const newArticles = articlesMock.filter((article) => article.description.toLowerCase().includes(value.toLowerCase()));
    setTask(newArticles)
  }


  return (
    <div className="articles">
      <input onChange={onChangeDescription} />
      <Select author={articles} />
      <NewArticleForm addTaskHendler={addTaskHendler} />
      {articles.map((article) => (
        <Article
          key={article.articleId}
          title={article.title}
          description={article.description}
          author={article.author}
        />
      ))}
    </div>
  )
}