#!/usr/bin/env bash
set -a; source .env; set +a;

aws polly start-speech-synthesis-task \
  --engine standard \
  --language-code ja-JP \
  --lexicon-names aws
  --output-format mp3 \
  --output-s3-bucket-name $OUTPUT_S3_BUCKET_NAME \
  --output-s3-key-prefix mp3/ \
  --text file://$1 \
  --text-type ssml \
  --voice-id Takumi >| ${1%.*}.json
