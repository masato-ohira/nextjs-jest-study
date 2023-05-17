import { calcBmi } from '.'

describe('calcBmi', () => {
  it('想定されるBMI計算', () => {
    const height = 180
    const weight = 70
    const expectedBmi = 21.605

    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  it('文字列を入力されたケース', () => {
    const height: any = '１８０'
    const weight = 70
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  it('想定外の型が入力されたケース', () => {
    const height: any = { height: 180 }
    const weight: any = [70]
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  it('heightが0のケース', () => {
    const height = 0
    const weight = 70
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  it('weightが0のケース', () => {
    const height = 180
    const weight = 0
    const expectedBmi = 0
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  it('NaNが入力されたケース', () => {
    const height = NaN
    const weight = 70
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })

  it('Infinityが入力されたケース', () => {
    const height = 180
    const weight = Infinity
    const expectedBmi = null
    const actualBmi = calcBmi({ height, weight })
    expect(actualBmi).toBe(expectedBmi)
  })
})
