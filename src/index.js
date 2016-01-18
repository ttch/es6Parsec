
import atom from './atom';
import * as combinator from './combinator';
import states from './state';
import parsec from './parsec';
import * as model from './model';
import * as text from './text';


export default class jsparsec {

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

	model(){
		return this._model;
	}

	text(){
		return text;
	}

	state(str){
		return new states(str);
	}

	combinator(){
		return combinator;
	}

	atom(){
		return new atom();
	}

}