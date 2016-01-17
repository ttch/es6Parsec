import parsec from 'parsec'
import * as model from 'model'


export default class atom{
    constructor(){
    }

    eq(x){
        var fun = function(state){
            if (state.next() === x) {
                return x;
            }else {
                var err = Error("expecting a value equal" + x);
                err.pos = state.pos() - 1;
                throw err;
            }
        }
        new parsec(fun);
        return fun;
    }
    ne(x){
        var fun = function(state){
            if (state.next() === x) {
                return x;
            }else {
                var err = Error("expecting a value not equal" + x);
                err.pos = state.pos() - 1;
                throw err;
            }
        }
        new parsec(fun);
        return fun;
    }
    one(){
        var fun = function(state){
            var result = state.next();
            if (result instanceof Error){
                throw null;
            }else {
                //console.log(model);
                return result;
            }
        }
        new parsec(fun);
        return fun;
    }

    oneOf(){
        var states = arguments;
        var fun = function(state){
            var data = state.next();
            for(var index in states){
                if (states[index] === data) {
                    return data;
                }
            }
            var err = Error('expect one of' + states);
            err.pos = state.pos();
            throw err;
        };
        new parsec(fun);
        return fun;
    }

    noneOf(){
        var states = arguments;
        var fun = function(state){
            var data = state.next();
            for(var index in states){
                if (states[index] === data) {
                    var err = Error('expect none of ' + states);
                    err.pos = state.pos;
                    throw err;
                }
            }
            return data;
        };
        new parsec(fun);
        return fun; 
    }
    pack(element){
        var fun = function() {
            return element;
        };
        new parsec(fun);
        return fun;
    }
    fail(description){
        var fun = function(state){
            var err = Error(description);
            err.pos = state.pos() - 1;
            throw err;
        }
        new parsec(fun);
        return fun;
    }
}

