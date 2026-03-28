import { useState } from 'react'

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = () => {
    setCount((currentCount) => currentCount + 1)
  }

  return {
    count,
    increment,
  }
}

export default useCounter
