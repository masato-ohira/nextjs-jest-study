import { calcBmi } from '@/recoil/bmi'

describe('calcBmi', () => {
  test('想定されるBMI計算', () => {
    const height = 180
    const weight = 70
    const expectedBmi = 21.605

    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  test('文字列を入力されたケース', () => {
    const height: any = '１８０'
    const weight = 70
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  test('想定外の型が入力されたケース', () => {
    const height: any = { height: 180 }
    const weight: any = [70]
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  test('heightが0のケース', () => {
    const height = 0
    const weight = 70
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  test('weightが0のケース', () => {
    const height = 180
    const weight = 0
    const expectedBmi = 0
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  test('NaNが入力されたケース', () => {
    const height = NaN
    const weight = 70
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  test('Infinityが入力されたケース', () => {
    const height = 180
    const weight = Infinity
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })
})

describe('valueText', () => {})
