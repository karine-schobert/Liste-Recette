import './styles.scss';

import PropTypes from 'prop-types';

function Steps({ instruction }) {
  console.log('taleau instruction', instruction);

  /*
  instruction est un tableau de chaines de caracteres
  on veut un tableau de <li className="steps-item">faire les crepes</li>
  on va utiliser map pour passer de l'un a l'autre
  */
  return (
    <ul className="steps">
      {
        // eslint-disable-next-line no-shadow
        instruction.map((instruction) => <li className="steps-item" key={instruction}>{instruction}</li>)
      }
    </ul>

  );
}

Steps.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  instruction: PropTypes.arrayOf(PropTypes.string).isRequired,

};
export default Steps;
