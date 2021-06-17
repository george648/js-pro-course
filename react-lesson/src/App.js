import React, {useState} from 'react';
import { Article } from './components/Article/Article';
import data  from './json/data.json';


function App() {
  const [articles, setArticles] = useState(data);
  const sayHi = () => console.log(3123)
  const onChange = ({target: {value}}) => {
      const newArticles = data.filter((article) => article.author.toLowerCase().includes(value.toLowerCase()));
      setArticles(newArticles)
  }
  return (
    <>
      <input onChange={onChange} onClick={sayHi}/>
      <Article data={articles}/>
    </>
  );
}

export default App;
