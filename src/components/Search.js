import React from 'react'

class Search extends React.Component {

  state = {
    name: ''
  }

  localHandleFilter = (e) => {
    this.props.handleFilter(e.target.value)
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={this.state.searchTerm} onChange={this.localHandleFilter}/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}

export default Search
