import { Routes, Route } from 'react-router-dom'
import Error from '../components/pages/Error'
import Home from '../components/pages/Home/Home'

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default Path