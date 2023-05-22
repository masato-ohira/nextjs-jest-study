import axios from 'axios'

test('localhostが起動している', async () => {
  const url = 'http://localhost:3000'

  try {
    const response = await axios.get(url)
    expect(response.status).toBe(200)
  } catch (error) {
    throw new Error('localhostの起動が確認できませんでした')
  }
})
