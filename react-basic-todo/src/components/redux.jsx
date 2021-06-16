

// (currentState, action) => newState


// //TODO STORE
// {
//     list: {
//         { title: 'First item' }
//         { title: 'Second item' }
//     },
//     title: 'Grocieries list'
// }

// //TODO Actions
// { type: 'ADD_ITEM', title: 'Third item' }
// { type: 'REMOVE_ITEM', index: 1 }
// { type: 'CHANGE_LIST_TITLE', title: 'Road trip list' }

// //TODO Reducers
// const title = (state = '', action) => {
//     if (action.type === 'CHANGE_LIST_TITLE') {
//         return action.title
//     } else {
//         return state
//     }
// }

// const list = (state = [], action) => {
//     switch (action.type) {
//         case 'ADD_ITEM':
//             return state.concat([{ title: action.title }])
//         case 'REMOVE_ITEM':
//             return state.map((item, index) =>
//                 action.index === index
//                     ? { title: item.title }
//                     : item)
//         default:
//             return state
//     }
// }

// const listManager = (state = {}, action) => {
//     return {
//         title: title(state.title, action),
//         list: list(state.list, action),
//     }
// }

// import { creatStore } from 'redux'
// import listManager from './reducers'
// let store = creatStore(listManager)

// store.getState()
// store.dispatch(addItem('Something'))
// const unsubscribe = store.subscribe(() => {
//     const newState = store.getState()
// })
// unsubscribe()