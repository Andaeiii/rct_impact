import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loadr from './utils/Loadr';
import MasterPage from './pages/MasterPage';
import { AuthProvider } from './Auth/AuthProvider';


function App() {

  let appState = useSelector(store => store);
  let { loader, app } = appState;


  return (

    <>

      <div className="App">

        <Loadr title={loader.text}
          visible={loader.display ? "block" : "none"} />
          
          <AuthProvider>

              <Routes>

                    <Route path='/*' element={<MasterPage />} />

              </Routes>

          </AuthProvider>        

      </div>

    </>

  );
}

export default App;

