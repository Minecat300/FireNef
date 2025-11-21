import { Engine } from "./core/javascript/mainEngine.js";

const canvas = document.createElement('canvas');
const engine = new Engine(canvas);
document.body.appendChild(canvas);

engine.maxUPS = 60;
engine.renderer.setMaxFPS(144);
engine.renderer.setVsync(true);
engine.renderer.setResolution(1080, 1920);

engine.renderer.setup();
engine.start();

