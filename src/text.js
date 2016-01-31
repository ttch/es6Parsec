import parsec from 'parsec'
import * as atom from 'atom'
import * as combinator from 'combinator'



var either = combinator.either;
var Try = combinator.Try;


export var space =()=>{
    var ei = atom.eq(' ');
    return ei;
};


export var charIn =(str)=>{
    var fun = (state)=>{
        var val = state.next();
        for(var index in str){
            if(str[index] === val){
                return val;
            }
        };
        var err = Error('not a char of ' + str);
        err.pos = state.pos() - 1;
        throw err;
    };
    new parsec(fun);
    return fun;
};



export var Text = (str)=>{
    var fun = (state)=>{
        var arr = new Array();

        for(var index in str){
            var val = state.next();
            arr.push(val);
            if (val != str[index] && index == 0) {
                var fail = fail('not match')
                fail(state);
            };
        }

        return arr.join('');
    };
    new parsec(fun);
    return fun;
};


export var newLine = ()=>{
    var fun = (state)=>{
        //参数顺序千万不要替换，以后改改看看咋合适
        var ei = either(Try(Text('\n\r')),Text('\n'));
        return ei(state);
    }
    new parsec(fun);
    return fun;
};

export var whiteSpace = ()=>{
    var eq = charIn(' \t');
    return eq;
};

export var charNone =(string)=>{
    var fun = (state)=>{
        var val = state.next();
        for(var c in string){
            if(c === val){
                var err = Error('is a char of ' + string);
                err.pos = state.pos();
                throw err;
            }
        }
        return val;
    }
    parsec(fun);
};


export var digit = () => {
    var fun = charIn('0123456789');
    return fun;
};

export var letter = ()=>{
    var fun = charIn('abcdefghijklmnopqrstuvwxyz');
    return fun;
};

export var alphaNumber = ()=>{
    var fun = either(Try(digit()),letter());
    return fun;
};


export var uInt = ()=>{
    var fun = (state)=>{
        var ma = combinator.many1(digit()).bind((arr,state)=>{
            var at = Try(atom.ne('.'));
            at(state);
            return arr;
        });
        var re;
        try{
            re = ma(state)
        }catch(err){
            console.log(err)
            console.log(atom.ne('.'))
            var err = Error('not a uInt');
            err.pos = state.pos() - 1;
            throw err;
        }
        return re.join('');
    };
    new parsec(fun);
    return fun;
};


function negtive(state) {
    var neg = combinator.Try(atom.eq('-'));
    var val;
    try{
        val = neg(state);
    }catch(err){
        return '';
    }
    return val;
}



export var Int = ()=>{
    var fun = (state)=>{
        var arr = new Array();
        arr.push(negtive(state));
        var ui = uInt();
        var re = arr.concat(ui(state));
        return re.join('');
    };
    new parsec(fun);
    return fun;
};

/*
export var uFloat = function(){
    var fun = function (state) {
        var integer = combinator.many(digit());
        var pot = eq('.');
        var deci = uInt();
        var arr = new Array();
        arr = arr.concat(integer(state));
        if(arr.length == 0)
            arr.push('0');
        arr.push(pot(state));
        arr = arr.concat(deci(state));
        return arr.join('');
    };
    new parsec(fun);
    return fun;
};


export var Float = function(){
    var fun = function(state){
        var arr = new Array();
        arr.push(negtive(state));
        var uf = uFloat();
        var re = arr.concat(uf(state));
        return re.join('');
    };
    new parsec(fun);
    return fun;
};
*/
