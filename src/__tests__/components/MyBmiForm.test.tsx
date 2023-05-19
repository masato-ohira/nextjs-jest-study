import { render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { MyBmiForm } from '@/components/MyBmiForm'
import { ChakraProvider } from '@chakra-ui/react'

describe('MyBmiForm', () => {
  test('レンダリング可能であるか', async () => {
    render(
      <RecoilRoot>
        <MyBmiForm />
      </RecoilRoot>,
    )
  })

  test('inputタグの出力結果を検証する', async () => {
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
    const heightLabel = screen.getByTestId('bmi-label-height')
    expect(heightLabel).toBeInTheDocument()
    expect(heightLabel.textContent).toContain('身長')

    // 身長ラベルのテキストを検証
    const weightLabel = screen.getByTestId('bmi-label-weight')
    expect(weightLabel).toBeInTheDocument()
    expect(weightLabel.textContent).toContain('体重')
  })
})
