import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import About from './Routes/About';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import Counter from './Concepts/Counter';
import JokeApp from './Concepts/JokeApp';
import NotFound from './Routes/NotFound';
import ReducerCounter from './Concepts/ReducerCounter';
import ReduxCounter from './Concepts/ReduxCounter';
import Header from './Components/Header';
import ThemeButton from './Components/ThemeButton';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <Provider store={store}>
    <Header/>
    <ThemeButton/>
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          />
          <Route
            path='/aboutus'
            element={<About/>}
          />
          <Route
            path='/projects'
            element={<Projects/>}
          />
          <Route
            path='/contact'
            element={<Contact/>}
          />
          <Route
            path='/counter'
            element={<Counter/>}
          />
          <Route
            path='/jokes'
            element={<JokeApp/>}
          />
          <Route
            path='/reducer_counter'
            element={<ReducerCounter/>}
          />
          <Route
            path='/redux_counter'
            element={<ReduxCounter/>}
          />
          <Route
            path='/*'
            element={<NotFound/>}
          />
        </Routes>
      </Router>
    </div>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
