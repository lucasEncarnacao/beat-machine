import { Howl } from "howler";

class AudioManager {
  static getWav = (soundName, number) => {
    const wavFileName = `${soundName}_${number}`;

    const wav = new Howl({
      src: [`./drum_sounds/${soundName}/${wavFileName}.wav`],
    });

    return wav;
  };
}

export default AudioManager;
