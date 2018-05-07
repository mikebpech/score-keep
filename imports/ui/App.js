import React from 'react';
import propTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle='made by mikex'/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer/>
        </div>
      </div>
    );
  }
};

App.propTypes = {
  title: propTypes.string.isRequired,
  players: propTypes.array.isRequired
};