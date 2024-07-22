import { useState } from 'react'
import './App.css'
import Card from './components/card'
import data from '../src/assets/data.json'

function App() {

  return (
    <>
      <div className="conta">
        <div className="box">
        {
          data.length && data.map(function(user, index){
            return (
              <Card key={index} user = {user}></Card>
            )
          })
        }
      
        </div>
      </div>
    </>
  )
}

export default App
