    echo "Setup Android simulator"
    EMULATOR_IMAGE="system-images;android-30;default;x86_64"
    EMULATOR_NAME="Pixel_XL_API_30"

    PATH="$ANDROID_HOME/emulator:$ANDROID_HOME/platform-tools:$ANDROID_HOME/cmdline-tools/latest/bin:$PATH"

    # Install the emulator tool
    sdkmanager --install emulator

    # Install an AOSP image that would later be used as the AVD's OS
    sdkmanager --install "system-images;android-30;default;x86_64"

    # To do that automatically in a script, try this:
    yes | sdkmanager --licenses

    # Create an AVD with the image we've previously installed
    avdmanager --verbose create avd --force --name "$EMULATOR_NAME" --abi x86_64 --device "pixel" --package "$EMULATOR_IMAGE"

    # (optional) Review your brand new AVD:
    avdmanager list avd
     echo "***"

    echo "Whereis..."
    whereis emulator
     echo "***"

    echo "should look like..."
    echo $ANDROID_HOME/emulator/emulator
     echo "***"

    echo "full ls"
    ls -l $ANDROID_HOME/emulator
    
    echo "***"

    emulator -verbose -no-boot-anim @"$EMULATOR_NAME" &

    # Wait for the emulator to boot up completely.
    echo "Waiting until emulator is booted..."
    adb wait-for-device shell 'while [[ -z $(getprop sys.boot_completed) ]]; do sleep 1; done;'
