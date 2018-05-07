import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './../ui/Player';
//players = prop of db [api/players]

export default class PlayerList extends React.Component {
  renderPlayers() {
    //Check if there are any players
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">
            Add your first player to get started!
          </p>
        </div>
      );
    } else {
      //If there are players; return them with Player.js file.
      return this.props.players.map((player) => {
        return <Player key={player._id} player={player}/>;
      });
    }
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight='true'>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
};