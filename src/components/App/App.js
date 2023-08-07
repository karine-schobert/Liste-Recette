import Header from '../Header';
import Ingredient from '../Ingredient';
import Steps from '../Steps';

// O importe les données dans le composant principal, et on va les dispatcher au sous composants via les props
// desactivation d'une regle eslintrc exemple => "max-len":"off"

import data from '../../data/recipe';
import './styles.scss';

console.log(data);

function App() {
  return (
    <div className="app">
      <Header title={data.title} author={data.author} difficulty={data.difficulty} thumbnail={data.thumbnail} alt="crepes" />
      <Ingredient />
      <Steps instruction={data.instruction} />
    </div>

  );
}

export default App;
