import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <div className="container mx-auto px-4">
      <Home />

    <Routes>
      <Route path='/' />
      <Route path='/signup' />
      <Route path='/login' />
      <Route path='/blog' />
      <Route path='/blog/topics/:topic' />
      <Route path='/blog/topics/:topic/:postId' />
    </Routes>
    </div>
  
  )
}

export default App
