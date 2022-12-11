import { Player } from "../classes/Player";
import { PlayerAnimations, PlayerAnimationTitle } from '../data/playerAnimations';

import BackgroundImage from '../assets/img/bg.png';
import { Checkpoint } from '../classes/Checkpoint';
import { Background } from '../classes/Background';
import { Level } from "../classes/Level";
import { LevelName } from ".";
import { CollisionSystem } from "../classes/CollisionSystem";

export class Level1 extends Level {
  nextLevel = LevelName.Level1;

  reset = () => {
    this.resetElements();
    CollisionSystem.init({
      data: [],
      width: 0,
      height: 0,
    });

    this.background = new Background({
      sourceURI: BackgroundImage,
      position: {
        x: 0,
        y: -820,
      }
    });

    this.player = new Player({
      position: { x: 200, y: 250 },
      size: { x: 25, y: 25 },
      animations: PlayerAnimations,
      animationName: PlayerAnimationTitle.IdleRight,
    });

    this.door = new Checkpoint({
      position: { x: 12 * 64, y: 270 },
      onLevelPassed: this.onComplete,
    });
  };
}
