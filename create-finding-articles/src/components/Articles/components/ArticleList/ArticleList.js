import { Article } from '../Article/index'

export const ArticleList = ( { articles } ) => {
    return (
        <>
        {articles.map((article) => (
            <Article
              key={article.articleId}
              title={article.title}
              description={article.description}
              author={article.author}
              articleId={article.articleId}
            />
          ))}
        </>
    )
}