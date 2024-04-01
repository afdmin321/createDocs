import { FC, ReactNode } from "react"
import { StateSchema } from "../config/StateSchema"
import { createReduxStore } from "../config/store"
import { Provider } from "react-redux"

interface StoreProbiderProps {
    children: ReactNode,
    initialState?: StateSchema
}
const StoreProvider: FC<StoreProbiderProps> = (props) => {
    const { children, initialState } = props
    const store = createReduxStore(initialState)
    return <Provider store={store}>{children}</Provider>
}
export default StoreProvider