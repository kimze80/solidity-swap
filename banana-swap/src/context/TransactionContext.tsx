import React, { useState, useEffect } from "react";

declare var window: any

export const TransactionContext = React.createContext({})

let eth

if (typeof window !== 'undefined') {
  eth = window.ethereum
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState()

  const connectWallet = async (metamask = eth) => {
    try {
      if (!metamask) return alert('Please install metamask')
      const accounts = await metamask.request({ method: 'eth_requestAccounts'})
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.error(error)
      throw new Error('No ethereum object')
    }
  }

  return (
    <TransactionContext.Provider value={{currentAccount, connectWallet}}>
      { children }
    </TransactionContext.Provider>
  )
}
