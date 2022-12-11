import { ILevel, LevelParams } from "../interfaces/ILevel";
import { Level1 } from "./Level1";

export type LevelsDictionary = { 
  [x: string]: new (levelParams: LevelParams) => ILevel
};

export const enum LevelName {
  Level1 = 'level1',
}

export const Levels: LevelsDictionary = {
  [LevelName.Level1]: Level1,
};
