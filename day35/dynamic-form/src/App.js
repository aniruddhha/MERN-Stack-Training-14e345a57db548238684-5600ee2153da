import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {

    items.push({ name: 'abc', price: 98, qty: 20 })
    items.push({ name: 'abc', price: 98, qty: 20 })
    items.push({ name: 'abc', price: 98, qty: 20 })

    const arr = [
      { name: 'abc', price: 98, qty: 20 },
      { name: 'abc', price: 98, qty: 20 },
      { name: 'abc', price: 98, qty: 20 }
    ]
    setItems(arr)

  }, [])

  const formItem = items.map(item => {
    return (
      <>
        <tr key={}>
          <td>1</td>
          <td><input type='text' /></td>
          <td><input type='number' /></td>
          <td><input type='number' /></td>
          <td> <Button variant="primary">Add</Button></td>
        </tr>
      </>
    )
  })

  return (
    <div className='container'>
      <div className='row'>
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
      </div>
      <div className='row'>
        <div className='col'>
          <input type='submit' value='Save' />
        </div>
      </div>
    </div>
  );
}

export default App;
