/**
 * @class
 */
export class Command{
    public expression:string;
    private commandFunc:() => void;
    public run():void {
        this.commandFunc();
    }
    /**
     * @constructor
     * @param expression command string to call this function. 
     * @param commandFunc Function that will be called on a call.
     */

    constructor(expression:string,commandFunc:() => void){
    this.expression = expression;
    this.commandFunc = commandFunc;
    }

}