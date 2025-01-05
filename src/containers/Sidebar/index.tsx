import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  toggle: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Paulo Bento</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Paulo Bento
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema onClick={props.toggle}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
