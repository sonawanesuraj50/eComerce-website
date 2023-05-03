import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import {
  createStore,
  combineReducers,
  applyMiddleware,
  AnyAction,
} from "redux";
import appStateReducer from "./appStateReducer";

const rootReducer = combineReducers({
  appState: appStateReducer,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;