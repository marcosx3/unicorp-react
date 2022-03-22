import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Header from './componets/header/Header';
import MainComponent from './componets/main/MainComponent';
import ServicesComponent from './componets/services/ServicesComponent';
import About from './componets/about/About';
import Footer from  './componets/footer/Footer'

ReactDOM.render(
  <React.StrictMode>
   <Header/>
   <MainComponent/>
   <ServicesComponent/>
   <About/>
   <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
