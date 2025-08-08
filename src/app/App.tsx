import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from 'shered/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouters } from './providers/router';

const App = () => {

   const { theme, toggleTheme } = useTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <button onClick={toggleTheme}>toggle theme</button>
         <Link to={'/'}>Главная</Link>
         <Link to={'/about'}>О сайте</Link>
         <AppRouters />
      </div>
   );
};

export default App;
