import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../assets/images/user.png'
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

	let [editMode, setEditMode] = useState(false);

	if (!props.profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {

		if (e.target.files.lenght) {
			props.savePhoto(e.target.files[0]);
		}
	}

	const onSubmit = (handleSubmit) => {
		props.saveProfile(handleSubmit);
		// .then(
		// 	() => {
		setEditMode(false);
		// }
		//)

	}

	return (
		<div >
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} />
				{props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

				{editMode
					? <ProfileDataForm onSubmit={onSubmit} initialValues={props.profile} profile={props.profile} />
					: <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}


				<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
			</div>

		</div >
	)
}


const ProfileData = ({ profile, isOwner, goToEditMode }) => {
	return <div>
		{isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
		<div>
			<b>Full name</b>: {profile.fullName}
		</div>
		<div>
			<b>Lookink for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
		</div>
		{
			profile.lookingForAJob &&
			<div>
				<b>My professional skills</b>: {profile.lookingForAJobDescription}
			</div>
		}

		< div >
			<b>About me</b>: {profile.aboutMe}
		</div>
		< div >
			<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
				return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
			})}
		</div>
	</div>
}



const Contact = ({ contactTitle, contactValue }) => {
	return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;