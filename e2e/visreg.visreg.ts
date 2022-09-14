/* eslint-env detox/detox */

import { expect } from '@jest/globals';
import setDemoMode from '../jestUtils/setDemoMode';
import setupJestExtends from '../jestUtils/setupJestExtends';

describe('Visual regression', () => {
  beforeAll(async () => {
    setupJestExtends();
    await device.launchApp({ newInstance: true });
    setDemoMode();
  });

  it('Homescreen should match snapshot', async () => {
    await expect('Homescreen').toMatchImageSnapshot();
  });
});
