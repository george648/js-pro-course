import {Option} from './option/Option';


export const Select = ({author}) => {
    return (
      <select>
          {author.map((authorOfArticle, index) => <Option key={index} authorOfArticle={authorOfArticle} /> )}
      </select>
    )
}