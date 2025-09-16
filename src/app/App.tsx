import { classNames } from 'shered/lib/classNames/classNames';
import { AppRouters } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserInited, userActions } from 'entities/User';

const App = () => {

   const dispatch = useDispatch();
   const inited = useSelector(getUserInited)

   useEffect(() => {
      dispatch(userActions.initAuth())
   }, [dispatch])

   return (
      <div className={classNames('app')}>
         <Navbar />
         <main className='main'>
            <Sidebar />
            {inited &&
               <AppRouters />
            }
         </main>

      </div>
   );
};

export default App;
