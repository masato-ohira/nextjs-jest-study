import axios from 'axios'

test('localhostが起動している', async () => {
  const url = 'http://localhost:3000'
  const response = await axios.get(url)
  expect(response.status).toBe(200)
})
