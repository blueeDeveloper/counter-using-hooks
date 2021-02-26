import { Button, ButtonGroup } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const changeCounter = (direction) => {
    direction === "increment" ? setCount(count => count+ 1) : setCount(count => count- 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        { count }
        <ButtonGroup>
        <Button variant="primary" onClick={() => changeCounter("increment")}>Increment count</Button>
        <Button style={{ marginLeft: 10}} variant="primary" onClick={() => changeCounter("decrement")}>Decrement count</Button>
        </ButtonGroup>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Ashwin
        </a>
      </header>
    </div>
  );
}

export default App;
