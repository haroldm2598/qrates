import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './features/homepage/homeSlice';
import artistReducer from './features/artists/artistSlice';

export const store = configureStore({
	reducer: { homeTemplate: homeReducer, artistTemplate: artistReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// ================ rtk next js tutorial ==================
// export const makeStore = () => {
// 	return configureStore({
// 		reducer: {}
// 	});
// };

// // Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>;
// // Infer the `RootState` and `Dispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>;
// export type AppDispatch = AppStore['dispatch'];
