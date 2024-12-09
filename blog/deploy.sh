#!/bin/bash
set -e
npm run build:css
git add .
git commit -m "deploy - blog"
git push origin main
