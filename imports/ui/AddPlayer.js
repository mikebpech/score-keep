import React from 'react';

import { Players } from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();
  
    if (playerName) {
      if (playerName.length > 14) {
        e.target.playerName.value = '';
        return alert("Name can't be more than 14 characters.");
      }
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    } else {
      alert('Please enter a player name.');
    };
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit}>
					<input className="form__input" type="text" name="playerName" placeholder="Player Name" autoComplete="off"/>
					<button className="button" type="submit">Add Player</button>
				</form>
      </div>
    );
  }
}