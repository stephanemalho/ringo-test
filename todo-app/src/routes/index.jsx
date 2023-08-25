import { Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home'
import Error from '../components/pages/Error'

const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default Path