import {createSlice} from '@reduxjs/toolkit';

const initialState = {list : [], userInput: '',newInput: ''};

const listSlice = createSlice(
    {
       name : 'list',
       initialState,
       reducers : {
           changeListItem(state, action) {
            var listItem = state.list.filter((listItem) => listItem.id === action.payload);
               listItem[0].isRenaming = true;
               state.list = [...state.list];
           },
           ItemChanged(state, action) {
            var listItem = state.list.filter((listItem) => listItem.id === action.payload);
            listItem[0].isRenaming = false;
            state.list = [...state.list];
           },
           userInputField(state, action) {
               state.userInput = action.payload;
           },
           userNewInputField(state, action) {
            state.newInput = action.payload;
           },
           addListItem(state, action) {
               state.list.push(action.payload);
           },
           removeListItem(state, action) {
               var newArr = state.list.filter((listItem) => listItem.id !== action.payload);
               state.list = newArr;
           },
           renameListItem(state, action) {
            state.list = state.list.map((listItem) => {
                console.log(listItem.id, action.payload);
                    if (listItem.id === action.payload.id) {
                        listItem.item = action.payload.item;
                    }
                    return listItem;
                });
           },
           clearList(state) {
               state.list = [];
           }
       }
    }
)

export const listActions = listSlice.actions;
export default listSlice;