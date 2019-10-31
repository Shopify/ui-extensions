echo "----------------------------"
echo "|     Boot strap Lerna     |"
echo "----------------------------"

yarn lerna bootstrap

echo "----------------------------"
echo "|      Build Packages      |"
echo "----------------------------"

# Build packages
yarn lerna run build

echo "----------------------------"
echo "|      🎉🎉🎉🎉🎉🎉🎉      |"
echo "|    Application: 🥾 ed     |"
echo "----------------------------"

