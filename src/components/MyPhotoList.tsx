import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { useAlbums, PhotoType } from '@/recoil/samples'
import { MyLazyImage } from './MyLazyImage'

export const MyPhotoList = () => {
  const { state, contents } = useAlbums()

  if (state !== 'hasValue') return <></>
  return (
    <Box role='list' data-testid='my-photo-list'>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={6}
      >
        {contents.map((i: PhotoType) => {
          const imageURL = `https://placehold.jp/18C37D/fff/300x300.png?text=${i.id}`
          return (
            <Box key={i.id}>
              <MyLazyImage src={imageURL} alt={i.title} w={'100%'} h={'auto'} />
              <Text mt={4}>{i.title}</Text>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}
