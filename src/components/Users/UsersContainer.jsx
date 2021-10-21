import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	onPageChanged = (pageNumber) => {

		this.props.getUsers(pageNumber, this.props.pageSize);

		// this.props.setCurrentPage(pageNumber);
		// this.props.toggleIsFetching(true);
		// userAPI.getUsers(pageNumber, this.props.pageSize)
		// 	.then(data => {
		// 		this.props.toggleIsFetching(false);
		// 		this.props.setUsers(data.items);

		// 	});
	}

	render() {


		return <div>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalUsersCount={this.props.totalUsersCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanged={this.onPageChanged}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				users={this.props.users}
				followingInProgress={this.props.followingInProgress}

			/>
		</div>
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress,
	}
}

//let let wuthRedirect = withAuthRedirect(UsersContainer);

// export default withAuthRedirect(connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(UsersContainer));



export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersContainer)