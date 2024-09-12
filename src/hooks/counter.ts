import { useState } from 'react'

const useCounter = () => {
 
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }
    const dcrement = ()=>{
        setCount(count - 1);
    }

    return {count, increment, dcrement};

}

export {
    useCounter
}