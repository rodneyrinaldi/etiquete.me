import Layout from '../../common/components/Layout'
import Section from '../../common/components/Layout/Section'

import * as Ss from './index.module.css'

function Home() {
  return (
    <Layout default='yes'>
      <Section>
        pets e pessoas
      </Section>
      <Section>
        segurança de pets, achado pode contatar donos
      </Section>
      <Section>
        segurança de pacientes mentais, achado pode contatar responsáveis
      </Section>
      <Section>
        segurança de vulneráveis com informações médicas, localização e etc
      </Section>
      <Section>
        segurança de alunos em escurões, viagens e acampamentos
      </Section>
      <Section>
        identificação de materiais escolares
      </Section>
      <Section>
        identificação de materiais de pets
      </Section>
      <Section>
        identificação de livros em bibliotecas
      </Section>
      <Section>
        identificação de peças em oficinas que desmontem objetos
      </Section>
      <Section>
        identificação de malas e pertences em viagens
      </Section>
      <Section>
        identificação de pertences para aventureiros e infromações médicas e de localização
      </Section>
    </Layout>
  )
}

export default Home