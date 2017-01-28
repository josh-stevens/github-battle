var React = require('react');
var styles = require('../styles');
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var PropTypes = React.PropTypes;
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <Loading text="waiting"/>
    : <MainContainer>
        <h1>Confirm Players</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper info={props.playerInfo[0]} header="Player 1">
            <UserDetails info={props.playerInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper info={props.playerInfo[1]} header="Player 2">
            <UserDetails info={props.playerInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <div className='col-sm-12' style={styles.space}>
            <button type='button' className='btn btn-lg btn-success' onClick={props.onInitiateBattle}>
              INITIATE BATTLE
            </button>
          </div>
          <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
              <button className='btn btn-lg btn-danger'>Reselect Players</button>
            </Link>
          </div>
        </div>
      </MainContainer>;
};

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playerInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
