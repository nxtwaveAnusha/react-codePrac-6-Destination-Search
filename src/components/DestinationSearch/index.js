import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="list-card">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            className="input-ele"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon-size"
          />
        </div>
        <ul className="cards-con">
          {searchResult.map(each => (
            <DestinationItem destinationsList={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
