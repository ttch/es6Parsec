import parsec from 'parsec'
import * as model from 'model'


export default class atom{
    constructor(){
    }

    eq(x){
        const fun = (state)=>{
            if (state.next() === x) {
                return x;
            }else {
                var err = Error("expecting a value equal " + x);
                err.pos = state.pos() - 1;
                throw err;
            }
        }
        new parsec(fun);
        return fun;
    }
    ne(x){
        const fun = (state)=>{
            var data = state.next()
            if (data === x) {
                var err = Error('expecting a value not equal ' + x);
                err.pos = state.pos() - 1;
                throw err;
            }else{
                return data
            }
        }
        new parsec(fun);
        return fun;
    }
    one(){
        const fun = (state)=>{
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

    oneOf(...states){
        const fun = (state)=>{
            var data = state.next();
            if ( states.includes(data) ){
                return data;
            }
            var err = Error('expect one of' + states);
            err.pos = state.pos();
            throw err;
        };
        new parsec(fun);
        return fun;
    }

    noneOf(...states){
        const fun = (state)=>{
            var data = state.next();
            if ( states.includes(data) ){
                    var err = Error('expect none of ' + states);
                    err.pos = state.pos;
                    throw err;
            }
            return data;
        };
        new parsec(fun);
        return fun; 
    }
    pack(element){
        const fun = () =>{
            return element;
        };
        new parsec(fun);
        return fun;
    }
    fail(description){
        const fun = (state)=>{
            var err = Error(description);
            err.pos = state.pos() - 1;
            throw err;
        }
        new parsec(fun);
        return fun;
    }
}

