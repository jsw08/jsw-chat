#!/bin/bash
npm run build
rm -rf ../server/dist
mv dist ../server/dist -f