import React, { Component } from 'react';


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
  componentDidMount() {
    
    fetch("https://api-v2.intrinio.com/companies/AAPL?api_key=OjEzYzBiMGM5NmU4NzZiNzFkN2ZkMzNkNWEzYjc5MjRl").then(response => response.json())
        .then(response => {
          this.setState({
            isLoaded: true,
            quotes: [response]
          })
        });
  }
  render() {
    console.log(this.state.quotes)
   let  data1 = Array.from(this.state.quotes)
    //const { isLoaded, quotes } = Array.from(this.state);
      return (
        <div className="App">
          <ul>
            {data1.map(item => (
              <card key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.short_description}</p>
                
              </card>
            ))};
        </ul>
        </div>
      )
    }
  }


export default App;
