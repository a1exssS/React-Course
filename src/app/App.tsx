import { classNames } from 'shered/lib/classNames/classNames';
import { AppRouters } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {

   return (
      <div className={classNames('app', {}, [])}>
         <Navbar />
         <div className='content-page'>
            <Sidebar />
            <AppRouters />
         </div>

      </div>
   );
};

export default App;
