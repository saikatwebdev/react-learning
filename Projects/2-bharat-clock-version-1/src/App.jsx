import './App.css'
import AppDescription from './AppDescription'
import AppName from './AppName'
import TimeExplainer from './TimeExplainer';

function App() {
  return (
    <div className="container">
      <AppName/>
      <AppDescription/>
      <TimeExplainer/>
    </div>
  )
}

export default App;
