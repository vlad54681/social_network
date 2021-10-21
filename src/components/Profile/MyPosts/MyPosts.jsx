import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import AddNewPostForm from './AddNewPostForm';

const MyPosts = (props) => {
	let postsElements =
		props.posts.map(p => <Post key={p.id} message={p.message} title={p.title} likesCount={p.likesCount} />);

	return (

		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<AddNewPostForm
				addPost={props.addPost}
			/>
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;

