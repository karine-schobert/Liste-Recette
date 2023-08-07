// import de la feuille de style du sous composant
import './styles.scss';

import PropTypes from 'prop-types';

function Header({
  title, author, difficulty, thumbnail,
}) {
  return (
    <header className="header">
      <img className="header-image" src={thumbnail} alt="crepes" />
      <div className="header-infos">
        <h1 className="header-title">{title}</h1>
        <p className="header-author">{author}-{difficulty}</p>
      </div>
    </header>

  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
export default Header;
