 
export default class parsec{
    constructor (parser){
        parser = {
            bind(handle){
                var item = function(state){
                    var val = parser(state);
                    var re =  handle(val,state);
                    return re;
                }
                new parsec(item);
                return item;
            },
            then(handle){
                var item = function(state){
                    parser(state);
                    return handle(state);
                };
                new parsec(item);
                return item;
            },
            over(tail){
                var item = function(state){
                    var val = parser(state);
                    tail(state);
                    return val;
                };
                new parsec(item);
                return item;
            }
        }
    }
}

/*

 export function parsec(parser){
        if (parser == null) {
            parser = new Object();
        };
        parser.bind = function(handle){
            var item = function(state){
                var val = parser(state);
                var re =  handle(val,state);
                return re;
            }
            parsec(item);
            return item;
        };
        parser.then = function(handle){
            var item = function(state){
                parser(state);
                return handle(state);
            };
            parsec(item);
            return item;
        };
        parser.over = function(tail){
            var item = function(state){
                var val = parser(state);
                tail(state);
                return val;
            };
            parsec(item);
            return item;
        };
        return parser;
    }
*/