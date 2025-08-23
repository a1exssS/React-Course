import { classNames } from 'shered/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouters } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shered/ui/Modal/Modal';
import { useState } from 'react';

const App = () => {

   const { theme } = useTheme()

   return (
      <div className={classNames('app', {}, [theme])}>
         <Navbar />
         <div className='content-page'>
            <Sidebar />
            <AppRouters />
         </div>

      </div>
   );
};

export default App;
