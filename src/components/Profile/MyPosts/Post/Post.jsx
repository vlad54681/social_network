import s from './Post.module.css';
import image from '../../../../assets/images/Post.png'

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src={image} />
			{props.message}
			< div >
				<span>like</span> {props.likesCount}
			</div >
		</div >

	)
}

export default Post;