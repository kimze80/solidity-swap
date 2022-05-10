import React from 'react'

const Form = () => {
  return (
    <div>
      <div>
        <label htmlFor="swap">Swap</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="wallet">Wallet</label>
        <input type="text" />
      </div>
      <button>Confirm</button>
    </div>
  )
}

export default Form
