import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MainPage from './pages/MainPage'
import HSCVList from './pages/HSCVList'
import RequestDocumentList from './pages/RequestDocumentPage'
import RequestDocumentEdit from './pages/EditRequestDocumentPage'

function App() {
  return (
    <>
      <div>
        <Link to="/HSCV">Employ Page</Link>
        <Link to="/RequestDocument">Request Document Page</Link>
        <Link to="/">Main Page</Link>
      </div>

      <Routes>
        <Route
          path="/HSCV"
          element={<HSCVList />}
        />
        <Route
          path="/RequestDocument"
          element={<RequestDocumentList />}
        />
        <Route
          path="/"
          element={<MainPage />}
        />
        <Route
          path='/RequestDocumentEdit/:id'
          element={<RequestDocumentEdit />}
        />
      </Routes>
    </>
  )
}

export default App
