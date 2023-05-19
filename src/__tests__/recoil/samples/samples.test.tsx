import { RecoilRoot } from 'recoil'
import { renderHook, waitFor } from '@testing-library/react'
import { PhotoType, useAlbums } from '@/recoil/samples'

describe('useAlbums', () => {
  const { result } = renderHook(() => useAlbums(), {
    wrapper: RecoilRoot,
  })

  // モックデータを定義
  const mockData: PhotoType = {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  }

  test('api読み込み後のデータを検証', async () => {
    // Recoil loadableStateが `hasValue` になるまで待つ
    await waitFor(() => {
      expect(result.current.state).toEqual('hasValue')
    })

    // データ数の検証
    expect(result.current.contents.length).toEqual(50)

    // 配列の0番目がモックと一致する
    const target = result.current.contents[0]
    expect(target).toEqual(mockData)

    // contentsはPhotoTypeの配列である
    expect(result.current.contents).toBeInstanceOf(Array)
    expect(target).toHaveProperty('albumId')
    expect(target).toHaveProperty('id')
    expect(target).toHaveProperty('title')
    expect(target).toHaveProperty('url')
    expect(target).toHaveProperty('thumbnailUrl')
  })
})
