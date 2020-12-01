import ActiveSounds from "./ActiveSounds";

class Scheduler {
  static stopped = true;
  static tempo = 125;
  static scheduler = null;
  static columnNum = 1;

  static pulse = () => {
    if (!this.stopped) {
      ActiveSounds.playActiveSoundColumn(this.columnNum);

      this.columnNum++;
      if (this.columnNum > 16) {
        this.columnNum = 1;
      }

      this.run();
    }
  };

  static run = () => {
    this.scheduler = setTimeout(this.pulse, this.tempo);
  };

  static start = () => {
    this.stopped = false;
    this.run();
  };

  static stop = () => {
    this.stopped = true;
    this.columnNum = 1;
  };
}

export default Scheduler;
