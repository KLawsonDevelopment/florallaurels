import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import TopLayer from './components/TopLayer';

function App() {

  return (
    <Router>
      <TopLayer></TopLayer>
    </Router>
  );
}

export default App;
