import './assets/css/tailwind.css'
import './App.css';
import './assets/css/materialdesignicons.min.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Index from './pages';
import Sidebar from './components/sidebar';
import TopHeader from './components/topHeader';
import { useState, useEffect } from 'react';
import Footer from './components/footer';
import Switcher from './components/switcher';
import ExploreProperty from './pages/explore-property';
import PropertyDetail from './pages/property-detail';
import FavoriteProperty from './pages/favorite-property';
import AddProperty from './pages/add-property';
import Chat from './pages/chat';
import Profile from './pages/profile';
import ProfileSetting from './pages/profile-setting';
import Blog from './pages/blog';
import BlogDetail from './pages/blog-detail';
import Starter from './pages/starter';
import Faqs from './pages/faqs';
import Pricing from './pages/pricing';
import Review from './pages/review';
import Privacy from './pages/privacy';
import Terms from './pages/terms';
import Login from './pages/login';
import Signup from './pages/signup';
import SignupSuccess from './pages/signup-success';
import ResetPassword from './pages/reset-password';
import LockScreen from './pages/lock-screen';
import Comingsoon from './pages/comingsoon';
import Maintenance from './pages/maintenance';
import Error from './pages/error';
import ThankYou from './pages/thankyou';

function App() {
  let [toggle, setToggle] = useState(false)
  let loction = useLocation();

  useEffect(() => {
    // Asegurar que el modo oscuro esté activo
    document.documentElement.classList.add('dark');
    // Remover el modo claro si existe
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <>
    {loction.pathname === '/login' || loction.pathname === '/signup' || loction.pathname === '/signup-success' || loction.pathname === '/reset-password' || loction.pathname === '/lock-screen' || loction.pathname === '/comingsoon' || loction.pathname === '/maintenance' || loction.pathname === '/error' || loction.pathname === '/thankyou'  ? 
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signup-success' element={<SignupSuccess/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/lock-screen' element={<LockScreen/>}/>
          <Route path='/comingsoon' element={<Comingsoon/>}/>
          <Route path='/maintenance' element={<Maintenance/>}/>
          <Route path='/error' element={<Error/>}/>
          <Route path='*' element={<Error/>}/>
          <Route path='/thankyou' element={<ThankYou/>}/>
        </Routes> : 

      <div className={`${toggle ? '' : 'toggled' } page-wrapper dark`}>
          <Sidebar/>
          <main className="page-content bg-gray-50 dark:bg-slate-800">
              <TopHeader toggle={toggle} setToggle={setToggle} />
              <Routes>
                <Route path='/' element={<Index/>}/>
                <Route path='/' element={<Index/>}/>
                <Route path='/explore-property' element={<ExploreProperty/>}/>
                <Route path='/property-detail' element={<PropertyDetail/>}/>
                <Route path='/property-detail/:id' element={<PropertyDetail/>}/>
                <Route path='/favorite-property' element={<FavoriteProperty/>}/>
                <Route path='/add-property' element={<AddProperty/>}/>
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/profile-setting' element={<ProfileSetting/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/blog-detail' element={<BlogDetail/>}/>
                <Route path='/blog-detail/:id' element={<BlogDetail/>}/>
                <Route path='/starter' element={<Starter/>}/>
                <Route path='/faqs' element={<Faqs/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
                <Route path='/review' element={<Review/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/terms' element={<Terms/>}/>
              </Routes>
          </main>
      </div>
      
    }
   
    </>
  );
}

export default App;
