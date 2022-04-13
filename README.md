# JS_Data_Practice
자바스크립트 데이터 실습

## 1. import 가져오기, export 내보네기 
< _main.js_, _getType.js_, _getRandom.js_ 참조 >

- **Main Import**
  ```javascript
      import _ from 'lodash'; // From `node_modules`!
      import getType from './getType'
      import { random, user as taegeom } from './getrandom'
  ```
- **getType export**
   ```javascript
    export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8,0);
   }
   ```
- **getRandom export**
  ```jvascript
    export function random () {
    return Math.floor(Math.random() *10)
   } 
   export const user = {
    name: 'taegeom',
    age : 85
  }
  ```

## 2. lodash 사용법
< _Lodash.js_ 참조 >

- 하나의 특정 배열에서 중복 제외 **uniqBy**
  ```javascript
    console.log('uniqBy', _.uniqBy(usersC, 'name'))
  ```
- 여러개의 특정 배열을 합치면서 중복 제외 **unionBy**
  ```javascript
    const usersD = _.unionBy(usersA,usersB, 'name')
  ```

- 배열에서 데이터를 찾기 **find**, **findIndex**
  ```javascript
    const foundUser = _.find(users, { name: 'Amy'})
    const foundUserIndex = _.findIndex(users, {name: 'Amy'})
  ```
- 배열에서 제거 한다 **remove**
  ```javascript
    _.remove(users, {name: 'Taegeom'})
  ```

## 3. JSON (JavaScript Ovject Notation)
자바스크립트 객체 표기법
< _JSON.js_ 참조 >

- 문자화 **stringify**
  ```javascript
    const str = JSON.stringify(user)
  ```
- 정수화 **parse**
  ```javascript
    const obj = JSON.parse(str)
  ```

## 4. 저장소 Storage

- Local Storage
  ```javascript
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
  ```
