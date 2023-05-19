import fs from 'fs'

describe('.gitignore', () => {
  test('htaccessはgitから除外できている', () => {
    const gitIgnoreContents = fs.readFileSync('.gitignore', 'utf8')
    expect(gitIgnoreContents).toMatch(/\.htaccess/)
  })
})
