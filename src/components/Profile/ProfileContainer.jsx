import React from 'react';
import Profile from './Profile';
import { connect } from "react-redux";
import { saveProfile, savePhoto, getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	refreshProfile() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 19779;
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile()
	}
	componentDidUpdate(prevProps, prevState, snapshot) {

		if (this.props.match.params.userId != prevProps.match.params.userId)
			this.refreshProfile()
	}

	render() {

		return (
			<Profile {...this.props}
				savePhoto={this.props.savePhoto}
				isOwner={!this.props.match.params.userId}
				profile={this.props.profile}
				status={this.props.status}
				updateStatus={this.props.updateStatus} />
		)
	}
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
});



export default compose(
	connect(mapStateToProps, { saveProfile, getUserProfile, getStatus, updateStatus, savePhoto }),
	withRouter
)(ProfileContainer);
