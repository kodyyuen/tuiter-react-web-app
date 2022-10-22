import React from "react";
import who from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <b>Who to follow</b>
            </li>
            {who.map(who => <WhoToFollowListItem key={who.id} who={who}/>)}
        </ul>
    );
}

export default WhoToFollowList;