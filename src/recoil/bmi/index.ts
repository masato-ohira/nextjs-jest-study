import { ceil, find, get } from 'lodash-es'
import { atom, useRecoilState } from 'recoil'

import dataJson from './data.json'
import type { GuidelineType, BmiType } from './types'
import { useEffect } from 'react'

// atoms
// ------------------------------
export const bmiAtom = atom<BmiType>({
  key: 'bmi/bmiAtom',
  default: null,
})

// functions
// ------------------------------
export const calcBmi = ({
  height,
  weight,
}: {
  height: number
  weight: number
}): BmiType => {
  const h = height * 0.01
  const result = ceil(weight / (h * h), 4)

  if (Number.isFinite(result)) {
    return result
  } else {
    return null
  }
}

export const valueText = ({
  min,
  max,
}: Pick<GuidelineType, 'min' | 'max'>): string | null => {
  if (min && max) {
    return `${min}以上〜${max}未満`
  } else if (max) {
    return `${max}未満`
  } else if (min) {
    return `${min}以上`
  } else {
    return null
  }
}

export const bmiGuidelines: GuidelineType[] = dataJson
export const getBmiLevel = (bmi: number, key: string) => {
  if (bmi) {
    const guideline = find(bmiGuidelines, ({ min, max }) => {
      if (min && max) {
        return bmi >= min && bmi < max
      } else if (min) {
        return bmi >= min
      } else if (max) {
        return bmi < max
      }
      return false
    })
    return guideline ? get(guideline, key) : null
  } else {
    return null
  }
}

// hooks
// ------------------------------
export const useBmi = (defaultBmi?: number) => {
  const [bmi, setBmi]: [BmiType, Function] = useRecoilState(bmiAtom)

  useEffect(() => {
    if (defaultBmi) {
      setBmi(defaultBmi)
    }
  }, [])

  return {
    bmi,
    setBmi,
  }
}
