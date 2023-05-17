import { useForm } from 'react-hook-form'
import { calcBmi, useBmi } from '@/recoil/bmi'

import {
  Box,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Divider,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { MyBmiTable } from './MyBmiTable'
import { MyBmiResults } from './MyBmiResults'

export const MyBmiForm = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm()

  const { setBmi } = useBmi()

  useEffect(() => {
    setBmi(
      calcBmi({
        height: watch('height'),
        weight: watch('weight'),
      }),
    )
  }, [watch('height'), watch('weight')])

  return (
    <Box shadow={'md'} p={8}>
      <Stack spacing={8}>
        <FormControl>
          <FormLabel data-testid='bmi-input-height'>身長（cm）</FormLabel>
          <Input
            step={0.1}
            defaultValue={0}
            min={0}
            max={300}
            type={'number'}
            {...register('height', {
              valueAsNumber: true,
            })}
          />
        </FormControl>
        <FormControl>
          <FormLabel data-testid='bmi-input-weight'>体重（kg）</FormLabel>
          <Input
            step={0.1}
            defaultValue={0}
            min={0}
            max={500}
            type={'number'}
            {...register('weight', {
              valueAsNumber: true,
            })}
          />
        </FormControl>

        <MyBmiResults />

        <Divider />
        <MyBmiTable />
      </Stack>
    </Box>
  )
}
