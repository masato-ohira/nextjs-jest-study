import { render, screen, waitFor } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { MyPhotoList } from '@/components/MyPhotoList'
import { uniq } from 'lodash'

describe('MyPhotoList', () => {
  test('画像の出力結果が正しい事を検証', async () => {
    render(
      <RecoilRoot>
        <MyPhotoList />
      </RecoilRoot>,
    )

    // APIからデータを取得するまで待機
    await waitFor(() => screen.getAllByRole('img'))
    const images = screen.getAllByRole('img')

    // 画像の枚数が50件であることを検証
    expect(images).toHaveLength(50)

    // すべての画像はユニークなURLである
    let imageUrls: string[] = []
    images.forEach((img) => {
      const imgURL = img.getAttribute('src')
      if (imgURL) {
        imageUrls.push(imgURL)
      }
    })
    imageUrls = uniq(imageUrls)
    expect(imageUrls).toHaveLength(50)

    // すべての画像にalt属性があることを検証
    images.forEach((image) => {
      expect(image).toHaveAttribute('alt')
    })
  })
})
