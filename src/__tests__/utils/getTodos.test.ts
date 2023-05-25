import { getTodos } from '@/utils/getTodos'
import { map } from 'lodash-es'

test('getTodosの型は常に同じである', async () => {
  const todos = await getTodos()
  const todoKeys = map(todos[0], (val, key) => key)
  console.log({ todoKeys })

  expect(todoKeys).toMatchSnapshot()
})
