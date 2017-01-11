import { default as myProjectName } from 'hello';

/*-----------------*/

//base.js
import a from module.js
console.log(a); //undefined -- important to set default

//module.js
export {a};



export {projectId as default, projectName}; // there will be a value for default then
import * as alias from 'hello'; //everything

/*-----------------*/

import sean from 'sean';
sean = 99;
sean.a = 00;
console.log(sean); // Runtime error : read-only  -- we cannot change the import
console.log(sean.a); // mutable

/*-----------------*/

import {x, y} from 'x';
x.a = 8000;
y(); //8000
console.log(x.a); //8000
//module.js
export let x =  {a : 99}
export function showProject() {
    console.log(x.a);
}