import s from '../Friends.module.css'

const FriendItem = (props) => {

	return (
		<div className={s.friend__item}>
			<div className={s.friend__ava}><img src={props.ava} alt="" /></div>
			<div className={s.friend__name}>{props.name}</div>
		</div>
	)
}
export default FriendItem;
