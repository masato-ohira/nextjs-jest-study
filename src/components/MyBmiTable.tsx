import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Stack,
} from '@chakra-ui/react'

import { bmiGuidelines, valueText } from '@/recoil/bmi'

export const MyBmiTable = () => {
  return (
    <Stack>
      <Text fontWeight={'bold'}>BMIの判定基準</Text>
      <TableContainer>
        <Table size='sm' variant={'simple'}>
          <Thead>
            <Tr>
              <Th>BMI</Th>
              <Th>基準</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bmiGuidelines.map((i) => {
              return (
                <Tr key={i.label}>
                  <Td fontSize={'xs'}>
                    {valueText({ min: i.min, max: i.max })}
                  </Td>
                  <Td fontSize={'xs'} color={i.color} fontWeight={'bold'}>
                    {i.label}
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  )
}
