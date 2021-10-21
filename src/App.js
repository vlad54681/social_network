import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from "react-router-dom";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';

const App = (props) => {


	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Navbar state={props.state.sidebar} />

			<div className='app-wrapper-content'>
				<Route path='/dialogs'
					render={() => <DialogsContainer />} />
				<Route path='/profile/:userId?'
					render={() => <ProfileContainer />} />
				<Route path='/users'
					render={() => <UsersContainer />} />
				<Route path='/News' render={() => <News />} />
				<Route path='/Settings' render={() => <Settings />} />
				<Route path='/Music' render={() => <Music />} />
				<Route path='/login' render={() => <LoginPage />} />

			</div>
		</div>
	)
}

export default App;

