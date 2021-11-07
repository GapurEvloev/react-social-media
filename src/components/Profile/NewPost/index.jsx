import React from 'react';

import styles from './NewPost.module.sass';

import user from '../../../images/user.svg';

const NewPost = () => {
    return (
        <div className={styles.new_post}>
            <img width="50" src={user} alt="" className={styles.new_post__author_icon} />
            <input
                // onChange={(e) => setTweetMessage(e.target.value)}
                // value={tweetMessage}
                placeholder="What's happening?"
                type="text"
            />
            <button>Tweet</button>
        </div>
    )
}

export default NewPost;