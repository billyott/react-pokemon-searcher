import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokemons: [],
    searchTerm: ''
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => {
      this.setState({pokemons: pokemons})
    })
  }

  filteredPokemon = () => {
    return [...this.state.pokemons].filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  handleFilter = (searchTerm) => {
    this.setState({searchTerm: searchTerm})
  }

  handleSubmit = (newPokemon) => {
    this.setState({pokemons: [...this.state.pokemons, newPokemon]})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search handleFilter={this.handleFilter} />
        <br />
        <PokemonCollection pokemons={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
