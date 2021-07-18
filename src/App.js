import './App.css';

import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {

  const [projects] = useState([
    {
      name: 'Deep Thoughts',
      image: './images/deep-thoughts.png',
      github_link: 'https://github.com/GurkiratSaini/deep-thoughts',
      deployed_link: 'https://mighty-lake-44841.herokuapp.com/',
      type: 'React'
    },
    {
      name: 'Pizza Hunt',
      image: './images/pizza-hunt.png',
      github_link: 'https://github.com/GurkiratSaini/pizza-hunt',
      deployed_link: 'https://cryptic-caverns-03725.herokuapp.com/',
      type: 'React'
    },
    {
      name: 'Photo Port',
      image: './images/photo-port.png',
      github_link: 'https://github.com/GurkiratSaini/photo-port',
      deployed_link: 'https://gurkirat.me/photo-port',
      type: 'React'
    },
    {
      name: 'COVacation',
      image: './images/covacation.png',
      github_link: 'https://github.com/GurkiratSaini/covacation',
      deployed_link: 'https://stevtm.github.io/COVacation/',
      type: 'React'
    },
    {
      name: 'Just Tech News',
      image: './images/just-tech-news.png',
      github_link: 'https://github.com/GurkiratSaini/just-tech-news',
      deployed_link: 'https://pacific-dawn-72541.herokuapp.com/',
      type: 'React'
    },
    {
      name: 'Zookeepr',
      image: './images/zookeepr.png',
      github_link: 'https://github.com/GurkiratSaini/zookeepr',
      deployed_link: 'https://protected-harbor-87776.herokuapp.com/',
      type: 'React'
    }]);

  const [tabs] = useState(['about', 'portfolio', 'contact', 'resume']);

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  console.log(currentTab + " App");

  return (
    <div className="flex-column justify-flex-start min-100-vh">
      <Header
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <div className="container">

        {currentTab === 'about' && (
          <About></About>
        )}

        {currentTab === "contact" && (
          <Contact></Contact>
        )}

        {currentTab === "portfolio" && (
          <Portfolio></Portfolio>
        )}

        {currentTab === "resume" && (
          <Resume></Resume>
        )}

      </div>
      <Footer />
    </div>
  );
}

export default App;
