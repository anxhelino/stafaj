import { Outlet, Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <main className='mainContainer'>
        <Header />

        <Outlet />
      </main>
      <Navigation />
    </>
  );
};

export default Layout;
