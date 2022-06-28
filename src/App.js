import { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './Components/CurrencyRow/CurrencyRow';

//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}
const BASE_URL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

const numRegex = /[0-9]+/;

function App() {

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [ inputVal, setInputVal ] = useState('');

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions(Object.keys(data))
      console.log(currencyOptions);
    })
    .catch(err => console.error('Error from fetch: ' + err))
  },[])

  //first input is "from", second is "to"
  const handleChange = e => {
    //make sure it only accepts numbers
    setInputVal(e.target.value);

  }

  //handleSelection()


  return (
    <div className="App">
      <h1>Convert</h1>
  
      <CurrencyRow currencies={currencyOptions} defaultCurrency='usd' inputValue={inputVal} onChange={e => handleChange(e)} />
      <div className='equals'>=</div>
      <CurrencyRow currencies={currencyOptions} defaultCurrency='eur' inputValue={inputVal} onChange={e => handleChange(e)} />
    </div>
  );
}

export default App;
