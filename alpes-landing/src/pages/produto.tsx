import Header from '@/components/Header'
import { ProjectItem } from '@/components/ProjectItem'
import * as C from '@/styles/ProductStyles'

const produto = () => {
  return (
    <>
      <Header />
      <C.Container>
        <ProjectItem
          title='Método'
          imgUrl='https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit nisi diam, eu ullamcorper libero efficitur eget. Pellentesque lobortis vestibulum augue, quis rutrum felis vehicula ullamcorper. Donec facilisis dolor ipsum, sed pretium neque venenatis in. Fusce euismod porta laoreet.'
        />
        <ProjectItem
          title='Lógica'
          imgUrl='https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit nisi diam, eu ullamcorper libero efficitur eget. Pellentesque lobortis vestibulum augue, quis rutrum felis vehicula ullamcorper. Donec facilisis dolor ipsum, sed pretium neque venenatis in. Fusce euismod porta laoreet. '
        />
        <ProjectItem
          title='Jornada'
          imgUrl='https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          Description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit nisi diam, eu ullamcorper libero efficitur eget. Pellentesque lobortis vestibulum augue, quis rutrum felis vehicula ullamcorper. Donec facilisis dolor ipsum, sed pretium neque venenatis in. Fusce euismod porta laoreet. '
        />
      </C.Container>
    </>
  )
}

export default produto
