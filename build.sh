#!/bin/bash
if [[-d "dist"]]
then
  rm -r dist
fi

cd client
npm run build
mv dist ..