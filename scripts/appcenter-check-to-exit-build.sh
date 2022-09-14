DETOX_ARTIFACTS_DIR="./e2e/"

if [[ -d "$DETOX_ARTIFACTS_DIR" ]]
then
    echo "$DETOX_ARTIFACTS_DIR exists"

    UPLOAD_FOLDER_NAME="$(date -u +%Y%m%d_%H%M%S)-$APP_CENTER_CURRENT_PLATFORM-$APPCENTER_BUILD_ID"
    echo "Uploading artifacts under $UPLOAD_FOLDER_NAME directory"

    mkdir "$UPLOAD_FOLDER_NAME"

    cp -r "$DETOX_ARTIFACTS_DIR" ./"$UPLOAD_FOLDER_NAME"
    
    aws s3 cp ./"$UPLOAD_FOLDER_NAME" s3://awesomeproject-appcenter-reports/"$UPLOAD_FOLDER_NAME" --recursive --exclude "*.js" --exclude "*.ts" --exclude "*.json"
else
    echo "$DETOX_ARTIFACTS_DIR does not exist"
    exit 1
fi
 