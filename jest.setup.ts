import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

/**
 * TEST SETUP NOTES
 *
 * React Navigation: https://reactnavigation.org/docs/testing/. The 'reanimated' module is only required for the Drawer Navigator.
 * Safe Area Context: https://github.com/th3rdwave/react-native-safe-area-context#testing.
 */
