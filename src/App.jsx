import './App.css'
import APIPricing from './component/APIPricing'
import Authentication from './component/Authentication'
import CodeExamples from './component/CodeExamples'
import EndPoints from './component/EndPoints'
import NavigBar from './component/NavigBar'
import Overview from './component/Overview'
import Tutorial from './component/Tutorial'

function App() {
  

  return (
    <>
      <header >
        <h1 id='header'>Book Generator API</h1>
      </header>
      <NavigBar/>
      <Overview/>
      <Authentication/>
      <EndPoints/>
      <Tutorial/>
      <CodeExamples/>
      <APIPricing/>
    </>
  )
}

export default App
