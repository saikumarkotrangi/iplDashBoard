// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

export default class Home extends Component {
  state = {
    teams: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCardsDetails()
  }

  getTeamCardsDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const backendListOfTeams = await response.json()

    const frontendListOfTeams = backendListOfTeams.teams.map(eachObject => ({
      id: eachObject.id,
      name: eachObject.name,
      teamImageUrl: eachObject.team_image_url,
    }))

    this.setState({
      teams: frontendListOfTeams,
      isLoading: false,
    })
  }

  render() {
    const {teams, isLoading} = this.state

    return (
      <div className="home-bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <div className="IPL-heading-container">
              <img
                className="ipl-logo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              />
              <h1>IPL DashBoard</h1>
            </div>
            <ul className="team-cards-container">
              {teams.map(eachTeam => (
                <TeamCard key={eachTeam.id} eachTeam={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
