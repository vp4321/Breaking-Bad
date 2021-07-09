import React from 'react'
import CharacterCard from './CharacterCard'
import ReactLoading from 'react-loading';

const CharacterGrid = ({ items, isLoading }) => {
    return (

        isLoading ? (<div className="d-flex justify-content-center"><ReactLoading  type={'cubes'} color="#ffff" height={'20%'} width={'20%'} /></div>) :(
            <section className="cards">
            {
                items.map((item) => (
                    <CharacterCard key={item.char_id} item={item} />
                ))
            }
            </section>)


    )
}

export default CharacterGrid
