import React from 'react';
import axios from 'axios';
import './App.css';
import Suggestions from './SuggestionComponent';
import Status from './SearchStatusComponent';
import Footer from './Footer';

const API_KEY = '18d5ae46dac0b78c455c6d608b79d137'
const API_URL = 'https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist='


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }


  getInfo = () => {
    axios.get(`${API_URL}${this.state.query}&api_key=${API_KEY}&limit=5&format=json`)
    .then(({ data }) => {
      // console.log(data.topalbums.album)
      this.setState({
        results: [...data.topalbums.album]
      })
    })
    .catch(() => this.setState({error: true}))
  }

  handleInputChange(e) {
    if(e.target.value.length === 0) {
      this.setState({
        results: []
      })
    }

    this.setState({
      query: e.target.value
    }, () => {
      if( this.state.query.length >= 3) {
        // if(this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      // }
    })
  }

  handleEnter(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
    }
  }


  render() {


    return (
      <div className='mainContainer'>
        <h1>Search your favorite artists top 5 albums!</h1>
        <span className="emoji" role="img" aria-label="finger-point">👇🏻👇🏻👇🏻</span>
        <form>
          <input type="text" placeholder="Enter artist..." value={this.state.query} onChange={this.handleInputChange} onKeyPress={this.handleEnter} />
        </form>
        <Status status={this.state.query}/>
        <Suggestions results={ this.state.results } />
        <Footer/>
      </div>
    )
  }
}
export default Search;
