export interface PostState {
	posts: any[];
	loading: boolean;
	error: null | string;
}

export enum PostActionTypes {
	FETCH_POSTS = 'FETCH_TODOS',
	FETCH_POSTS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_POSTS_ERROR = 'FETCH_TODOS_ERROR',
	SET_POST_PAGE = 'SET_TODO_PAGE',
}

interface FetchPostAction {
	type: PostActionTypes.FETCH_POSTS;
}

interface FetchPostSuccessAction {
	type: PostActionTypes.FETCH_POSTS_SUCCESS;
	payload: any[];
}
interface FetchPostErrorAction {
	type: PostActionTypes.FETCH_POSTS_ERROR;
	payload: string;
}
interface SetPostPage {
	type: PostActionTypes.SET_POST_PAGE;
	payload: number;
}

export type PostAction =
	| FetchPostAction
	| FetchPostSuccessAction
	| FetchPostErrorAction
	| SetPostPage;
