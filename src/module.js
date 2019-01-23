"use strict";
/**
 * Contains all helper functions for modules
 * @module src/module
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This class Represents a server module
 */
class Module {
    /**
     * Registers the module's name for easy logging
     * @param {string} name The name of the module
     */
    constructor(name) {
        if (!name) {
            console.error("Missing 'name' property of module");
        }
        this.name = name;
        this.log("Starting...");
    }
    /**
     * Logs a message to the console so it's easy to categorise
     * @param {string} message The message to show in console
     */
    log(message) {
        console.log(`[${this.name}] ${message}`);
    }
}
exports.Module = Module;
//# sourceMappingURL=module.js.map