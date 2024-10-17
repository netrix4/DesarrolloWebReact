import React from 'react'

const preguntas_quizz = [
  {
    'pregunta': '¿Qué tipo de animal es la abeja?',
    'respuesta': ''
  },
  {
    'pregunta': 'Familia del elefante:',
    'respuesta': 'Paquidermo'
  },
  {
    'pregunta': 'Nombre cientificao del humano promedio:',
    'respuesta': 'Homo-sapiens'
  },
  {
    'pregunta': '¿Cómo se alimentan las plantas?',
    'respuesta': 'Fotosíntesis'
  },
  {
    'pregunta': 'Cierto o falso que existen aves que no pueden volar',
    'respuesta': 'Cierto'
  },
]

const Preguntas = () => {
  return (
    <div className ='text-yellow-50'>
      {
        preguntas_quizz.map((item)=>{
          <div>
            {item}
          </div>
        })
      }
      </div>
    
  )
}

export default Preguntas;