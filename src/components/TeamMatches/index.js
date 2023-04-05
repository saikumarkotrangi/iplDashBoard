// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

export default class TeamMatches extends Component {
  state = {
    data: {},
    isLoading: true,
    backGroundColor: '',
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const backendData = await response.json()
    console.log(backendData)
    // latestMatchDetails: ,
    const frontEndData = {
      teamBannerUrl: backendData.team_banner_url,
      latestMatchDetails: {
        competingTeam: backendData.latest_match_details.competing_team,
        competingTeamLogo: backendData.latest_match_details.competing_team_logo,
        date: backendData.latest_match_details.date,
        firstInnings: backendData.latest_match_details.first_innings,
        id: backendData.latest_match_details.id,
        manOfTheMatch: backendData.latest_match_details.man_of_the_match,
        matchStatus: backendData.latest_match_details.match_status,
        result: backendData.latest_match_details.result,
        secondInnings: backendData.latest_match_details.second_innings,
        umpires: backendData.latest_match_details.umpires,
        venue: backendData.latest_match_details.venue,
      },

      recentMatches: backendData.recent_matches.map(eachObject => ({
        competingTeam: eachObject.competing_team,
        competingTeamLogo: eachObject.competing_team_logo,
        date: eachObject.date,
        firstInnings: eachObject.first_innings,
        id: eachObject.id,
        manOfTheMatch: eachObject.man_of_the_match,
        matchStatus: eachObject.match_status,
        result: eachObject.result,
        secondInnings: eachObject.second_innings,
        umpires: eachObject.umpires,
        venue: eachObject.venue,
      })),
    }

    let background

    switch (frontEndData.latestMatchDetails.competingTeam) {
      case 'Sunrisers Hyderabad':
        background = 'red-background'
        break
      case 'Delhi Capitals':
        background = 'navyBlue-red'
        break
      case 'Royal Challengers Bangalore':
        background = 'red-gold'
        break
      case 'Kolkata Knight Riders':
        background = 'purple-gold'
        break
      case 'Mumbai Indians':
        background = 'blue-orange'
        break
      case 'Chennai Super Kings':
        background = 'blue-yellow'
        break
      case 'Rajasthan Royals':
        background = 'blue-gold'
        break
      case 'Kings XI Punjab':
        background = 'red-lightGray'
        break

      default:
        background = 'white'
        break
    }

    console.log(frontEndData)
    this.setState({
      data: frontEndData,
      isLoading: false,
      backGroundColor: background,
    })
  }

  render() {
    const {data, isLoading, backGroundColor} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = data

    console.log(latestMatchDetails)

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`Team-matches-container ${backGroundColor}`}>
            <div className="team-banner-url">
              <img alt="team banner" src={teamBannerUrl} />
            </div>

            <div className="latest-matches-heading">
              <h1>Latest Matches</h1>
            </div>

            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-card-big-container">
              {recentMatches.map(eachMatchDetails => (
                <MatchCard
                  key={eachMatchDetails.id}
                  eachMatchDetails={eachMatchDetails}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
