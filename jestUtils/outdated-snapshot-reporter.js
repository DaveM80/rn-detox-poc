/* eslint-disable class-methods-use-this */

const fs = require('fs');
const path = require('path');

const TOUCHED_FILE_LIST_PATH = path.join(process.cwd(), '.jest-image-snapshot-touched-files');

const IS_ENABLED = !!process.env.JEST_IMAGE_SNAPSHOT_TRACK_OBSOLETE;

class OutdatedSnapshotReporter {
  /* istanbul ignore next - test coverage in child process */
  static markTouchedFile(filePath) {
    if (!IS_ENABLED) return;
    const touchedListFileDescriptor = fs.openSync(TOUCHED_FILE_LIST_PATH, 'as');
    fs.writeSync(touchedListFileDescriptor, `${filePath}\n`);
    fs.closeSync(touchedListFileDescriptor);
  }

  /* istanbul ignore next - test coverage in child process */
  static readTouchedFileListFromDisk() {
    if (!fs.existsSync(TOUCHED_FILE_LIST_PATH)) return [];

    return Array.from(
      new Set(
        fs
          .readFileSync(TOUCHED_FILE_LIST_PATH, 'utf-8')
          .split('\n')
          .filter((file) => file && fs.existsSync(file))
      )
    );
  }

  /* istanbul ignore next - test coverage in child process */
  onRunStart() {
    if (!IS_ENABLED) return;
    if (fs.existsSync(TOUCHED_FILE_LIST_PATH)) {
      fs.unlinkSync(TOUCHED_FILE_LIST_PATH);
    }
  }

  /* istanbul ignore next - test coverage in child process */
  onRunComplete() {
    if (!IS_ENABLED) return;
    const touchedFiles = OutdatedSnapshotReporter.readTouchedFileListFromDisk();
    const imageSnapshotDirectories = Array.from(
      new Set(touchedFiles.map((file) => path.dirname(file)))
    );
    const allFiles = imageSnapshotDirectories
      .map((dir) => fs.readdirSync(dir).map((file) => path.join(dir, file)))
      .reduce((a, b) => a.concat(b), [])
      .filter((file) => file.endsWith('-snap.png'));
    const obsoleteFiles = allFiles.filter((file) => !touchedFiles.includes(file));

    if (fs.existsSync(TOUCHED_FILE_LIST_PATH)) {
      fs.unlinkSync(TOUCHED_FILE_LIST_PATH);
    }

    obsoleteFiles.forEach((file) => {
      process.stderr.write(`Deleting outdated snapshot "${file}"...\n`);
      fs.unlinkSync(file);
    });
  }
}

module.exports = OutdatedSnapshotReporter;
