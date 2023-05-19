import { getBmiLevel } from '@/recoil/bmi'

describe('getBmiLevel', () => {
  test('痩せのBMI', () => {
    const bmi = 18.4
    const expected = '痩せ'
    const actual = getBmiLevel(bmi, 'label')
    expect(actual).toBe(expected)
  })

  test('普通体重のBMI', () => {
    const bmi = 18.5
    const expected = '普通体重'
    const actual = getBmiLevel(bmi, 'label')
    expect(actual).toBe(expected)
  })

  test('肥満のBMI', () => {
    const bmi = 25
    const expected = '肥満（レベル1）'
    const actual = getBmiLevel(bmi, 'label')
    expect(actual).toBe(expected)
  })

  test('nullのBMI', () => {
    const bmi: any = null
    const expected = null
    const actual = getBmiLevel(bmi, 'label')
    expect(actual).toBe(expected)
  })
})
