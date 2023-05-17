import { MyBmiForm } from '@/components/MyBmiForm'
import { Container } from '@chakra-ui/react'

const CalcPage = () => {
  // const

  return (
    <Container minW={'container.md'} py={8}>
      <MyBmiForm />
    </Container>
  )
}

export default CalcPage
