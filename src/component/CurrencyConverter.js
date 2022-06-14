import { useEffect, useState } from 'react';
import Axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import '../css/currencyConverter.css';

  
function CurrencyConverter() {
  
  const [info, setInfo] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  const [convertfrom, setConvertFrom] = useState("usd");
  const [convertto, setConvertTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState(0);
  
  // Calling the api 
  useEffect(() => {
    Axios.get(
`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${convertfrom}.json`)
   .then((res) => {
      setInfo(res.data[convertfrom]);
    })
  }, [convertfrom]);
  
  // Calling the convert function whenever user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info])
    
  // Function to convert the currency
  function convert() {
    var rate = info[convertto];
    setResult(inputValue * rate);
  }
  
  // Function to switch between two currency
  function chaneCurrency() {
    var temp = convertfrom;
    setConvertFrom(convertto);
    setConvertTo(temp);
  }
  
  return (
    <div className="currencyPanel">
      <div className="heading">
        <h1>Currency converter</h1>
      </div>
      <div className="container">
        <div>
          <h3>Amount</h3>
          <input type="text" 
             placeholder="Enter the amount" 
             onChange={(e) => setInputValue(e.target.value)} />
        </div>
        <div>
          <h3>From</h3>
          <Dropdown options={options} 
                    onChange={(e) => { setConvertFrom(e.value) }}
          value={convertfrom} placeholder="From" />
        </div>
        <div className="switch">
          <HiSwitchHorizontal size="30px" 
                        onClick={() => { chaneCurrency()}}/>
        </div>
        <div>
          <h3>To</h3>
          <Dropdown options={options} 
                    onChange={(e) => {setConvertTo(e.value)}} 
          value={convertto} placeholder="To" />
        </div>
        <div className="result">
        <button onClick={()=>{convert()}}>Convert</button>
        <h2>Converted Amount:</h2>
        <p>{inputValue+" "+convertfrom+" = "+result.toFixed(2) + " " + convertto}</p>
  
      </div>
      </div>
    </div>
  );
}
  
export default CurrencyConverter;