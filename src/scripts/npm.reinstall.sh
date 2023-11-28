#!/usr/bin/env bash

set -eu -o pipefail

declare -ar PACKAGES=("$(npm list -p | tail -n +2 | sed 's/.*\///')")

npm uninstall ${PACKAGES[@]}
rm -rf node_modules/
rm -rf package-lock.json
npm install ${PACKAGES[@]}

