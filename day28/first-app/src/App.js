import logo from './logo.svg';
import './App.css';
import DataApp from './DataApp';
import IotApp from './IotApp'

function App() {

  function btClk() {
    console.log('Secondary Clicked')
  }

  function checkClick() {

  }

  return (
    <div className="container">
      <div className="row">
        <IotApp></IotApp>
      </div>
      <div className="row">
        <DataApp></DataApp>
      </div>
      <div className="row mt-3">
        <div className="col-2 border">
          <input type="button" className="btn btn-primary" value="one" onClick={() => console.log('Primary Clicked')} />
        </div>
        <div className="col-8 border">
          <input type="button" className="btn btn-primary" value="two" onClick={btClk} />
        </div>
        <div className="col-2 border">
          <input type="button" className="btn btn-primary" value="three" />
        </div>
      </div>
    </div>
  );
}

export default App;
