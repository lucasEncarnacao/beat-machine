import ActiveSounds from "./ActiveSounds";

class Scheduler {
  static stopped = true;
  static tempo = 120; //bpm
  static scheduler = null;
  static columnNum = 1;
  static ping = null;

  static pulse = () => {
    if (!this.stopped) {
      ActiveSounds.playActiveSoundColumn(this.columnNum);

      this.ping(this.columnNum);

      this.columnNum++;
      if (this.columnNum > 16) {
        this.columnNum = 1;
      }

      this.run();
    }
  };

  static run = () => {
    if (this.tempo < 40) this.tempo = 40;
    if (this.tempo > 220) this.tempo = 220;

    let waitTime = ((1 / this.tempo) * 60 * 1000) / 4; //sec per quarterbeat
    this.scheduler = setTimeout(this.pulse, waitTime);
  };

  static start = () => {
    this.stopped = false;
    this.run();
  };

  static stop = () => {
    this.stopped = true;
    this.columnNum = 1;
    this.ping(this.columnNum);
  };
}

export default Scheduler;
