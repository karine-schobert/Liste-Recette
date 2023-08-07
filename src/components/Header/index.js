// import de la feuille de style du sous composant
import './styles.scss';

function Header() {
  return (
    <header>
      <img src="http://localhost/Spe-React/Liste-Recette/src/assets/images/crepes.png" alt="crepes" />
      <div>
        <h1 className="titleH1">Crepes raffinées</h1>
        <p className="header-name">John Deuf</p>
      </div>
    </header>

  );
}

export default Header;
