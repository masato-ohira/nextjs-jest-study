import { Container } from '@chakra-ui/react'
import { MyPhotoList } from '@/components/MyPhotoList'

const PostsPage = () => {
  return (
    <Container minW={'container.xl'} py={8}>
      <MyPhotoList />
    </Container>
  )
}

export default PostsPage
