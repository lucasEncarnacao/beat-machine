import AudioManager from "./AudioManager";

class ActiveSounds {
  static activeSounds = [];

  static setUpActiveSounds = (soundNames, quarterBeats) => {
    let soundColumn = soundNames.map((soundName) => {
      return {
        soundName: soundName,
        soundFile: AudioManager.getWav(soundName, 1),
        isActive: false,
      };
    });

    this.activeSounds = quarterBeats.map((i) => {
      return soundColumn.map((ele) => ({ ...ele })); //clone soundColumn
    });
  };

  static setActiveSound = (column, soundName, isActive) => {
    this.activeSounds[column - 1].find(
      (soundObj) => soundObj.soundName === soundName
    ).isActive = isActive;
  };

  static playActiveSoundColumn = (column) => {
    const activeColumnSounds = this.getActiveSoundsFromColumn(column);

    activeColumnSounds.forEach((soundObj) => {
      soundObj.soundFile.play();
    });
  };

  static getActiveSoundsFromColumn = (column) => {
    return this.activeSounds[column - 1]?.filter(
      (soundObj) => soundObj.isActive
    );
  };
}

export default ActiveSounds;
