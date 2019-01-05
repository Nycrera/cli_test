/* jshint node: true */
/*jshint esversion: 6 */

import * as fs from 'fs';
import * as child_process from 'child_process'; // Import child process spawner, This will spawn the program that will be tested
import * as path from 'path';
import {Command} from './command';

class App{
    public commands:Array<Command> = [];
    
    /**
     * @method Main
     * This method should be called when the applicaton is ready to start or initialize. (depends on the purpose)
     */
    public Main():void {
        if (process.argv.length < 3) {
            console.log("--------------CLI_TEST--------------\nSimple yet effective blackbox testing.\nUsage Example: cli_test test program.exe test.json\nFor more info cli_test help");
            process.exit(0);
        } 
        let command = process.argv[2];
        this.runCommand(command)
    }
    /**
     * @method fetchCommands
     * fetches commands from directory and imports them accordingly.
     */
    public fetchCommands():void{
        let commands:Array<string> = fs.readdirSync('./commands');
        let length:number = commands.length;
        for(let i:number=0;i<length;i++){
            if(commands[i].slice(-3) == ".js") import command from commands[i] // TODO: Shit idk how to implement this. All I found is a weird post on stackowerflow and a module named systemJS
                }
    }
    
    /**
     * @method runCommand
     * @param command Command to run
     */
    private runCommand(command:string):void{
        let length:number = this.commands.length;
        for(let i:number=0;i<length;i++){
           if (this.commands[i].expression == command) this.commands[i].run();             
        }
    }

}

let Application:App = new App();

import help from './commands/help';
Application.commands.push(help);
Application.Main();