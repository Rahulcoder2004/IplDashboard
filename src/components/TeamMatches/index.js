// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {eachTeamDetails: {}, isLoading: true, team: ''}

  componentDidMount() {
    this.getApiTeamResponse()
  }

  getApiTeamResponse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const teamData = await response.json()
    const formattedTeamData = {
      teamBannerUrl: teamData.team_banner_url,
      latestMatchDetails: {
        umpires: teamData.latest_match_details.umpires,
        result: teamData.latest_match_details.result,
        manOfTheMatch: teamData.latest_match_details.man_of_the_match,
        id: teamData.latest_match_details.id,
        date: teamData.latest_match_details.date,
        venue: teamData.latest_match_details.venue,
        competingTeam: teamData.latest_match_details.competing_team,
        competingTeamLogo: teamData.latest_match_details.competing_team_logo,
        altText: `latest match ${teamData.latest_match_details.competing_team}`,
        firstInnings: teamData.latest_match_details.first_innings,
        secondInnings: teamData.latest_match_details.second_innings,
        matchStatus: teamData.latest_match_details.match_status,
      },
      recentMatches: teamData.recent_matches.map(match1 => ({
        umpires: match1.umpires,
        result: match1.result,
        manOfTheMatch: match1.man_of_the_match,
        id: match1.id,
        date: match1.date,
        venue: match1.venue,
        competingTeam: match1.competing_team,
        competingTeamLogo: match1.competing_team_logo,
        altText: `competing team ${match1.competing_team}`,
        firstInnings: match1.first_innings,
        secondInnings: match1.second_innings,
        matchStatus: match1.match_status,
      })),
    }

    this.setState({
      eachTeamDetails: formattedTeamData,
      isLoading: false,
      team: id,
    })
  }

  render() {
    const {eachTeamDetails, isLoading, team} = this.state
    return (
      <div className={`teamMatchContainer ${team}`}>
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="tm-subContainer">
            <img
              src={eachTeamDetails.teamBannerUrl}
              alt="team banner"
              className="teamBannerImage"
            />

            <p className="lmText">Latest Matches</p>
            <LatestMatch
              latestMatchDetails={eachTeamDetails.latestMatchDetails}
              key={eachTeamDetails.latestMatchDetails.id}
            />

            <ul className="mc-ul-container">
              {eachTeamDetails.recentMatches.map(eachRecMatch => (
                <MatchCard eachRecMatch={eachRecMatch} key={eachRecMatch.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
