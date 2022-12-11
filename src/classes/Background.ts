import { Sprite, SpriteParams } from "./Sprite";
import { Vector2 } from "./Vector2";

type BackgroundParams = Omit<SpriteParams, 'position'> & {
  position?: Vector2;
}

const DEFAULT_POSITION: Vector2 = {
  x: 0,
  y: 0,
};

export class Background extends Sprite {
  constructor({ position = DEFAULT_POSITION, ...params }: BackgroundParams) {
    super({
      position,
      ...params
    });
  }
}
