import { ceil, find, get } from 'lodash-es'
import { atom, useRecoilState, useRecoilValue } from 'recoil'

import dataJson from './data.json'
import type { GuidelineType } from './types'

// atoms
// ------------------------------
export const bmiAtom = atom<number | null>({
  key: 'bmi/bmiAtom',
  default: null,
})

export const guidelineAtom = atom<GuidelineType[]>({
  key: 'bmi/guidelineAtom',
  default: dataJson,
})

// functions
// ------------------------------
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

export const valueText = ({
  min,
  max,
}: Pick<GuidelineType, 'min' | 'max'>): string => {
  if (min && max) {
    return `${min}以上〜${max}未満`
  } else if (max) {
    return `${max}未満`
  } else {
    return `${min}以上`
  }
}

// hooks
// ------------------------------
export const useBmi = () => {
  const [bmi, setBmi] = useRecoilState(bmiAtom)
  const bmiGuidelines = useRecoilValue(guidelineAtom)

  const getBmiLevel = (key: string) => {
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

  return {
    bmi,
    bmiGuidelines,
    setBmi,
    calcBmi,
    valueText,
    getBmiLevel,
  }
}
