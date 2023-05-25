import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state,action) { 
            state.push(action.payload)
            console.log(action.payload)
        },
        removeUser(state,action) { 
            state.splice(action.payload,1)
            console.log(action.payload)
        },
        deleteUser(state,action) { 
            return []
            console.log("delete")
        }

        
    }

})
export default userSlice.reducer
export const {addUser,removeUser,deleteUser} = userSlice.actions;