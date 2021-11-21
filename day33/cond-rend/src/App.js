import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import React from 'react';

import { ErrorComponent, SuccessComponent, ProgressComponent } from './parts-conditions'

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])


  if (isLoading) {
    return (
      <ProgressComponent />
    )
  }
  else if (isError) {
    return (
      <ErrorComponent />
    )
  }

  else return (
    <SuccessComponent />
  );
}

export default App;
