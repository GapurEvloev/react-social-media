import NewPost from "../NewPost";
import Post from "../Post";
import styles from "./Posts.module.sass";

import user from '../../../images/user.svg';
import post1Img from '../../../images/profile/post/post-1.jpg';

const Posts = () => {
  return (
    <section className={styles.posts}>
      <NewPost />
      <div className={styles.my_posts}>
        <Post
          authorIcon={user}
          postImg={post1Img}
          author="Ilez E."
          nickname="@ileze"
          date="24 Feb"
          message="Proud to be selected for the #siteoftheday award by @designnominees :)"
          likes="15"
          comments="2"
        />
        <Post
          authorIcon={user}
          postImg={post1Img}
          author="Alex S."
          nickname="@alexs"
          date="23 Feb"
          message="A'm happy!"
          likes="5"
          comments="22"
        />
      </div>
    </section>
  );
};

export default Posts;
