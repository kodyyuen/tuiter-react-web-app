import React from "react";

const TuitStats = ({ tuit }) => {

    return (
        <div className="row">
            <div className="col">
                <i className="fa fa-comment me-2"> </i>
                {tuit.replies}
            </div>
            <div className="col">
                <i className="fa fa-retweet me-2"></i>
                {tuit.retuits}
            </div>
            <div className="col">
                {
                    tuit.liked && <i className="fa fa-heart text-danger me-2"></i>
                }
                {
                    !tuit.liked && <i className="fa fa-heart me-2"></i>
                }
                {tuit.likes}
            </div>
            <div className="col">
                <i className="fa fa-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;