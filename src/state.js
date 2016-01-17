
export default class states{
    constructor (st){
        this.st = st;
        this._position = 0;
        this._tran = -1;
    }

    next(){
        var item;
        if (this._position >= 0 && this._position < this.st.length) {
            item = this.st[this._position];
            this._position++;
        }else {
            item = null;
        }

        return item; 
    }

    pos(){
        return this._position;
    }
    
    nextBy (pred) {
        if (this._position >= 0 && this._position < this.st.length) {
            var item = this.st[this._position];
            if (pred(item)) {
                return item;
            } else{
                throw new Error("predicate failed");
            }
        } else {
            return -1;
        }
    };

    seekTo (to) {
        if (to >= 0 && to < this.st.length) {
            this._position = to;
            return true;
        } else {
            return false;
        }
    };

}
/*
module.exports = function(states){
    if(states == null){
        return null;
    }
    var position = 0;
    var tran = -1;
    // this.states = states;
    // this.position = 0;
    this.next =  function() {
        var item;
        if (position >= 0 && position < states.length) {
            item = states[position];
            position++;
        }else {
            item = null;
        }
        return item;
    };
    this.pos = function() {
        return position;
    };
    this.nextBy = function(pred) {
        if (position >= 0 && position < states.length) {
            var item = states[position];
            if (pred(item)) {
                return item;
            } else{
                throw new Error("predicate failed");
            }
        } else {
            return -1;
        }
    };
    this.seekTo = function(to) {
        if (to >= 0 && to < states.length) {
            position = to;
            return true;
        } else {
            return false;
        }
    };

    this.begin = function() {
     var theindex = position
     if (tran == -1){
                tran =position
            }
            return theindex;
        };

    this.commit = function(tranNumber) {
        if (tran == tranNumber) {
            tran = -1
        }
    };
    this.rollBack = function(tranNumber){
        position = tranNumber
        if (tran == tranNumber) {
            tran =-1
        }
    };

}
*/
