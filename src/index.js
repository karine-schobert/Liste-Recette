// == Import  de creatRoot qui va nous ervir a creer un receptacle React pour nos composants
import { createRoot } from 'react-dom/client';

// point  entree du fichier
// Import du composant App exporte dans le fichier index.js du dossier App
// eslint-disable-next-line import/extensions
import App from 'src/components/App/App';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <App />;

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
// On creait un container d'element react avec le div root
const rootReactContainer = createRoot(document.getElementById('root'));

// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
// On fait le rendu de App dans le container
rootReactContainer.render(rootReactElement);
