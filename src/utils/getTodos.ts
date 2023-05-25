import axios from 'axios'

type TodoType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const getTodos = async (): Promise<TodoType[]> => {
  const { data } = await axios.get('/api/todos')
  return data
}
