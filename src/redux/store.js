import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
				{ id: 2, message: "It's my first post", likesCount: 11 },
			],
			newPostText: 'it-camasutra.com',


		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Dimych' },
				{ id: 2, name: 'Andrey' },
				{ id: 3, name: 'Sveta' },
				{ id: 4, name: 'Sasha' },
				{ id: 5, name: 'Victor' },
				{ id: 6, name: 'Valera' },
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How is your it-kamasutra?' },
				{ id: 3, message: 'Yo' },
				{ id: 4, message: 'Yo' },
				{ id: 5, message: 'Yo' },


			],
			newMessageText: '',
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Andrew', ava: "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" },
				{ id: 2, name: 'Sasha', ava: "https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" },
				{ id: 3, name: 'Sveta', ava: "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg" },
			],

		},
	},
	_callSubscriber() {
		console.log('State changed')
	},


	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	}
	// объекст диспатч включает в себя все интерактивные объекты сайта. 
	// Через параметр екшн и свойство тип мы даем понять, какой именно
	// метод использовать в данный момент
}




window.store = store;

export default store;
