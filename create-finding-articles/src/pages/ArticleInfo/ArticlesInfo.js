import { articles } from './../../data';
import { Articles } from './../../components/Articles/index'


export const ArticlesInfo = () => {
    return (
      <Articles articles={articles} />
    )
}