import { useMemo } from 'react'
import { legacy_createStore as createStore, applyMiddleware,} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

export let store;
 function initStore(initialState: {}) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}



export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
export const initializeStore = (preloadedState: {}) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}
export const initalizeStore = initializeStore({})

export function useStore(initialState: {}) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}