import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
  <h1>Welcome to the Magic Eight Ball</h1>
  <p className='info'>Ask me a question and tap me for an answer...</p>
  <input type='text' className='question'/>
  <div className='eight-ball'>
    <div className='content'>
  <p className='error'></p>
  <p className='answer'></p>
  <p className='eight'></p>
    </div>
    </div>
    </div>
  );
}

export default App;
