import { Renderer } from "./mainRender.js";

export class Engine {
    constructor(canvas) {
        this.canvas = canvas;
        this.running = false;
        this.renderer = new Renderer(canvas);
        this.maxUPS = 60;
    }

    start() {
        this.running = true;
        this.renderer.running = true;
        this.renderer.startRenderLoop();
    }

    stop() {
        this.running = false;
        this.renderer.running = false;
        this.renderer.stopRenderLoop();
    }
}