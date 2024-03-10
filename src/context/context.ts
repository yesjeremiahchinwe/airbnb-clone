import { createContext } from "react";

interface Action {
    selected: number
    setSelected: (idx: number) => void
}

const ClickContext = createContext<Action>({} as Action)

export default ClickContext