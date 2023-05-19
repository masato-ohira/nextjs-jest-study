import { useBmi, getBmiLevel } from '@/recoil/bmi'
import { Stack, HStack, Box, Text } from '@chakra-ui/react'

export const MyBmiResults = () => {
  const { bmi } = useBmi()
  return (
    <Stack>
      {bmi ? (
        <>
          <HStack>
            <Box>BMI</Box>
            <Box>=</Box>
            <Box>{bmi}</Box>
          </HStack>
          <Box>
            <Text
              data-testid='bmi-form-result'
              fontWeight={'bold'}
              color={getBmiLevel(bmi, 'color')}
            >
              {getBmiLevel(bmi, 'label')}
            </Text>
          </Box>
        </>
      ) : (
        <Box>計算できませんでした</Box>
      )}
    </Stack>
  )
}
