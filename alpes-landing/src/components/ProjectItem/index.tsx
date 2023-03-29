/* eslint-disable @next/next/no-img-element */
import * as C from './styles'
import Image from 'next/image'

type ProjectItemProps = {
  title: string
  Description: string
  imgUrl: string
}

export function ProjectItem({ title, Description, imgUrl }: ProjectItemProps) {
  return (
    <>
      <C.Container>
        <C.ImageContainer>
          <img src={imgUrl} width={400} height={300} alt={title} />
        </C.ImageContainer>
        <C.InfoContainer>
          <C.Title>{title}</C.Title>
          <C.Description>{Description}</C.Description>
        </C.InfoContainer>
      </C.Container>
    </>
  )
}
