import { Container } from '@chakra-ui/react'
import { MyPhotoList } from '@/components/MyPhotoList'

const PostsPage = () => {
  return (
    <Container
      minW={{
        base: '0',
        md: 'container.md',
        lg: 'container.lg',
        xl: 'container.xl',
      }}
      py={8}
    >
      <MyPhotoList />
    </Container>
  )
}

export default PostsPage
