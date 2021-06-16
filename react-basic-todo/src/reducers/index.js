import { title } from "./title";

//TODO rootReducer
export const rootReducer = (state = {}, action) => {
    return {
        user: {
            name: 'Vladimir',
            subName: 'Subname',
            id: 123456789,
            position: 'FE_B2'
        },
        session: {
            token: 'ffsfesfsefgh',
            lastDay: {
                order: [123, 5, 6, 224, 1]
            }
        },
        title: title(state.title, action)
    }
};