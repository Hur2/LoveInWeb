import {hslToHex} from './utils.js';


export class Particle {
  constructor(pos, groupRatio, indexRatio, texture) {
    this.sprite = new PIXI.Sprite(texture);
    const minScale = 0.2;
    const maxScale = 0.23;
    const scale = (maxScale - minScale) * indexRatio + minScale;
    this.sprite.scale.set(scale);

    const minLight = 60;
    const maxLight = 40;
    const light = (maxLight - minLight) * indexRatio + minLight;

    const minHue = 280;
    const maxHue = 330;
    const hue = (maxHue - minHue) * groupRatio + minHue;

    this.sprite.tint = '0xeeeeee';

    this.x = pos.x;
    this.y = pos.y+ 100;
    this.sprite.x = this.x;
    this.sprite.y = this.y;

    this.vx = 0;
    this.vy = 0;
  }

  animate(index, total) {
    if(index < total) {
      this.x += this.vx;
      this.y += this.vy;
    }
    this.sprite.x = this.x;
    this.sprite.y = this.y;
  }
}
