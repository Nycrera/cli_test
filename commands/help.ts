import {Command} from '../command'; 

/**
 * @constructs
 */
var helpCommand:Command = new Command('help',()=>{
    console.log("--------------CLI_TEST--------------\ncli_test is a program where you can black box test your command line programs using your custom tests.\nYou will need a test configuration file.\nYou can generate this using our tool or you can just go for it!\n\nCreated with <3 by Nycrera");
    process.exit(0);
});
export default helpCommand;