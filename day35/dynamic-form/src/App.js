import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {

    // items.push({ name: 'abc', price: 98, qty: 20 })
    // items.push({ name: 'abc', price: 98, qty: 20 })
    // items.push({ name: 'abc', price: 98, qty: 20 })

    const arr = [
      { name: 'abc', price: 98, qty: 20 },
    ]
    setItems(arr)

  }, [])

  const onAddClick = () => {
    setItems(prv => [...prv, { name: 'abc', price: 98, qty: 20 }])
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    console.log(items)
  }

  const onItemPriceChanged = (price, ind) => {
    items[ind].price = Number.parseInt(price)
  }

  const formItem = items.map((item, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td><input type='text' placeholder='Name' onChange={e => item.name = e.target.value} /></td>
        <td><input type='number' placeholder='Price' onChange={e => onItemPriceChanged(e.target.value, index)} /></td>
        <td><input type='number' placeholder='Quantity' onChange={e => item.qty = Number.parseInt(e.target.value)} /></td>
        <td> <Button variant="primary" onClick={onAddClick} >Add</Button></td>
      </tr>
    )
  })

  return (
    <div className='container'>
      <div className='row'>
        <form onSubmit={onFormSubmit}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {formItem}
            </tbody>
          </Table>
          <div className='row'>
            <div className='col'>
              <input type='submit' value='Save' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
