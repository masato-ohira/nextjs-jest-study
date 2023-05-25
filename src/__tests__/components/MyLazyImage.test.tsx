import { render, screen, waitFor } from '@testing-library/react'
import { MyLazyImage } from '@/components/MyLazyImage'
import { ChakraProvider } from '@chakra-ui/react'

describe('MyLazyImage', () => {
  const imageURL = 'https://placehold.jp/eeeeee/222222/150x150.png?text=example'

  test('画像のLazyLoadを検証', async () => {
    // 非同期テスト
    render(<MyLazyImage src={imageURL} />)

    const imageElement = screen.getByRole('img')

    // 画像が表示されるまで待機します
    await waitFor(
      () => {
        expect(imageElement).toBeInTheDocument()
        expect(imageElement).toHaveAttribute('loading', 'lazy')
      },
      { timeout: 5000 },
    )
  })
})
