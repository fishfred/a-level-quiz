let html = String.raw;
/**
 * Represents a scene which is displayed in the client
 */
class Scene {
    /**
     * Creates an empty scene 
     */
    constructor() {
        this.currentHtml = "";
    }

    /**
     * Runs before the scene is rendered.
     * Set up any global variables
     * @param {Object} data The data which is passed to the object
     */
    preRender(data) {
        if (timeoutsToClear.length > 0) {
            timeoutsToClear.forEach(function (interval) {
                clearInterval(interval);
            })
        }
        
    }

    /**
     * Runs when the scene enters
     * Put any animations here
     * @returns {Promise} Promise which resolves once the scene has entered
     */
    onEnter() {
        return new Promise(function(res){
            // console.log("foo");
            // $("#scene").addClass("slide-in-elliptic-top-fwd");
            // setTimeout(()=>{
            //     $("#scene").removeClass("slide-in-elliptic-top-fwd");
            //     res()
            // }, 1000)
            res()
        })
    }

    /**
     * Generates HTML based on the data given
     * @param {Object} data Any data which needs to be displayed in html
     */
    generateHtml(data) {
        this.currentHtml = "<h1>Test</h1>"
        return this.currentHtml;
    }

    redraw(data){
        return false;
    }

    /**
     * Runs when the scene leaves
     * Put any animations here
     * @returns {Promise} Promise which resolves once the scene has left
     */
    onLeave(){
        if (intervalsToClear.length > 0) {
            intervalsToClear.forEach(function (interval) {
                clearInterval(interval);
            })
        }
        return new Promise(function(res) {
            // $("#scene").addClass("slide-out-elliptic-top-bck");
            // setTimeout(()=>{
            //     $("#scene").removeClass("slide-out-elliptic-top-bck");
            //     res()
            // }, 1000)
            res();
        });
    }

    /**
     * Runs once the scene has rendered
     * @param {Object} data Any additional data the object needs
     */
    postRender(data) {

    }
}

class SceneRenderer {
    constructor(renderId) {
        this.renderId = renderId;
    }

    render(scene, data) {
        new Scene.getSceneById(scene).render(this.renderId, data);
    }
}
