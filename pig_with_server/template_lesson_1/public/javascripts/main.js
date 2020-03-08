/**
 * Comment header block
 */

'use strict';

import EventHandler from './EventHandler.js';

export default class Main {

  constructor() {
    new EventHandler();
    console.log(`You hear the clatter of dice on tables...`);
  }
}

window.addEventListener('load', () => {
  new Main();
});
