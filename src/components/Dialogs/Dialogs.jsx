import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router';
import AddMessageForm from './AddMessageForm/AddMessageForm';




const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
	let messegesElements = state.messages.map(m => <Message key={m.id} message={m.message} />);
	if (!props.isAuth) return <Redirect to={"/Login"} />;



	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				<div>{messegesElements}</div>
				<div>
					<AddMessageForm
						sendMessage={props.sendMessage}
					/>

				</div>
			</div>
		</div>

	)

}

export default Dialogs;