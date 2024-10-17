import React from 'react'

// const categories_footer =['develop', 'participate', 'find us', 'explore more']
const footer_content = [
    {
        'categorie' :'develop',
        'categorie_options' : ['Guides', 'Components', 'Apis', 'Architecture']
    },
    {
        'categorie':'participate',
        'categorie_options':['Guides', 'Components', 'Apis', 'Architecture']
    },
    {
        'categorie':'find us',
        'categorie_options':['Guides', 'Components', 'Apis', 'Architecture']
    },
    {
        'categorie':'explore more',
        'categorie_options':['Guides', 'Components', 'Apis', 'Architecture']
    },
]

const Footer = () => {
  return (
    <footer>
        <div className =' h-[380px] bg-[#20222a] justify-around uppercase px-[32px] py[34px] text-[14px] text-[#393434] flex flex-row'>

        {
            footer_content.map((item, index) => {
                return (
                    <div className='flex flex-col'>
                        <p className='text-[#86889700]' >{item.categorie}</p>
                        <ul>
                            {item.categorie_options.map((categorieOption)=>{
                                return (<li>{categorieOption}</li>)
                            })
                            }

                        </ul>


                    </div>
                )
            })
        }
        </div>
    </footer>
  )
}

export default Footer