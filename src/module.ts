/**
 * Contains all helper functions for modules
 * @module src/module
 */

/**
 * This class Represents a server module
 */
export class Module {
    name: string
    /**
     * Registers the module's name for easy logging
     * @param {string} name The name of the module
     */
    constructor(name: string){
        if(!name){
            console.error("Missing 'name' property of module");
        }
        this.name = name;
        
        this.log("Starting...")
    }

    /**
     * Logs a message to the console so it's easy to categorise
     * @param {string} message The message to show in console
     */
    log(message: string){
        console.log(`[${this.name}] ${message}`)
    }
}
