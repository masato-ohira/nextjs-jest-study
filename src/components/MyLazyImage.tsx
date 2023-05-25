import { Image, ImageProps } from '@chakra-ui/react'
import { css } from '@emotion/react'
import { useState } from 'react'

export const MyLazyImage = (props: ImageProps) => {
  const [loaded, setLoaded] = useState(false)
  const imageStyle = css`
    opacity: 0;
    transition-property: opacity;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    aspect-ratio: 1;
    object-fit: cover;

    ${loaded &&
    css`
      aspect-ratio: unset;
      opacity: 1;
    `}
  `

  return (
    <Image
      loading={'lazy'}
      alt={''}
      onLoad={() => {
        setLoaded(true)
      }}
      css={imageStyle}
      {...props}
    />
  )
}
