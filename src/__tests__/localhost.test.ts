import axios from 'axios'

test('localhostが起動している', async () => {
  const url = 'http://localhost:3000'
  const response = await axios.get(url)

  if (response.status !== 200) {
    console.log('テストの実行前にlocalhostを起動してください')
  }
  expect(response.status).toBe(200)
})
