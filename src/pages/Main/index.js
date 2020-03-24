import React from 'react'
import { Link } from 'react-router-dom'

import { FaBus } from 'react-icons/fa'

import { Container, Images } from './styles'
import esquerda from '../../assets/images/esquerda.png'
import direita from '../../assets/images/direita.png'
import frente from '../../assets/images/frente.png'
import traseira from '../../assets/images/traseira.png'

export default function Main() {
  return (
    <Container>
      <h1>
        <FaBus />
        Breakdowns
      </h1>
      <Images>
        <Link to="esq">
          <img src={esquerda} alt="Lado esquerdo" width={600} />
        </Link>
        <img src={direita} alt="Lado direito" width={600} />
        <img src={frente} alt="Frente" />
        <img src={traseira} alt="Traseira" />
      </Images>
    </Container>
  )
}
