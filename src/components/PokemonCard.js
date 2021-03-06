import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    cardClicked: false
  }
  
  handleCardClick = () => {
    this.setState(prevState => {
      return {cardClicked: !prevState.cardClicked}
    })
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleCardClick}>
          <div className="image">
            <img alt={this.props.pokemon.name} src={this.state.cardClicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
