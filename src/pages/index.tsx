import { Button, Container, Stack, Center } from '@chakra-ui/react'
import Link from 'next/link'

const IndexPage = () => {
  return (
    <Container>
      <Center minH={'100vh'}>
        <Stack spacing={6}>
          <Link href={'/posts'}>
            <Button>記事一覧</Button>
          </Link>
          <Link href={'/bmi'}>
            <Button>Bmiフォーム</Button>
          </Link>
        </Stack>
      </Center>
    </Container>
  )
}

export default IndexPage
