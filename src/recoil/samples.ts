import { selector, useRecoilValueLoadable } from 'recoil'
import axios from 'axios'

// types
// ------------------------------
export type PhotoType = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

// selectors
// ------------------------------
export const albums = selector({
  key: 'samples/albums',
  get: async () => {
    const { data }: { data: PhotoType[] } = await axios.get(
      '/api/albums/1/photos',
    )
    // return []
    return data
  },
})

// hooks
// ------------------------------
export const useAlbums = () => {
  const { contents, state } = useRecoilValueLoadable(albums)
  return {
    contents: contents as PhotoType[],
    state,
  }
}
