import React from 'react';
import axios from 'axios';
import './App.css';
import Suggestions from './SuggestionComponent';

const API_KEY = '18d5ae46dac0b78c455c6d608b79d137'
const API_URL = 'https://ws.audioscrobbler.com/2.0/?method=artist.search&artist='


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  getInfo = () => {
    axios.get(`${API_URL}${this.state.query}&api_key=${API_KEY}&limit=5&format=json`)
    // http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=adele&api_key=18d5ae46dac0b78c455c6d608b79d137&format=json
    .then(({ data }) => {
      // console.log(data.results.artistmatches.artist[0])
      this.setState({
        results: data.results.artistmatches.artist
      })
    })
    .catch(() => this.setState({error: true}))
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    }, () => {
      if(this.state.query && this.state.query.length > 1) {
        if(this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      }
    })
  }

  render() {
    return (
      <div className='mainContainer'>
        <h1>Search your favorite artist!</h1>
        <span className='emoji' role="img" aria-label="finger-point">👇🏻👇🏻👇🏻</span>
        <form>
          <input type="text" placeholder="Enter artist..." value={this.state.query} onChange={this.handleInputChange} />
        </form>
        <Suggestions results={this.state.results}/>
      </div>
    )
  }

}

export default Search;
