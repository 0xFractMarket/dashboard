import './assets/css/tailwind.css'
import './assets/css/materialdesignicons.min.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import Index from './pages';
import Sidebar from './components/sidebar';
import TopHeader from './components/topHeader';
import { useState, useEffect } from 'react';
import ExploreProperty from './pages/explore-property';
import PropertyDetail from './pages/property-detail';
import FavoriteProperty from './pages/favorite-property';
import AddProperty from './pages/add-property';
import Chat from './pages/chat';
import Faqs from './pages/faqs';
import Review from './pages/review';
import Privacy from './pages/privacy';
import Terms from './pages/terms';

function App() {
  let [toggle, setToggle] = useState(false)
  let loction = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <>
      <div className={`${toggle ? '' : 'toggled' } page-wrapper dark`}>
          <Sidebar/>
          <main className="page-content bg-gray-50 dark:bg-slate-800">
              <TopHeader toggle={toggle} setToggle={setToggle} />
              <Routes>
                <Route path='/' element={<ExploreProperty/>}/>
                <Route path='/dashboard' element={<Index/>}/>
                <Route path='/property-detail' element={<PropertyDetail/>}/>
                <Route path='/property-detail/:id' element={<PropertyDetail/>}/>
                <Route path='/favorite-property' element={<FavoriteProperty/>}/>
                <Route path='/add-property' element={<AddProperty/>}/>
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/faqs' element={<Faqs/>}/>
                <Route path='/review' element={<Review/>}/>
                <Route path='/privacy' element={<Privacy/>}/>
                <Route path='/terms' element={<Terms/>}/>
              </Routes>
          </main>
      </div>
    </>
  );
}

export default App;
