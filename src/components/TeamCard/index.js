// Write your code here
import {Link} from 'react-router-dom'

import {Component} from 'react'

import './index.css'

export default class TeamCard extends Component {
  render() {
    const {eachTeam} = this.props

    const {id, name, teamImageUrl} = eachTeam

    return (
      <>
        <Link to={`/team-matches/${id}`}>
          <li key={id} className="team-card-container">
            <img className="team-image" alt={name} src={teamImageUrl} />
            <p className="team-name-para">{name}</p>
          </li>
        </Link>
      </>
    )
  }
}
