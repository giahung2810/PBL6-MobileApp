import {configureStore, createStore , combineReducers} from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import jobReducer from "./jobSlice"
import companyReducer from "./companySlice"
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'


const persistConfig = {
    key: 'root',
    version: 1,
    storage:AsyncStorage,
}
const rootReducer = combineReducers({
    auth:  authReducer,
    job: jobReducer,
    company: companyReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export let persistor = persistStore(store)
