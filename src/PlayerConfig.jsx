import React from 'react';
class PlayerConfig extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://cdn.pushrcdn.com/player/v2/player_config.js';
    document.body.appendChild(script);
  }

  render() {
    return null;
  }
}
export default PlayerConfig;
