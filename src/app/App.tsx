import './styles/index.scss';
import { classNames } from 'shered/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouters } from './providers/router';
import { Navbar } from 'widgets/Navbar';

const App = () => {

   const { theme, toggleTheme } = useTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <Navbar />
         <AppRouters />
         <button onClick={toggleTheme}>toggle theme</button>
      </div>
   );
};

export default App;
