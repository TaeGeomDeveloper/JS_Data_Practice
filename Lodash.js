import _ from 'lodash'

const usersA = [
  {userID : '1', name: 'Taegeom'},
  {userID : '2', name: 'Neo'}
]

const usersB = [
  {userID : '1', name: 'Taegeom'},
  {userID : '3', name: 'Amy'}
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)

// 하나의 특정한 배열에서 중복 제외 uniqBy 
console.log('uniqBy', _.uniqBy(usersC, 'name'))

// 여러개의 특정 배열을 합치면서 중복 제외 한다 unionBy
const usersD = _.unionBy(usersA,usersB, 'name')
console.log('unionBy', usersD)

console.log('--------------------------------------------------------')

const users = [
  { userId: '1', name: 'Taegeom'},
  { userId: '2', name: 'Amy'},
  { userId: '3', name: 'Neo'},
  { userId: '4', name: 'Evan'},
  { userId: '5', name: 'Lewis'}
]

// 배열에 데이터를 find 한다.
const foundUser = _.find(users, { name: 'Amy'})
const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUser)
console.log('userId :',foundUserIndex+1)

// 배열에서 제거 한다.
_.remove(users, {name: 'Taegeom'})
console.log(users)


console.log('--------------------------------------------------------')
