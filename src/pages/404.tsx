import { Link } from 'react-router-dom';
import gifImg from '../assets/images/travolta-waiting.gif';

export const NotFound = () => {
  return (
    <div className="container">
      <h1>Такой страницы нет</h1>
      <img className="img-error" src={gifImg} alt="Растерянный Траволта" />
      <Link to="/" replace>
        На Главную
      </Link>
    </div>
  );
};
