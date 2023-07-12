import logo from './logo.svg';
import './App.css';
import input from "./input.json";
import { createElement } from 'react';

function App() {
  console.log(input[0].children);
  const data = input[0]['children'];
  
  return (
    
<>
    {/* <ul>    
          {input[0].children.map((child) =>  <li> {JSON.stringify(child)} </li>)}
    </ul> */}
    <h1>
      {"Service Agreement"}
    </h1>
    <p>
      <text>This Service Agreement (the </text>
      <text><b>"Agreement"</b></text>
      <text>) is dated </text>
      <text style={{background: 'rgb(20, 170, 245)', color:'rgb(255,255,255)'}}>November 17, 2021</text>
      <text>.</text>
    </p>
    <block>
      <p>
        <text><b>PARTIES</b></text>
        <text><br />{" 1. "}</text><text style={{background: 'rgb(175, 56, 235)', color:'rgb(255,255,255)'}}>BlackMoon</text><text>(<b>"Provider"</b>)</text>
        <text><br />{" 2. "}</text><text style={{background: 'rgb(175, 184, 59)', color:'rgb(255,255,255)'}}>James Inc.</text><text>(<b>"Client"</b>)</text>
        <text><br />Each being a <b>"party"</b> and together being <b>"parties"</b></text>
      </p>  
    </block>
    <ol>
      <li>
        <b><u>Key Details.</u></b>
      </li>
      <li>
        <b><u>Definations.</u></b> Unless the context requires otherwise, in this Agreement, the following terms shall have the meanings specified:
        <ul><li><b>Business Day </b>means a day (other than a Saturday, Sunday or public holiday) on which registered banks are open for business in <text style={{background: 'rgb(250, 208, 0)', color:'rgb(255,255,255)'}}>Auckland</text></li></ul>
        <ul><li><b>Charges </b>means the Provider’s charges for Services as may be varied from time to time.</li></ul>
      </li>
      <p>
        <li>
          <h4>Agreement to Provide Services</h4>
          The Provider shall:<br />
          <ul>
            <li>
              promptly commence and carry out the Services in a timely, competent, and efficient manner:
            </li>
            <li>
              supply all equipment, materials and other resources which are necessary to ensure the Services are performed efficiently;
            </li>
            <li>
              work co-operatively with the Client and the Client's employees, agents, and other contractors;
            </li>
          </ul>
        </li>
      </p>
      
    </ol>

</>
  );
}

export default App;
