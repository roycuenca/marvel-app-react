import React, { Component } from 'react';
import Navbar from './components/Nav/Navbar';
import Content from './components/Content/Content';

import axios from "axios";
import md5 from "md5";
import  heroes from './marvelheroes.json';

// const config = {
//   params: {
//     apikey: '8c80f3470ba875b968778c20e5d2aa5a',
//     hash: md5(
//       Date.now() + 'd385d884f0cc8420d55912a53ea21343bac9ab60' + '8c80f3470ba875b968778c20e5d2aa5a'
//     ),
//     ts: Date.now()
//   },
//   method: "GET",
//   headers: {
//     Accept: "/"
//   }
// }

class App extends Component{

  state = {
    superHeroes: '',
  }

  componentWillMount = () => {
   this.getData();
  } 

  getData = () => {
   axios.get(heroes)
    .then( res => {
        console.log(res);
        this.setState({
          superHeroes: res
        });
    });

  }
  
  render() {
    return (
      <div className="container-flui"> 
        <Navbar/>
        <h1 className="text-center p-4">
          Super Heroes
        </h1>
        <Content/>
      </div>
    )
  }
}

export default App;