import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customer = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '910922',
  'gender':'남자',
  'job':'대학생'
},
{ 
'id':2,
'image':'https://placeimg.com/64/64/2',
'name': '양준혁',
'birthday': '910922',
'gender':'남자',
'job':'대학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name': '김광희',
  'birthday': '910922',
  'gender':'남자',
  'job':'대학생'
}
]


function App() {
  return (
    <div>
      {
        customer.map( c => {
          return (
            <Customer
            id ={c.id}
            img = {c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
          )
        })
      }
    </div>
    
  );
}

export default App;
