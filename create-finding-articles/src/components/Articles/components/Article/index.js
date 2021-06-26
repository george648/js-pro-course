import './Article.scss';
import { Link } from 'react-router-dom';

export function Article({ title, description, author, articleId }) {
  return (
    <div className="article">
      <div className="article__header">
        <h3>{title}</h3>
      </div>
      <div className="article__description">
        {description}
      </div>
      <div className="article__footer">
        <div className="article__author">Author: {author}</div>
      </div>
      <Link to={`/article-info/${articleId}`}>Open full description</Link>
    </div>
  )
}