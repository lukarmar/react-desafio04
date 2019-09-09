import React from 'react';

function PostComment({ comments }){

const { author } = comments;

    return (
        <div className="box-comment">
            <img src={author.avatar} alt={author.name}/>                                       
            <div className="content">
                <span>{comments.content}</span>
            </div>
        </div>
    )
}

export default PostComment;