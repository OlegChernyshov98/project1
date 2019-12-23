const EventEmitter = require('events'); // обязательная часть для работы эммитера

const emitter = new EventEmitter();

emitter.on('hello', () => {
  console.log('Hello, drug')
});

emitter.on('HAU', () => {
  console.log('How are you?')
});

emitter.on( 'WAUD', () => {
  console.log('What are you doing?')
});

emitter.emit('hello');

emitter.emit('HAU');
emitter.emit('WAUD');
