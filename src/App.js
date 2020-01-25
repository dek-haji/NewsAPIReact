import React, { Component } from 'react';
import News from "./News"
import Db from "./Db"

import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      isLoaded: false,
    }
   // this.getQuotes = this this.getQuotes.bind(this);
   console.log(this.state.quotes)
  }

   dataB() {
    fetch("https://api-v2.intrinio.com/companies/AAPL?api_key=OjEzYzBiMGM5NmU4NzZiNzFkN2ZkMzNkNWEzYjc5MjRl").then(response => response.json())
      .then(response => {
        this.setState({
          isLoaded: true,
          quotes: [response]
        })
      })
  }
  componentDidMount() {
    
   this.dataB()
  }
  render() {
    console.log(this.state.quotes)
   let  data1 = Array.from(this.state.quotes)
    //const { isLoaded, quotes } = Array.from(this.state);
      return (
        <div className="App">
            <News data2= {data1} />
        </div>
      )
    }
  }


export default App;
