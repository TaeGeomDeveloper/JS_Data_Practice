import _ from 'lodash'; // From `node_modules`!
import getType from './getType'
import { random, user as taegeom } from './getrandom'

// import * as from './getRandom'; * 와일드 카드

console.log(_.camelCase('the hello world'))
console.log(getType([1, 2, 3]))
console.log(random(),random())

console.log(taegeom)

console.log('----------------------------------------------------')