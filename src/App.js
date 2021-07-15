import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />

        <div className="container">
          <Switch>
            <Route exact path="/" component={About}></Route>
            <Route exact path="/about" component={About}></Route>
            {/* <Route exact path="/" component={Portfolio}></Route>
            <Route exact path="/" component={Contact}></Route>
            <Route exact path="/" component={Resume}></Route> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
