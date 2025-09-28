// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachRecMatch} = props
  return (
    <li className="matchCardContainer">
      <img
        src={eachRecMatch.competingTeamLogo}
        alt={eachRecMatch.altText}
        className="mc-Image"
      />
      <p className="mc-ct-text">{eachRecMatch.competingTeam}</p>
      <p className="mc-result-text">{eachRecMatch.result}</p>
      {eachRecMatch.matchStatus === 'Lost' ? (
        <p className="lost">{eachRecMatch.matchStatus}</p>
      ) : (
        <p className="won">{eachRecMatch.matchStatus}</p>
      )}
    </li>
  )
}

export default MatchCard
