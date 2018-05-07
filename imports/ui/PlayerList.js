import React from 'react';
import PropTypes from 'prop-types';

import Player from './../ui/Player';
//players = prop of db [api/players]

export default class PlayerList extends React.Component {
  renderPlayers() {
    //Check if there are any players
    if (this.props.players.length === 0) {
      return <p>Add your first player to get started!</p>
    } else {
      //If there are players; return them with Player.js file.
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>
      });
    }
  }
  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};