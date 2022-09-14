/* eslint-disable no-undef */
const { configureToMatchImageSnapshot } = require('jest-image-snapshot');
const fs = require('fs');
const path = require('path');
const { expect } = require('@jest/globals');

export default () => {
  const toMatchImage = configureToMatchImageSnapshot({
    comparisonMethod: 'ssim',
    failureThreshold: 0.2,
    failureThresholdType: 'pixel',
  });
  expect.extend({ toMatchImage });

  expect.extend({
    async toMatchImageSnapshot(screenName) {
      const platform = await device.getPlatform();
      const deviceName = await device.name.split(' ').slice(1).join('');

      const SNAPSHOTS_DIR = `__image_snapshots__/${platform}/${deviceName}`;

      const { testPath, currentTestName } = this;

      const customSnapshotsDir = path.join(path.dirname(testPath), SNAPSHOTS_DIR);
      const customSnapshotIdentifier = `${path.basename(
        testPath
      )}-${currentTestName}-${screenName}`;

      const tempPath = await device.takeScreenshot(screenName);
      const image = fs.readFileSync(tempPath);
      expect(image).toMatchImage({ customSnapshotIdentifier, customSnapshotsDir });

      return { pass: true };
    },
  });
};
