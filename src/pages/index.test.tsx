import { render, screen } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import IndexPage from '@/pages/index'
import { RecoilRoot } from 'recoil'

describe('IndexPage', () => {
  it('正しくレンダーされている', () => {
    render(
      <>
        <RecoilRoot>
          <ChakraProvider>
            <IndexPage />
          </ChakraProvider>
        </RecoilRoot>
      </>,
    )
  })

  it('コンポーネントが出力されている', async () => {
    render(
      <>
        <RecoilRoot>
          <ChakraProvider>
            <IndexPage />
          </ChakraProvider>
        </RecoilRoot>
      </>,
    )
    const myPhotoListElement = await screen.findByTestId('my-photo-list')
    expect(myPhotoListElement).toBeInTheDocument()
  })
})
