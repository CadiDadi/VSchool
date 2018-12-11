import React from 'react'
import Character from '../Character'
import { withCharacter } from '../../context/CharacterProvider'

const CharacterList = props => {
    return (
        <div>
            <h1>Rick & Morty API</h1>
            <h2>--------------------------------</h2>
            {  props.characters.map(char => <Character {...char} key={char.id}/>) }
        </div>
    )
}
  
export default withCharacter(CharacterList)