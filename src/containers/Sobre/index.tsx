import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas
      perspiciatis quae quidem, saepe, debitis doloremque odio consequuntur
      aspernatur quis, recusandae minima. Numquam voluptatem natus eveniet saepe
      explicabo dicta possimus.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=paulohenriquebento&show_icons=true&theme=tokyonight" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=paulohenriquebento&layout=compact&theme=tokyonight" />
    </GithubSection>
  </section>
)

export default Sobre
