import { classNames } from 'shered/lib/classNames/classNames';
import { AppRouters } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/User';

const App = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(userActions.initAuth())
   }, [dispatch])

   return (
      <div className={classNames('app')}>
         <Navbar />
         <div className='content-page'>
            <Sidebar />
            <AppRouters />
         </div>

      </div>
   );
};

export default App;
