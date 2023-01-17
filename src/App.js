import './App.css';
import HelloKittyLogo from './images/HelloKittyLogo.png';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='todo-app'>
      <div className='logo-container'>
        <img src={HelloKittyLogo}
        className='hellokitty-logo'
        alt='Hello Kitty logo' />
      </div>
      <div className='todo-principal'>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
