import { configureStore } from "@reduxjs/toolkit";
import menuReducer from './menu/menuSlice';
import modalReducer from './modal/modalSlice';
import notesListReducer from './notesList/notesListSlice';

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        modal: modalReducer,
        notesList: notesListReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;