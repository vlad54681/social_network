import { Field, Form } from "react-final-form";
import s from './ProfileInfo.module.css'
import style from '../../common/FormsControls/FormsControls.module.css'

//import { createField, Input } from "../../common/FormsControls/FormsControls";


const ProfileDataForm = ({ profile, isOwner, onSubmit, initialValues, error }) => {
	return <div>
		< Form
			name={'edit-profile'}
			onSubmit={onSubmit}
			initialValues={initialValues}
			render={({ handleSubmit, form, }) => (
				<form onSubmit={handleSubmit}>
					<div>
						<div><button>save</button></div>
						{error && <div className={style.formSummaryError}>
							{error}
						</div>}
						<div>
							<b>Full name</b>:

							<div>
								<Field
									placeholder={'Full name'}
									name={'fullName'}
									component={'Input'}
								/>
							</div>

						</div>
						<div>
							<b>Lookink for a job</b>:
							<div>
								<Field
									name={'lookingForAJob'}>
									{({ input, meta }) => (
										<input type={'checkbox'} {...input} />
									)}
								</Field>
							</div>
						</div>
						<div>
							<b>My professional skills</b>: {profile.lookingForAJobDescription}
							<div>
								<Field
									name={'lookingForAJobDescription'}>
									{({ input, meta }) => (
										<textarea {...input} placeholder={'My professional skills'} />
									)}
								</Field>
							</div>
						</div>
						< div >
							<b>About me</b>: {profile.aboutMe}
							<div>
								<Field
									name={'aboutMe'}>
									{({ input, meta }) => (
										<textarea {...input}
											placeholder={'About me'} />
									)}
								</Field>
							</div>
						</div >

						< div >
							<b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
								return <div key={key} className={s.contact}>
									<b>{key} </b>: <div><Field
										name={'contacts.' + key}>
										{({ input, meta }) => (
											<input {...input}
												placeholder={'key'} />
										)}
									</Field></div>
								</div>
							})}



						</div >


					</div >
				</form>
			)}
		/>
	</div>
}
export default ProfileDataForm;