import { Dispatch } from 'redux';
import axios from 'axios';
import { UserAction, UserActionTypes } from '../../types/user';

export const fetchUser = (userId: number) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.FETCH_USER });

			const response = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${userId}`
			);

			// Timeout to show preloader
			setTimeout(() => {
				dispatch({
					type: UserActionTypes.FETCH_USER_SUCCESS,
					payload: response.data.username,
				});
			}, 500);
		} catch (e) {
			dispatch({
				type: UserActionTypes.FETCH_USER_ERROR,
				payload: 'Произошла ошибка при загрузке имени пользователя',
			});
		}
	};
};
