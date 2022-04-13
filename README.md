# JS_Data_Practice
자바스크립트 데이터 실습

## 1. import 가져오기, export 내보네기 
< _main.js_, _getType.js_, _getRandom.js_ 참조 >

- lodash import
  ```javascript
      import _ from 'lodash'; // From `node_modules`!
      import getType from './getType'
      import { random, user as taegeom } from './getrandom'
  ```
- getType
   ```javascript
    export default function getType(data) {
    return Object.prototype.toString.call(data).slice(8,0);
   }
   ```
- getRandom
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
