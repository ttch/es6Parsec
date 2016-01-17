
import * as atom from './atom';
import * as combinator from './combinator';
import states from './state';
import * as parsec from './parsec';
import * as model from './model';
import * as text from './text';


export default class jsparsec {

	constructor() {
		this._name = 'jsparsec';
		this._parsec = parsec;
		this._model = model;
		this._text = text;
		this._combinator = combinator;
		this._atom = atom;
	}
	get name() {
		return this._name;
	}

	parsec(){
		return this._parsec;
	}

	model(){
		return this._model;
	}

	text(){
		return this._text;
	}

	state(str){
		return new states(str);
	}

	combinator(){
		return this._combinator;
	}

	atom(){
		return this._atom;
	}

}