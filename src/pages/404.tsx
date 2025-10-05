import { Link } from 'react-router-dom';
import gifImg from '../assets/images/travolta-waiting.gif';
import classes from './404.module.scss';

export const NotFound = () => {
  return (
    <div className="container">
      <h1>Такой страницы нет</h1>
      <img className={classes.img} src={gifImg} alt="Растерянный Траволта" />
      <Link to="/">На Главную</Link>
    </div>
  );
};
