// Write your code here
import {Component} from 'react'
import './index.css'

export default class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props

    const {
      competingTeam,
      date,
      venue,
      result,
      competingTeamLogo,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = latestMatchDetails

    return (
      <div className="latest-match-card-container">
        <div className="first-container">
          <p className="heading">{competingTeam}</p>
          <p className="heading">{date}</p>
          <p className="para">{venue}</p>
          <p className="para">{result}</p>
        </div>

        <div className="second-container">
          <img
            className="competing-team-logo"
            alt={`latest match ${competingTeam}`}
            src={competingTeamLogo}
          />
        </div>

        <div className="third-container">
          <h1 className="heading">First Innings</h1>
          <p className="para">{firstInnings}</p>
          <h1 className="heading">Second Innings</h1>
          <p className="para">{secondInnings}</p>

          <h1 className="heading">Man Of The Match</h1>
          <p className="para">{manOfTheMatch}</p>
          <h1 className="heading">Umpires</h1>
          <p className="para">{umpires}</p>
        </div>
      </div>
    )
  }
}
