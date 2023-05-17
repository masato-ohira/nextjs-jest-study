import { ceil } from 'lodash-es'
import { useState } from 'react'

export const calcBmi = ({
  height,
  weight,
}: {
  height: number
  weight: number
}): number | null => {
  const h = height * 0.01
  const result = ceil(weight / (h * h), 4)

  if (Number.isFinite(result)) {
    return result
  } else {
    return null
  }
}

export const useBmi = () => {
  const [bmi, setBmi]: [number | null, Function] = useState(0)

  return {
    bmi,
    setBmi,
    calcBmi,
  }
}
