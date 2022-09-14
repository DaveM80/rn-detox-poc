# Mobile Banking App

## Table of Contents

1. [ Overview. ](#overview)
2. [ Set Up. ](#setup)
3. [ Testing. ](#testing)
4. [ Running on emulator. ](#running)

---

## 1. Overview <a name="overview"></a>

Built using [React Native](https://reactnative.dev/)

[Yarn package manager](https://yarnpkg.com/getting-started)

## 2. Set Up <a name="setup"></a>

```
yarn install
```

---

## 3. Testing <a name="testing"></a>

List here are the tools and techniques used for testing the application

Linting

[Prettier](https://prettier.io/)

Unit

[Jest](https://jestjs.io/)

Performance

[Reassure](https://github.com/callstack/reassure)

Component performance is tested with a combination of Reassure and Jest on a pre-push hook.

To run manually, run `yarn reassure` to create a current.perf and output.json files inside .reassure directory. Once files are written output.json is inspected for any regression using `yarn test:reg:perf`.

### E2E

[Detox](https://github.com/wix/Detox)

#### Setup

##### Setting up android environment:

https://wix.github.io/Detox/docs/introduction/android-dev-env

\*see emulator setup below

##### Setting up ios environment:

https://wix.github.io/Detox/docs/introduction/ios-dev-env

##### Setting up android emulator for detox:

```
sh ./scripts/setup-android-emulator.sh
```

##### Setting up ios emulator for detox:

Open project in xcode, select iPhoneSE at the top.

Visual Regression

[Detox](https://github.com/wix/Detox)

#### Testing

Running the e2e tests run:

```
yarn e2e:android
```

or

```
yarn e2e:ios
```

---

## 4. Running on emulator <a name="running"></a>

Follow React Native guide to [Environment Setup](https://reactnative.dev/docs/environment-setup)

_start Metro Bundler_

```
yarn start
```

_Install Pods_

```
npx pod-install
```

_Android_

```
yarn android
```

_iOS_

```
yarn ios
```

## 5. Pipeline overview

1. Pre-commit and pre-push hooks run before code is pushed to bitbucket repository.
2. Bitbucket runs configured pipelines (defined in bitbucket-pipelines.yml).
3. Code is merged to dev branch.

## 6. Dependency notes

This section for keeping note of dependency-related issues.

`react-native-reanimated` - set to v2.9.1 to avoid build issue in detox.
`unset-value` - version has been specified in resolutions as react-native depends on older version with a vulnerability.

### Environment variables

```
ANDROID_HOME=/Users/==YOUR_USER_HERE==/Library/Android/sdk
PATH=$PATH:$ANDROID_SDK_ROOT/emulator
PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export ANDROID_AVD_HOME=/Users/==YOUR_USER_HERE==/.android/avd
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-11.jdk/Contents/Home
```

### Troubleshooting
If applesimutils is not found:
brew tap wix/brew && brew install applesimutils
