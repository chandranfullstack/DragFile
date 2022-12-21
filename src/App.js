import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import DragFile from './dragFile';

function App() {
  return (
<>
  <div id='box'> 
    <div id='container'>
      <span id='first'>
        <DragFile/>
      </span>
      <span id='second'>-or-</span>
      <span id='three'>
      <label for="upload-file" >Browse</label>
        <input type="file" name="file" id="upload-file" />
      </span>
    </div>
  </div>
</>
);
}

export default App;
