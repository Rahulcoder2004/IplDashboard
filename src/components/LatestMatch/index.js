// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  return (
    <div className="latestMatchContainer">
      <div className="lmFirstContainer">
        <p className="competingTeamText">{latestMatchDetails.competingTeam}</p>
        <p className="dateText">{latestMatchDetails.date}</p>
        <p className="venueText">{latestMatchDetails.venue}</p>
        <p className="resultText">{latestMatchDetails.result}</p>
      </div>
      <img
        src={latestMatchDetails.competingTeamLogo}
        alt={latestMatchDetails.altText}
        className="competingTeamImage"
      />
      <div className="lmLastContainer">
        <p className="head-lm-text">First Innings</p>
        <p className="value-lm-text">{latestMatchDetails.firstInnings}</p>
        <p className="head-lm-text">Second Innings</p>
        <p className="value-lm-text">{latestMatchDetails.secondInnings}</p>
        <p className="head-lm-text">Man Of The Match</p>
        <p className="value-lm-text">{latestMatchDetails.manOfTheMatch}</p>
        <p className="head-lm-text">Umpires</p>
        <p className="value-lm-text">{latestMatchDetails.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
