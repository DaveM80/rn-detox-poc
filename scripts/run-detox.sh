echo "Building the project for Detox tests..."
#npx detox build --configuration "$DETOX_CONFIG"
yarn e2e:android:build && yarn e2e:android:test

echo "Executing Detox tests..."

#npx detox test --configuration "$DETOX_CONFIG" --debug-synchronization 500 --detectOpenHandles --forceExit

if [ "$APP_CENTER_CURRENT_PLATFORM" == "android" ]
then
    echo "Killing emulator"
    killall qemu-system-x86_64
fi
