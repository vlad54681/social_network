import React from "react";
import { connect } from "react-redux";
import LoginReduxForm from "./LoginReduxForm";
import { login } from '../../redux/auth-reducer'
import { Redirect } from 'react-router';


const Login = (props) => {
	const onSubmit = (handleSubmit) => {
		props.login(handleSubmit.email, handleSubmit.password, handleSubmit.rememberMe)
	}

	if (props.isAuth) {
		return <Redirect to={"/profile"} />
	}

	return <div>
		<h1>Login</h1>
		<LoginReduxForm
			onSubmit={onSubmit} />


	</div>
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, { login })(Login);