import { useBmi } from '@/recoil/bmi'
import { Stack, HStack, Box, Text } from '@chakra-ui/react'

export const MyBmiResults = () => {
  const { bmi, getBmiLevel } = useBmi()
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
            <Text fontWeight={'bold'} color={getBmiLevel('color')}>
              {getBmiLevel('label')}
            </Text>
          </Box>
        </>
      ) : (
        <Box>計算できませんでした</Box>
      )}
    </Stack>
  )
}
