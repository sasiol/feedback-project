import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
const Statistic = (props) => (
 
  <p> {props.t}  {props.state}</p>
  
)
const Statistics = (props) => (
  <div>
  <h1> Statistiikka </h1>
  <div>
  <Statistic t={"Hyvä"} state={props.state.hyva} />
  <Statistic t={"Neutraali"} state={props.state.neut} />
  <Statistic t={"Huono"} state={props.state.huono} />
  <Statistic t={"Keskiarvo"} state={props.state.keskiarvo / props.state.counter} />
   <Statistic t={"Positiivisia"} state={`${((props.state.positiivisia / props.state.counter)*100)}%`  }  /> 
  </div>
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      hyva:0, 
      neut:0,
      huono:0,
      keskiarvo:0,
      positiivisia:0
     
    }
    
  }
  
  klikHyva = () => {
    this.setState({
      counter: this.state.counter + 1,
      hyva: this.state.hyva + 1,
      keskiarvo: this.state.keskiarvo +1,
      positiivisia: this.state.positiivisia +1
    })
  }

  klikNeutral = () => {
    this.setState({
      counter: this.state.counter + 1,
      neut: this.state.neut + 1
    })
  }
  klikHuono = () => {
    this.setState({
      counter: this.state.counter + 1,
      huono: this.state.huono + 1,
      keskiarvo: this.state.keskiarvo -1
    })
  }



  

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>

        <div>
        <Button
          handleClick={this.klikHyva}
          text="hyvä"
        />
           <Button
          handleClick={this.klikNeutral}
          text="neutraali"
        />
         <Button
          handleClick={this.klikHuono}
          text="huono"
        />
          
        </div>
        <Statistics state={this.state}/>
      </div>
    )
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
