declare module 'react-native-safe-area-context/jest/mock' {
  import RNSafeAreaContext, { Metrics, SafeAreaViewProps } from 'react-native-safe-area-context';

  export const initialWindowMetrics: Metrics;
  export const SafeAreaProvider: React.FC<SafeAreaViewProps>;

  export default RNSafeAreaContext;
}
// Prevents jest.setup.ts from complaining that react-native-safe-area-context/jest/mock is an untyped module.
// See https://github.com/th3rdwave/react-native-safe-area-context/issues/213 for why this file is necessary.
