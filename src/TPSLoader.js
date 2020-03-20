import * as PIXI from "pixi.js";
import ResourceLoader from "./ResourceLoader";

export default new class TPSLoader {
    constructor() {
        PIXI.Loader.registerPlugin(ResourceLoader);
    }
}
