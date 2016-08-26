#!/bin/bash

# Checking tools

rimrafPath=`which rimraf`
npmPath=`which npm`

if [ -z "$npmPath" ]
then
  echo "Please install npm"
  exit -1
fi

if [ -z "$rimrafPath" ]
then
  echo "Please install rimraf globally: npm i -g rimraf"
  exit -1
fi

# Clean Start

echo "Cleaning..."

rimraf ./LibraryClassA/target/ ./LibraryClassA/typings/ ./LibraryClassA/node_modules/
rimraf ./LibraryClassB/target/ ./LibraryClassB/typings/ ./LibraryClassB/node_modules/

echo "Done cleaning."

# Build LibraryClassA

echo "Testing and building LibraryClassA..."

cd ./LibraryClassA/

npm install
npm test
npm run build

cd ..

echo "Done testing and building LibraryClassA."

# Build LibraryClassB

echo "Testing and building LibraryClassB..."

cd ./LibraryClassB/

npm install
npm test
npm run build

echo "Done testing and building LibraryClassB."

echo "Bye!"
