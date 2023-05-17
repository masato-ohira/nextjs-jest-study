import { render, screen, waitFor } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { MyBmiForm } from './MyBmiForm'
import { ChakraProvider } from '@chakra-ui/react'

describe('MyBmiForm', () => {
  it('レンダリング可能であるか', async () => {
    render(
      <RecoilRoot>
        <MyBmiForm />
      </RecoilRoot>,
    )
  })

  it('すべてのinputTypeがnumberである', async () => {
    render(
      <RecoilRoot>
        <ChakraProvider>
          <MyBmiForm />
        </ChakraProvider>
      </RecoilRoot>,
    )

    // すべてのinput要素を取得しtypeを検証
    const inputElements = document.querySelectorAll('input')
    inputElements.forEach((input) => {
      expect(input.getAttribute('type')).toBe('number')
    })

    // 身長ラベルのテキストを検証
    const heightLabel = screen.getByTestId('bmi-input-height')
    expect(heightLabel).toBeInTheDocument()
    expect(heightLabel.textContent).toContain('身長')

    // 身長ラベルのテキストを検証
    const weightLabel = screen.getByTestId('bmi-input-weight')
    expect(weightLabel).toBeInTheDocument()
    expect(weightLabel.textContent).toContain('体重')
  })
})
