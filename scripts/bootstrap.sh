echo "----------------------------"
echo "|     Boot strap Lerna     |"
echo "----------------------------"

yarn lerna bootstrap

echo "----------------------------"
echo "|      Build Packages      |"
echo "----------------------------"

rm -rf node_modules/@types/react-native

# Build packages
yarn lerna run build


echo "----------------------------"
echo "|      🎉🎉🎉🎉🎉🎉🎉      |"
echo "|    Application: 🥾 ed     |"
echo "----------------------------"

