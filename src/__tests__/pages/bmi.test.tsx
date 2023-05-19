import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import IndexPage from '@/pages/bmi/index'
import { RecoilRoot } from 'recoil'

describe('BmiPage', () => {
  test('コンポーネントが出力されている', async () => {
    render(
      <>
        <RecoilRoot>
          <ChakraProvider>
            <IndexPage />
          </ChakraProvider>
        </RecoilRoot>
      </>,
    )

    await waitFor(() => {
      const myPhotoListElement = screen.getByTestId('bmi-form')
      expect(myPhotoListElement).toBeInTheDocument()
    })
  })

  test('身長と体重を入れて普通体重になるか', async () => {
    render(
      <>
        <RecoilRoot>
          <ChakraProvider>
            <IndexPage />
          </ChakraProvider>
        </RecoilRoot>
      </>,
    )

    await waitFor(() => {
      const inputHeight = screen.getByTestId('bmi-input-height')
      fireEvent.change(inputHeight, { target: { value: '160' } })

      const inputWeight = screen.getByTestId('bmi-input-weight')
      fireEvent.change(inputWeight, { target: { value: '50' } })

      const formResult = screen.getByTestId('bmi-form-result')
      expect(formResult).toHaveTextContent('普通体重')
    })
  })
})
