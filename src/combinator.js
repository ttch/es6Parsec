
import parsec from 'parsec'
import * as atom from 'atom'


    export var attempt = (p)=>{
        var fun = (state)=>{
            var result;
            var index = state.pos();
            var tran = state.begin();
            try{
                result = p(state);
            } catch (err){
                state.rollBack(tran);
                throw err
            }
            state.commit(tran);
            return result;
        };
        new parsec(fun);
        return fun;
    }

    export var between = (open, close, p)=>{
        var fun = (state)=>{
            open(state);
            var result = p(state);
            close(state);
            return result;
        };
        new parsec(fun);
        return fun;
    }


    export var either = (x,y)=>{
        var fun = (state) =>{
            // this.or = xxxxx 这样写外面就拿不到 or 这个属性?
            var result1;
            try{
                result1 = x(state);
            }catch(err){
                var result2 = y(state);
                return result2;
            }
            return result1;
        };
        fun.or = (z)=>{
            return either(either(x,y),z);
        };
        new parsec(fun);
        return fun;
    }
    export var otherwise=(p,description)=>{
        var fun = function(state){
            var ei = either(p,atom.fail(description));
            return ei(state);
        };
        new parsec(fun);
        return fun;
    }


    export var many = (p) =>{

        var fun = (state) =>{
            var arr = new Array();

            try{
                while (true) {
                    arr.push(p(state));
                }
            }catch (err){
                return arr;
            }
        }
        new parsec(fun);
        return fun;
    }


    export var many1 = (p) => {

        var fun = (state) =>{
            var arr = new Array();
            arr.push(p(state));
            try{
                while (true) {
                    arr.push(p(state));
                }
            }catch (err){
                return arr;
            }
        }
        new parsec(fun);
        return fun;
    }


    export var skip1 = (p) => {
        var fun = (state)=>{
            p(state);
            
            while(true)
            {
                try{
                    if ( attempt(p)(state) === null ){
                        return null;
                    }
                }catch(e){
                    return null;
                }
            }
        };
        new parsec(fun);
        return fun;
    };

    export var skip = (p) =>{
        var fun =(state)=>{
            while(true)
            {
                try{
                    if ( attempt(p)(state) === null ){
                        return null;
                    }
                }catch(e){
                    return null;
                }
            }
        };
        new parsec(fun);
        return fun;
    };

    export var choice = (...ps)=>{
        var parsers = arguments;
        var fun = function(state){
            var result = null;
            for(var p of ps){
                try{
                    result = p(state);
                    break;
                }catch(err){
                    continue;
                }
            }
            if (result == null) {
                var err = Error('');
                err.pos = state.pos();
                throw err;
            }
            return result;
        };
        new parsec(fun);
        return fun;
    };

    export var sep =(p, s)=> {
        var fun = function(state){
            var re = new Array();
            try{
                re.push(p(state));
                while(true){
                    s(state);
                    re.push(p(state));
                }
            }catch(err){
                return re;
            }

            return re;
        };
        new parsec(fun);
        return fun;
    };


    export var sep1 = (p, s) =>{
        var fun = function(state){
            var re = new Array();

            re.push(p(state));
            while(true){
                try{
                    s(state);
                    re.push(p(state));
                }catch(err){
                    return re;
                }
            }

            return re;
        };
        new parsec(fun);
        return fun;
    };
