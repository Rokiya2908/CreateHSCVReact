import './App.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EmoplyeeList from './pages/EmployeeList'
import MainPage from './pages/MainPage'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
    <a href='/EmployeeList'>Employ Page</a>
    <a href='/MainPage'> Main Page
    </a>
    
    <BrowserRouter>
      <Routes>
          <Route
            path ="/EmployeeList"
            element = {<EmoplyeeList/>}
          />
          <Route
            path ="/MainPage"
            element = {<MainPage/>}
          />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
