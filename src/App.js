import React from 'react';
import './App.scss';
import Navbar from './componets/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './componets/pages/Home';
import ContactUs from './componets/pages/ContactUs';
import OurLakesDams from './componets/pages/OurLakesDams';
import embeds from './componets/pages/Recreation';
import Permits from './componets/pages/Permits';
import Footer from './componets/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop>
      <Navbar />
      <Switch>
        <Route path='/' exact component= {Home} />
        <Route path='/contactus' exact component={ContactUs} />
        <Route path='/OurLakesDams' exact component={OurLakesDams} />
        <Route path='/Recreation' exact component={embeds} />
        <Route path='/Permits' exact component={Permits} />
      </Switch>
      <Footer />
     </ScrollToTop>
      </Router>
      </>
  );
}

export default App
