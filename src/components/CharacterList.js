import React from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/list.scss';
const CharacterList = (props) => {
  let htmlCode;
  console.log(
    props.charactersInfo.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
  );

  htmlCode = props.charactersInfo.map((character) => {
    return <CharacterCard key={character.id} character={character} />;
  });

  return <ul className='list'>{htmlCode}</ul>;
};

export default CharacterList;
