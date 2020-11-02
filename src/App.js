import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import CssDefinition from './CssDefinition';
import Home from './Home';
import HtmlDefinition from './HtmlDefinition';
import JsDefinition from './JsDefinition';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <Link to='/'> Home </Link>
            </li>

            <li>
              <Link to='/html'> HTML </Link>
            </li>

            <li>
              <Link to='/css'> CSS </Link>
            </li>

            <li>
              <Link to='/js'> JS </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/html' component={HtmlDefinition} />
        <Route path='/css' component={CssDefinition} />
        <Route path='/js' component={JsDefinition} />
      </Switch>
    </div>
  );
}

export default App;
