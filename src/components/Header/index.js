// import de la feuille de style du sous composant
import './styles.scss';

function Header() {
  return (
    <header className="header">
      <img className="header-image" src="http://localhost/Spe-React/Liste-Recette/src/assets/images/crepes.png" alt="crepes" />
      <div className="header-infos">
        <h1 className="header-title">Crepes raffinées</h1>
        <p className="header-author">John Deuf</p>
      </div>
    </header>

  );
}

export default Header;
