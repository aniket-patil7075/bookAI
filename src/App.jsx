import './App.css'
import Authentication from './component/Authentication'
import NavigBar from './component/NavigBar'
import Overview from './component/Overview'

function App() {
  

  return (
    <>
      <header >
        <h1 id='header'>Book Generator API</h1>
      </header>
      <NavigBar/>
      <Overview/>
      <Authentication/>
    </>
  )
}

export default App
