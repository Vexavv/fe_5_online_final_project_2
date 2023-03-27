import { createSlice} from '@reduxjs/toolkit'

const messageSlice = createSlice({
    name: 'message',
    initialState:{},
    reducers: {
        createMassage:(state, action)=>{
           return {massage: action.payload}
        },
        removeMassage:(state, action)=>{
            return {}
        }
    }
})

export const {createMassage, removeMassage} = messageSlice.actions
export default messageSlice.reducer