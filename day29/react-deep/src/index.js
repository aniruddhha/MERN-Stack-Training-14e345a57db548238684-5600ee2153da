import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MyApp, Dapp, App } from './bascis'

function ColorPresenter(props) {
  console.log(`Color Presenter Props`)
  console.log(props)

  // const red = props.red
  // const green = props.green
  // const blue = props.blue

  const { red, green, blue } = props

  return (
    <div style={{ width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})` }}>

    </div>
  )
}

function ColorChooser(props) {
  console.log(`Color Chooser Props`)
  console.log(props)
  const { st, ed } = props
  return (
    <div>
      <div>
        <label htmlFor="rd">Red</label>
        <input type="range" min={st} max={ed} id="rd" />
      </div>
      <div>
        <label htmlFor="gr">Green</label>
        <input type="range" min={st} max={ed} id="gr" />
      </div>
      <div>
        <label htmlFor="bl">Blue</label>
        <input type="range" min={st} max={ed} id="bl" />
      </div>
    </div>
  )
}

function ColorApp(props) {
  console.log(`Color App Props`)
  console.log(props)

  const { st, ed } = props.ranges
  const { red, green, blue } = props.defCols

  return (
    <div>
      <ColorPresenter red={red} green={green} blue={blue} />
      <ColorChooser st={st} ed={ed} />
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

