import * as Main from './module/main.js';
import getDate from './module/getDate.js';

const bookForm = document.forms[0];
const collections = document.querySelector('.collections');
const item = document.querySelectorAll('.nav-link');

Main.add(bookForm, collections);
Main.show(collections);
Main.singlePage(item);
getDate();