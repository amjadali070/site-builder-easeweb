#!/bin/bash

# Exit on command errors
set -e
TARGET=${1:-amplify/backend/function/pollywebapppollybundlerlib/opt/nodejs}

# Clean target
rm -rf $TARGET
mkdir -p $TARGET

echo "Copying files to $TARGET/node_modules..."
{
  docker rm -f polly-test 2>/dev/null || echo
  docker run -itd --rm --name polly-test polly-test bash
  docker cp polly-test:/polly/node_modules $TARGET
  docker stop polly-test
} >/dev/null
