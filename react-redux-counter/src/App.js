import './App.css';
import {Counter} from './components/counter/Counter.jsx'
import {AddUser} from './components/AddUser/AddUser.jsx'
import {ShownUsers} from './components/ShownUser/ShownUsers.jsx'


function App() {
  return (
    <div className="App">
      <Counter/>
      <AddUser />
      <ShownUsers />
    </div>
  );
}

export default App;
