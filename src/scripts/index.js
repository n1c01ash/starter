import utils from './utils/util';
import Greeting from './class/Greeting';

const title = new Greeting( 'Hello World' );
document.querySelector( '.starter__title' ).innerHTML = title.greet();

const subtitle = document.createElement( 'h2' );
subtitle.innerHTML = new Greeting( 'Welcome!' ).printNumbers();
document.querySelector( '.starter' ).appendChild( subtitle );

const paragraph = document.createElement( 'p' );
paragraph
	.innerHTML = utils();

document.querySelector( '.starter' ).appendChild( paragraph );
