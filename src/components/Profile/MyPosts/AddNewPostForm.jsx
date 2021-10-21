import { Field, Form } from "react-final-form";
import { composeValidators, maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const AddNewPostForm = (props) => {
	let addPost = (values) => {
		props.addPost(values.newPostText);
	}
	return <Form onSubmit={addPost}>
		{props => (
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field
						component={Textarea}
						name='newPostText'
						placeholder='Enter text...'
						validate={composeValidators(required, maxLengthCreator(10))}
					/>

				</div>
				<div>
					<button >Send</button>
				</div>

			</form>
		)}
	</Form>
}

export default AddNewPostForm;