import {Text} from './text.js';
import {ParticleGroup} from './particle-group.js';

const LINE_TOTAL = 25;

export class Visual {
  constructor() {
    this.text = new Text();

    this.texture = PIXI.Texture.from('particle.png');

    this.particleGroups = [];

    this.mouse = {
      x: 0,
      y: 0,
      radius: 10
    };

    document.addEventListener('pointermove',  this.onMove.bind(this), false);
  }

  show(stageWidth, stageHeight, stage) {
    if(this.Container) {
      stage.removeChild(this.Container);
    }

    this.pos = this.text.setText('_', 10, stageWidth, stageHeight);
    this.text.setDrawing(stageWidth, stageHeight);
    //this.text.setColor(this.particleGroups, stageWidth, stageHeight);

    this.container = new PIXI.ParticleContainer(
      this.pos.length * LINE_TOTAL,
      {
        vertices: false,
        position: true,
        rotation: false,
        scale: false,
        uvs: false,
        tint: true
      }
    );
    stage.addChild(this.container);

    this.particleGroups = [];
    const total = this.pos.length / 8 - 17;
    for(let i = 11; i < total; i++) {
      const item = new ParticleGroup(this.pos[i], i / total, this.texture, LINE_TOTAL);
      this.particleGroups.push(item);
    }

    this.particleGroups[4].particles[24].sprite.tint = 0x2e2f33;
    this.particleGroups[4].particles[23].sprite.tint = 0x2e2f33;
    this.particleGroups[4].particles[22].sprite.tint = 0x2e2f33;
    this.particleGroups[4].particles[21].sprite.tint = 0x2e2f33;
    this.particleGroups[4].particles[20].sprite.tint = 0x2e2f33;
    this.particleGroups[4].particles[19].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[18].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[17].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[16].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[15].sprite.tint = 0x2e2f33;

    this.particleGroups[4].particles[19].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[19].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[19].sprite.tint = 0x2e2f33;
    this.particleGroups[7].particles[19].sprite.tint = 0x2e2f33;
    this.particleGroups[8].particles[19].sprite.tint = 0x2e2f33;
    this.particleGroups[9].particles[19].sprite.tint = 0x2e2f33;
    this.particleGroups[10].particles[19].sprite.tint = 0x2e2f33;

    this.particleGroups[9].particles[20].sprite.tint = 0x2e2f33;
    this.particleGroups[8].particles[21].sprite.tint = 0x2e2f33;
    this.particleGroups[8].particles[22].sprite.tint = 0x2e2f33;
    this.particleGroups[7].particles[23].sprite.tint = 0x2e2f33;
    this.particleGroups[7].particles[24].sprite.tint = 0x2e2f33;

    this.particleGroups[5].particles[24].sprite.tint = 0xaaaaaa;
    this.particleGroups[5].particles[23].sprite.tint = 0xaaaaaa;
    this.particleGroups[5].particles[22].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[21].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[20].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[19].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[18].sprite.tint = 0x2e2f33;
    this.particleGroups[5].particles[17].sprite.tint = 0x2e2f33;

    this.particleGroups[6].particles[24].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[23].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[22].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[21].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[20].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[19].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[18].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[17].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[16].sprite.tint = 0x2e2f33;
    this.particleGroups[6].particles[15].sprite.tint = 0x2e2f33;

    this.particleGroups[7].particles[15].sprite.tint = 0x2e2f33;
    this.particleGroups[7].particles[20].sprite.tint = 0x2e2f33;

    for(let i = 0; i < 19; i++) {
    //  this.particleGroups[i].particles[7].sprite.tint = 0xd5d5d5;
    }

    for(let i = LINE_TOTAL - 1; i >= 0; i--) {
      this.addChild(i);
    }
  }

  addChild(index) {
    for(let i = 0; i < this.particleGroups.length; i++) {
      this.container.addChild(this.particleGroups[i].particles[index].sprite);
    }
  }

  animate() {
    for(let i = 0; i < this.particleGroups.length; i++) {
      const item = this.particleGroups[i];
      item.animate(this.mouse);
    }
  }

  onMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }
}
