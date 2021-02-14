#!/usr/bin/env bash

aws polly put-lexicon \
  --name aws \
  --content file://_aws.pls >&1
