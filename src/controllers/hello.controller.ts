// Uncomment these imports to begin using these cool features!

import {get} from '@loopback/rest';

// import {inject} from '@loopback/core';

// “Hello World” controller
export class HelloController {
  constructor() { }

  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }
}
