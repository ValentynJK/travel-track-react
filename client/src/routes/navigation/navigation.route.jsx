// react
import { Outlet, useNavigate } from 'react-router-dom';
// styling
import './navigation.styles.scss';
import logo from '../../assets/logo.png'

const Navigation = () => {

  const navigate = useNavigate();

  const onBackHome = () => navigate('/');
  const onAboutToggle = () => navigate('/about');

  return (
    <>
      <div className='navigation-container'>
        <img src={logo} alt="Travel-Track logo" onClick={onBackHome} />
        <div className='navigation-buttons'>
          <p onClick={onBackHome}>Home</p>
          <p onClick={onAboutToggle}>About</p>
        </div>
      </div>
      <Outlet />
    </>
  )
};

export default Navigation;