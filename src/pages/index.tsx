import { Container } from '@chakra-ui/react'
import { MyPhotoList } from '@/components/MyPhotoList'

const IndexPage = () => {
  return (
    <Container minW={'container.xl'} py={8}>
      <MyPhotoList />
    </Container>
  )
}

export default IndexPage
