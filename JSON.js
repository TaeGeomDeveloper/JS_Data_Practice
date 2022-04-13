
//import _ from 'lodash'; // From `node_modules`!
// JSON (javaScript Object Notation)
// 자바 스크립트의 객체 표기법

import myData from './myData.json';
console.log(myData)

console.log('--------------------------------------------------------')

const user = {

  name: 'TaeGeom',
  age: 85,
  emails: [
    'taegeom@gamil.com',
    'alf6292@naver.com'
  ]
}

console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)
console.log(typeof obj)

console.log('--------------------------------------------------------')


// 저장소 Storages 

// Local Storage / setItem
localStorage.setItem('user', JSON.stringify(user))

//console.log(localStorage.getItem('user'))
console.log(JSON.parse(localStorage.getItem('user')))

const str2 = localStorage.getItem('user')
const obj2 = JSON.parse(str2)

obj2.age = 2
console.log(obj2)
localStorage.setItem('user', JSON.stringify(obj2))

// Local Storage / removeItem
//localStorage.removeItem('user')


