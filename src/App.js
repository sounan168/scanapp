import './App.css';
import { useState } from 'react';
import Scan from './Scan';
function App() {
  const [result, setresult] = useState('');
  function onNewScanResult (rs){
    setresult(rs)
  }
  return (
    <div className="App">
      {result}
      <Scan      fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
                aspectRatio={1}/>
    
    </div>
  );
}

export default App;
