import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MyApp, Dapp, App } from './bascis'
import { MobileButton } from './event-basics'

function ColorPresenter(props) {

  const { red, green, blue } = props

  return (
    <div style={{ width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }}>

    </div>
  )
}

function ColorBar(props) {
  const { st, ed, label } = props
  return (
    <div>
      <label htmlFor="rd">{label}</label>
      <input type="range" min={st} max={ed} id="rd" onChange={props.onColorChanged} />
    </div>
  )
}

function ColorChooser(props) {

  const { st, ed } = props
  return (
    <div>
      <ColorBar st={st} ed={ed} label="Ded" onColorChanged={props.onRedChanged} />
      <ColorBar st={st} ed={ed} label="Green" onColorChanged={props.onGreenChanged} />
      <ColorBar st={st} ed={ed} label="Blue" onColorChanged={props.onBlueChanged} />
    </div>
  )
}

function ColorApp(props) {

  const { st, ed } = props.ranges
  let { red, green, blue } = props.defCols

  const [rd, setRd] = useState(red)
  const [gr, setGr] = useState(green)
  const [bl, setBl] = useState(blue)

  function onRedChanged(e) {
    setRd(e.target.value)
  }

  function onGreenChanged(e) {
    setGr(e.target.value)
  }

  function onBlueChanged(e) {
    setBl(e.target.value)
  }

  return (
    <div>
      <ColorPresenter red={rd} green={gr} blue={bl} />
      <ColorChooser
        st={st}
        ed={ed}
        onRedChanged={onRedChanged}
        onGreenChanged={onGreenChanged}
        onBlueChanged={onBlueChanged} />
    </div>
  )
}

ReactDOM.render(
  <ColorApp
    ranges={{ st: 0, ed: 255 }}
    defCols={{ red: 41, green: 120, blue: 10 }}
  />,
  document.getElementById('root')
)


// ReactDOM.render(
//   <MobileButton />,
//   document.getElementById('root')
// )

