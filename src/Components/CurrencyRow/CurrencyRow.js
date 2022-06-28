import React from 'react'
import './CurrencyRow.css';
import { v4 as uuidv4 } from 'uuid';

export default function CurrencyRow({currencies, defaultCurrency, inputValue, onChange}) {

  return (
    <div>
        <input type='number' className='input' value={inputValue} onChange={onChange} />
            <select onClick={e=>console.log(e)} /*defaultValue={currencies[currencies.indexOf(defaultCurrency)]}*/>
                {currencies.map(currency => {
                    return(<option key={uuidv4()} value={currency.toUpperCase()} selected={currency === defaultCurrency ? true : false} >{currency.toUpperCase()}</option>)
                })}
            </select>
    </div>
  )
}
