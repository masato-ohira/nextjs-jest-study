import fs from 'fs'
import { includes, split } from 'lodash-es'

describe('.gitignore', () => {
  test('gitignoreで最低限の除外はできている', () => {
    let gitIgnore: string | string[] = fs.readFileSync('.gitignore', 'utf8')
    gitIgnore = split(gitIgnore, '\n')

    expect(includes(gitIgnore, '.htaccess')).toBe(true)
    expect(includes(gitIgnore, '.env')).toBe(true)
  })
})
