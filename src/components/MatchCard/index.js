// Write your code here
import {Component} from 'react'
import './index.css'

export default class MatchCard extends Component {
  render() {
    const {eachMatchDetails, key} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      result,
      matchStatus,
    } = eachMatchDetails

    const color = matchStatus === 'Won' ? 'green' : 'red'

    return (
      <li key={key} className="match-card-container">
        <img
          className="small-team-logo"
          alt={`competing team ${competingTeam}`}
          src={competingTeamLogo}
        />
        <p className="heading">{competingTeam}</p>
        <p className="para">{result}</p>
        <p className={color}>{matchStatus}</p>
      </li>
    )
  }
}
