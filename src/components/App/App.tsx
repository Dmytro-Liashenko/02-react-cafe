
import css from './App.module.css'
import CafeInfo from "../CafeInfo/CafeInfo"
import type {Votes, VoteType} from "../../types/votes"
import VoteOptions from "../VoteOptions/VoteOptions";
import { useState } from 'react'
import VoteStats from '../VoteStats/VoteStats';
import Notification from "../Notification/Notification";



function App() {
  
  const [votes, setVotes] = useState<Votes>(
    {
      good: 0,
      neutral: 0, 
      bad: 0
    }
  )

  function handleVote(type: VoteType){
    setVotes(prev => ({
      ...prev,
    [type]: prev[type] + 1})
  )
    
  }

  function resetVotes(){
    setVotes({good: 0, neutral: 0, bad: 0})
  }

const totalVotesSum = votes.bad + votes.good + votes.neutral

  return <div className={css.app}>
    <CafeInfo 
      votes={votes}
      onVote={handleVote}
      onReset={resetVotes}
    />
    <VoteOptions
      onVote={handleVote}
      onReset={resetVotes}
      canReset={totalVotesSum > 0}
    />
    {totalVotesSum > 0 ? <VoteStats
      votes={votes}
      totalVotes={totalVotesSum}
      positiveRate={totalVotesSum
    ? Math.round((votes.good / totalVotesSum) * 100)
    : 0}
    />
    : <Notification/>}
  </div>
}

export default App  
