 
export default class parsec{
    constructor (parser){
        var parser = {
            bind(handle){
                var item = (state)=>{
                    var val = parser(state);
                    var re =  handle(val,state);
                    return re;
                }
                new parsec(item);
                return item;
            },
            then(handle){
                var item = (state)=>{
                    parser(state);
                    return handle(state);
                };
                new parsec(item);
                return item;
            },
            over(tail){
                var item = (state)=>{
                    var val = parser(state);
                    tail(state);
                    return val;
                };
                new parsec(item);
                return item;
            }
        }
        return parser;
    }
}