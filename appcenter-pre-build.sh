#!/usr/bin/env bash

set -e

# APP_CENTER_CURRENT_PLATFORM=android

if [ -z "$APP_CENTER_CURRENT_PLATFORM" ]
then
  echo "You need define the APP_CENTER_CURRENT_PLATFORM variable in App Center with values android or ios"
  exit 1
fi

if [ "$APP_CENTER_CURRENT_PLATFORM" == "android" ]
then
   . ./scripts/setup-android-emulator.sh

   DETOX_CONFIG=android.emu.e2e.release

else
   . ./scripts/setup-ios-simulator.sh

  DETOX_CONFIG=ios.sim.release
fi

. ./scripts/run-detox.sh

. ./scripts/appcenter-check-to-exit-build.sh

exit 1
