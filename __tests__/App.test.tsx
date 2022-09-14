import 'react-native';
import React from 'react';
import renderer, { type ReactTestRenderer } from 'react-test-renderer';
import App from '../src/App';

// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.act(() => {
    renderer.create(<App />);
  });
});

it('has no visual changes', () => {
  let treeObj: ReactTestRenderer | undefined;
  renderer.act(() => {
    treeObj = renderer.create(<App />);
  });
  const treeObjJSON = (treeObj as ReactTestRenderer).toJSON();
  expect(treeObjJSON).toMatchSnapshot();
});
