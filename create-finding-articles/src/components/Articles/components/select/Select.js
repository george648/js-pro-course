import {Option} from './option/Option';


export const Select = ({author}) => {
    return (
      <select>
          {author.map((authorOfArticle) => <Option key={authorOfArticle.articleId} authorOfArticle={authorOfArticle} /> )}
      </select>
    )
}