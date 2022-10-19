import './App.css';
import { Route,Switch } from 'react-router-dom';
import Header from './components/header'
import Sidenav from './components/sidenav'
import App1 from './pages/app1'
import App2 from './pages/app2'

function App() {
  return (
    <div>
      <header className="header">
        <Header/>
      </header>
      <div className="mainBody">
        <Sidenav/>
        <div className="content">
          <Switch>
            <Route path='/app1' component={App1}></Route>
            <Route path='/app2' component={App2}></Route>
          </Switch>
        </div>
      </div>

    </div>
  );
}

export default App;
