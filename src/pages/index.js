import React from "react"
import Input from '../components/input'
import {featureList} from '../components/data';

export default function Home() {
  console.log(featureList)
  return( 
    <div>
      <div>Hello world!</div>
      <Input items={featureList}/>
    </div>
  )
}