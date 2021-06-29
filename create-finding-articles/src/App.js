import { Route, Redirect, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About/About';
import { ArticlesInfo } from './pages/ArticleInfo/ArticlesInfo';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Tags } from './pages/Tags/Tags';
import './App.css'
import { ArticleDescription } from './pages/ArticleDescription/ArticleDescription';


function App() {

  return (
    <>
      <Header />
      <Switch>
        <div className="wrapper">
          <Route path="/">
            <Redirect to="/articles-info" />
          </Route>
          <Route path="/articles-info" exact>
            <ArticlesInfo />
          </Route>
          <Route>
            <ArticleDescription path="/articles-info/:articleId" />
          </Route>
          {/* <Route> */}
            {/* <PageNotFound /> */}
          {/* </Route>  */}
          <Route path="/tags">
            <Tags path="/tags" />
          </Route>
          <Route path="/about">
            <About path="/about" />
          </Route>
        </div>
      </Switch>
    </>
  );
}

export default App;
