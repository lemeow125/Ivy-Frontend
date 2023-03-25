import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../../../Features/Redux/Slices/Login/LoginSlice";
import LoggedInUserReducer from "../../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import OldSessionReducer from "../../../Features/Redux/Slices/OldSession/OldSessionSlice";
import TransactionsThisSessionReducer from "../../../Features/Redux/Slices/TransactionsThisSessionSlice/TransactionsThisSessionSlice";

const store = configureStore({
  reducer: {
    logged_in: LoginReducer,
    logged_in_user: LoggedInUserReducer,
    old_session_checked: OldSessionReducer,
    session_transactions: TransactionsThisSessionReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
