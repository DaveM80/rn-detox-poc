/* eslint-disable global-require */
import 'react-native';

test('has no performance changes', () => {
  const fs = require('fs');
  const path = require('path');

  function getReassureOutput() {
    const file = path.join(__dirname, '../.reassure', 'output.json');
    const data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
  }

  const data = getReassureOutput();

  expect(data.errors).toHaveLength(0);
  expect(data.warnings).toHaveLength(0);
  expect(data.significant).toHaveLength(0);

  data.meaningless.forEach((i: { isDurationDiffSignificant: any }) => {
    expect(i.isDurationDiffSignificant).toBe(false);
  });
});
