import { useDispatch, useSelector , } from "react-redux"
import {increment , desIncrement,reset} from './counterSlice'
import { RootState } from "../store"


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state:RootState)=> state.counterR.count);
   

    const handleIncrement = () => {
        dispatch(increment())
     }

     const handleDesIncrement = ()=> {
        dispatch(desIncrement())
        }

        const handleReset = ()=>{
            dispatch(reset())
        }

  return (
      <div>
        <p>Counter is : {count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>0</button>
        <button onClick={handleDesIncrement}>-</button>
        </div>
  )
}

export default Counter;