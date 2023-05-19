import { valueText } from '@/recoil/bmi'

describe('valueText', () => {
  test('minとmaxを入力する', () => {
    const expected = '20以上〜40未満'
    const actual = valueText({ min: 20, max: 40 })
    expect(actual).toBe(expected)
  })

  test('minだけを入力する', () => {
    const expected = '40以上'
    const actual = valueText({ min: 40 })
    expect(actual).toBe(expected)
  })

  test('maxだけを入力する', () => {
    const expected = '40未満'
    const actual = valueText({ max: 40 })
    expect(actual).toBe(expected)
  })

  test('minとmaxを入力しない', () => {
    const expected = null
    const actual = valueText({})
    expect(actual).toBe(expected)
  })
})
