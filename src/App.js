import './App.css';

// components
import Header from './components/Header';
import Registration from './components/Registration';
import Account from './components/Account';
import HomePage from './components/HomePage';
import Error404 from './components/Error404';
import Login from './components/Login'

// react router imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/" component={ HomePage } exact />
                    <Route path="/registration" component={ Registration } />
                    <Route path="/account" component={ Account } />
                    <Route path="/login" component={ Login } />
                    <Route component={ Error404 } />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
