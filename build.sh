#!/bin/bash
rm -r dist
cd client
npm run build
mv dist ..