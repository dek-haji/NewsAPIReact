import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      isLoaded: false,
    }
   // this.getQuotes = this this.getQuotes.bind(this);
  }
  componentDidMount() {
    fetch("https://api-v2.intrinio.com/companies/AAPL?api_key=OjEzYzBiMGM5NmU4NzZiNzFkN2ZkMzNkNWEzYjc5MjRl").then(response => response.json())
        .then(text1 => {
          this.setState({
            isLoaded: true,
            quotes: text1,
          })
        });
  }
  render() {
    console.log(this.state.quotes)
    const { isLoaded, quotes } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    }
    else {
      return (
        <div className="App">
          <ul>
            {quotes.map(item => (
              <li key={item.id}>
                
                  { item.short_description }
                
              </li>
            ))};
        </ul>
        </div>
      )
    }
  }
}

export default App;
