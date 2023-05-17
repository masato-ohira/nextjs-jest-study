import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { useAlbums, PhotoType } from '@/recoil/samples'

export const MyPhotoList = () => {
  const { state, contents } = useAlbums()

  if (state !== 'hasValue') return <></>
  return (
    <Box role='list' data-testid='my-photo-list'>
      <Grid templateColumns={'repeat(4, 1fr)'} gap={6}>
        {contents.map((i: PhotoType) => {
          return (
            <Box key={i.id}>
              <Image src={i.thumbnailUrl} alt={i.title} w={'full'} h={'auto'} />
              <Text mt={4}>{i.title}</Text>
            </Box>
          )
        })}
      </Grid>
    </Box>
  )
}
