/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'

import { Container } from './styles'
import esquerda from '../../assets/images/esquerda.png'

const valores = []

let clicado1 = false

const imagem = document.createElement('img')

function janela1() {
  imagem.setAttribute('src', '../../assets/images/imagensESQ/janela1.png')
  // resultado.style.textAlign = 'left'
  // resultado.innerHTML = ``
  if (!clicado1) {
    valores.push('janela 1')
    clicado1 = true
    console.log('janela 1 adicionada')
    // resultado.appendChild(imagem)
  } else {
    clicado1 = false
    console.log('janela 1 REMOVIDA')

    const index = valores.indexOf('janela 1')
    if (index > -1) {
      valores.splice(index, 1)
    }
  }
}
function janela2() {
  console.log('janela2')
}
function janela3() {
  console.log('janela3')
}
function janela4() {
  console.log('janela4')
}
function janela5() {
  console.log('janela5')
}

export default function Esquerda() {
  return (
    <Container>
      <h1>Esquerda</h1>
      <img src={esquerda} alt="Lado esquerdo" useMap="#Map" />
      <map name="Map" id="Map">
        <area
          onClick={() => {
            janela1()
          }}
          alt=""
          title="Janela 1"
          href="#"
          shape="poly"
          coords="58,138,131,116,136,56,123,44,60,43,51,60,48,94,48,120,50,136"
        />
        <area
          onClick={() => {
            janela2()
          }}
          alt=""
          title="Janela 2"
          href="#"
          shape="poly"
          coords="161,106,164,45,265,46,267,108"
        />
        <area
          onClick={() => {
            janela3()
          }}
          alt=""
          title="Janela 3"
          href="#"
          shape="poly"
          coords="278,105,280,48,381,50,384,108"
        />
        <area
          onClick={() => {
            janela4()
          }}
          alt=""
          title="Janela 4"
          href="#"
          shape="poly"
          coords="393,107,394,47,496,51,500,108"
        />
        <area
          onClick={() => {
            janela5()
          }}
          alt=""
          title="Janela 5"
          href="#"
          shape="poly"
          coords="509,112,511,47,610,50,613,110"
        />
        <area
          onClick="janela6()"
          alt=""
          title="Janela 6"
          href="#"
          shape="poly"
          coords="624,110,626,50,728,50,729,110"
        />
        <area
          onClick="janela7()"
          alt=""
          title="Janela 7"
          href="#"
          shape="poly"
          coords="740,111,741,49,816,53,817,112"
        />
        <area
          onClick="lado1()"
          alt=""
          title="Lado 1"
          href="#"
          shape="poly"
          coords="137,167,272,170,272,114,141,113"
        />
        <area
          onClick="lado2()"
          alt=""
          title="Lado 2"
          href="#"
          shape="poly"
          coords="280,117,281,167,383,168,383,121"
        />
        <area
          onClick="lado3()"
          alt=""
          title="Lado 3"
          href="#"
          shape="poly"
          coords="397,171,496,173,496,117,399,120"
        />
        <area
          onClick="lado4()"
          alt=""
          title="Lado 4"
          href="#"
          shape="poly"
          coords="510,171,510,121,611,125,608,167"
        />
        <area
          onClick="lado5()"
          alt=""
          title="Lado 5"
          href="#"
          shape="poly"
          coords="626,118,624,166,637,174,732,175,729,120"
        />
        <area
          onClick="lado6()"
          alt=""
          title="Lado 6"
          href="#"
          shape="poly"
          coords="740,120,745,173,822,172,823,125"
        />
        <area
          onClick="roda1()"
          alt=""
          title="Roda 1"
          href="#"
          shape="poly"
          coords="166,232,184,241,200,240,217,232,227,220,230,203,229,194,224,187,223,183,218,179,211,175,204,173,199,171,192,171,184,173,177,177,170,181,164,186,162,193,161,200,159,209,160,215,160,224"
        />
        <area
          onClick="roda2()"
          alt=""
          title="Roda 2"
          href="#"
          shape="poly"
          coords="570,213,574,227,581,236,588,239,601,245,616,245,628,239,636,232,641,222,645,213,645,204,640,196,634,188,632,181,625,179,616,178,607,175,601,178,595,180,594,177,590,180,586,187,581,193,577,200"
        />
        <area
          onClick="parabrisa()"
          alt=""
          title="Parabrisa"
          href="#"
          shape="poly"
          coords="22,157,36,129,45,35,38,21,28,68"
        />
        <area
          onClick="retrovisor()"
          alt=""
          title="Retrovisor"
          href="#"
          shape="poly"
          coords="33,37,13,38,22,92"
        />
        <area
          onClick="traseira()"
          alt=""
          title="Traseira"
          href="#"
          shape="poly"
          coords="826,213,854,207,853,28,829,23,824,25,831,47"
        />
        <area
          onClick="teto()"
          alt=""
          title="Teto"
          href="#"
          shape="poly"
          coords="51,34,52,16,821,23,821,41"
        />
        <area
          onClick="inferior2()"
          alt=""
          title="Inferior 2"
          href="#"
          shape="poly"
          coords="240,212,236,175,566,177,562,214"
        />
        <area
          onClick="inferior3()"
          alt=""
          title="Inferior 3"
          href="#"
          shape="poly"
          coords="652,217,650,179,822,180,820,211"
        />
        <area
          onClick="inferior1()"
          alt=""
          title="Inferior 1"
          href="#"
          shape="poly"
          coords="149,210,155,174,41,172,31,184,26,198,30,206,34,210"
        />
        <area
          onClick="lado()"
          alt=""
          title="Lado"
          href="#"
          shape="poly"
          coords="36,134,58,141,133,120,133,164,120,169,86,169,58,168,44,167,22,187,22,168"
        />
      </map>
    </Container>
  )
}
