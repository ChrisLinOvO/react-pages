import React ,{useState}from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}
function App() {
  const [people,setPeople]=useState<IState["people"]>([
    {
      name:"LBJ",
      age:36,
      img:"https://p.kindpng.com/picc/s/110-1109845_lebron-james-lakers-flex-hd-png-download.png",
      note:"HI 23"
    },
    {
      name:"KOBE",
      age:40,
      img:"https://www.pngitem.com/pimgs/m/1-14685_kobe-png-transparent-png.png",
      note:"HI 24"
    }
  ])

  
  return (
    <div className="App">
     <h1>All Start Party</h1>
     <List people={people}/>
     <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
