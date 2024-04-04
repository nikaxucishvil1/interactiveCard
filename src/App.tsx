import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'

function App() {
  const [frontNums, setFrontNums] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JANE APPLESEED");
  const [date, setDate] = useState("00/00");
  const [cvc, setCvc] = useState("000");
  


  return (
    <>
      <footer>
        <Cards frontNums={frontNums} name={name} date={date} cvcNum={cvc} />
      </footer>
    </>
  )
}

export default App
