import './styles/index.scss';
import { classNames } from 'shered/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouters } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'shered/ui/ThemeSwitcher/ThemeSwitcher';

const App = () => {

   const { theme } = useTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <Navbar />
         <AppRouters />
      </div>
   );
};

export default App;
