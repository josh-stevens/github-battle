var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');
var PropTypes = React.PropTypes;

var ConfirmBattleContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      isLoading: true,
      playerInfo: []
    };
  },

  componentDidMount: function() {
    var query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players) {
        this.setState({
          isLoading: false,
          playerInfo: players
        });
      }.bind(this));
  },

  handleInitiateBattle: function() {
    this.context.router.push({
      pathname: 'results',
      state: {
        playerInfo: this.state.playerInfo
      }
    })
  },

  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playerInfo={this.state.playerInfo}
        onInitiateBattle={this.handleInitiateBattle}/>
    );
  }

});

module.exports = ConfirmBattleContainer;
