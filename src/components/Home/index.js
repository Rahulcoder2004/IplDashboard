// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getApiResponseTeams()
  }

  getApiResponseTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsDate = await response.json()
    const {teams} = teamsDate
    const formattedTeamdata = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: formattedTeamdata, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="mainContainer">
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="subContainer">
            <div className="headingContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="iplImage"
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>

            <ul className="teamListContainer">
              {teamsList.map(eachteamCard => (
                <TeamCard eachteamCard={eachteamCard} key={eachteamCard.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
