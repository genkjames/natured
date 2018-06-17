import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';
import Apply from './Apply';

function Routes(props) {
  return (
    <div>
      <Route path="/about" render={() => (
        <About errorStatus={props.errorStatus} />
      )} />
      <Route path="/contact" render={() => (
        <Contact errorStatus={props.errorStatus} />
      )} />
      <Route path="/faq" render={() => (
        <FAQ errorStatus={props.errorStatus}/>
      )} />
      <Route path="/apply" render={() => (
        <Apply errorStatus={props.errorStatus} />
      )} />
    </div>
  )
}

export default Routes;
