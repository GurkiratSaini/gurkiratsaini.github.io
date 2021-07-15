import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />

        <div className="container">
          <Switch>
            <Route exact path="/" component={About}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/resume" component={Resume}></Route>

            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
