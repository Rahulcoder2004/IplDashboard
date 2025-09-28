// Write your code here
import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {eachteamCard} = this.props
    return (
      <Link className="LinkCon" to={`/team-matches/${eachteamCard.id}`}>
        <li className="eachTeamContainer">
          <img
            src={eachteamCard.teamImageUrl}
            alt={eachteamCard.name}
            className="teamImage"
          />
          <p className="teamHeading">{eachteamCard.name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
