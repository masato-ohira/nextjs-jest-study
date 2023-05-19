import { MyBmiForm } from '@/components/MyBmiForm'
import { Container } from '@chakra-ui/react'

const BmiPage = () => {
  // const

  return (
    <Container minW={'container.md'} py={8}>
      <MyBmiForm />
    </Container>
  )
}

export default BmiPage
