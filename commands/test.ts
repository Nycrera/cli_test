import {Command} from '../command'; 

var testCommand:Command = new Command('test',()=>{
        
    class Tester{
     public filesToTest:Array<string>;
     public testFile:string;
     
     private loadTest(testFile):void{
            
    }

     public initalize():void{
         this.loadTest(this.testFile);
         
     }
     
    }


    process.exit(0);
});
export default testCommand;