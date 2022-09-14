import React from 'react';
import { measurePerformance } from 'reassure';
import App from '../../src/App';

test('Simple test', async () => {
  await measurePerformance(<App />);
});
