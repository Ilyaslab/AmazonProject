import HomePage from "./Pages/HomePage"
import {Routes , Route} from 'react-router-dom'


function App() {
 
  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout.html" element={<div>test</div>} />
    </Routes>
       
    </>
  )
}

export default App