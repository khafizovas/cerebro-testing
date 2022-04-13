import { UserAction, UserActionTypes, UserState } from '../../types/user';

const initialState: UserState = {
	username: '',
	loading: false,
	error: null,
};

export const userReducer = (
	state = initialState,
	action: UserAction
): UserState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USER:
			return { ...state, loading: true };
		case UserActionTypes.FETCH_USER_SUCCESS:
			return { ...state, loading: false, username: action.payload };
		case UserActionTypes.FETCH_USER_ERROR:
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};
