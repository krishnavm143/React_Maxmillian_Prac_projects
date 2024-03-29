
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className='app'>
      <Router>
        <Header></Header>
        <div className='container'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/movie/:imdb' element={<MovieDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
