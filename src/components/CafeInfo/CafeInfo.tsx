
import type { Votes, VoteType } from "../../types/votes"
import css from "./CafeInfo.module.css"


interface CafeInfoProps{
    votes: Votes
    onVote: (type: VoteType) => void,
    onReset: () => void
}

function CafeInfo({votes, onVote, onReset}: CafeInfoProps){
    void votes;
    void onVote;
    void onReset;


    return <div className={css.container}>
    <h1 className={css.title}>Sip Happens Café</h1>
    <p className={css.description}>
        Please rate our service by selecting one of the options below.
    </p>
    </div>
}

export default CafeInfo