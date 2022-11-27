import { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
