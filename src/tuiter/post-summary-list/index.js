import React from "react";
import posts from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return (
    <div className="mt-2 bg-light list-group">    
        {posts.map(post => <PostSummaryItem key={post.id} post={post}/>)}
    </div>
    );
}

export default PostSummaryList;