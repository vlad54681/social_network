import { Field, Form } from "react-final-form";
import { composeValidators, maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import style from '../common/FormsControls/FormsControls.module.css'

const LoginReduxForm = ({ onSubmit }) => {

	return <Form onSubmit={onSubmit}>
		{props => (
			<form onSubmit={props.handleSubmit}>

				<div>
					<Field
						placeholder={'Email'}
						name={'email'}
						component={Input}
						validate={composeValidators(required, maxLengthCreator(50))}
					/>
				</div>
				<div>
					<Field
						placeholder={'password'}
						name={'password'}
						type={'password'}
						component={Input}
						validate={composeValidators(required, maxLengthCreator(50))}
					/>
				</div>
				<div>
					<Field
						component={Input}
						name={'rememberMe'}
						type={'checkbox'}
					/> remember me
				</div>
				{props.error &&
					<div className={style.formSummaryError}>
						{props.error}
					</div>
				}
				<div>
					<button type={'submit'}>Login</button>
				</div>
			</form>
		)}
	</Form>
}

export default LoginReduxForm;