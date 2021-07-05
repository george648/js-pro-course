import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Article.scss';
import { NewArticleForm } from './../NewArticle/NewArticleForm';


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
      <Link to={`/articles-info/${articleId}`}>Open full description</Link>
    </div>
  )
}