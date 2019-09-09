import React from 'react';
import PostComment from './PostComment';

function PostUser({ date }){
const { author } = date;
const { comments } = date;

    return (
        <div>
            <div className="box-conteiner">
                <div className="box-user">
                    <img src={author.avatar} alt={author.name}/>
                    <div className="user-informations">
                        <span className="name">{author.name}</span>
                        <span className="data">{date.date}</span>
                    </div>
                </div>
                
                <div className="box-post">
                    <span>{date.content}</span>
                </div>
                <hr></hr>
                <section className="comments">
                        {comments.map(comment=>( <PostComment key={comment.id} comments={comment} /> ))}
                </section>
            </div>
        </div>
    )
}

export default PostUser;