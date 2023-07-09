import './App.scss';
import Footer from './pages/Footer';
import Header from './pages/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './common/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </Provider>
  );
}

export default App;