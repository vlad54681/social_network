import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem'

const Friends = (props) => {
	let friendElements = props.state.friends.map(f => <FriendItem key={f.id} name={f.name} id={f.id} ava={f.ava} />);

	return (

		<div className={s.friends}>
			<div className={s.title}>Friends</div>
			<div className={s.peoples}>
				{friendElements}
			</div>
		</div >
	)
}

export default Friends;

