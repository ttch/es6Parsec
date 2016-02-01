
import * as atom from './atom';
import * as combinator from './combinator';
import states from './state';
import parsec from './parsec';
import * as model from './model';
import * as text from './text';



class jsparsec {

	constructor() {
		this._name = 'jsparsec';
		this._model = model;
		this._text = text;
	}
	get name() {
		return this._name;
	}

	parsec(p){
		return new parsec(p)
	}

	state(str){
		return new states(str);
	}

}

export var a = atom;

export var c = combinator;

export var t = text;

export var m = model;

export var p = jsparsec;