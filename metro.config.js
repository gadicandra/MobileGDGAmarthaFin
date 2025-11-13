const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Map '@' to the project's `src` folder so imports like '@/components/...' work
config.resolver.extraNodeModules = {
  "@": path.resolve(__dirname, "src"),
};

// Ensure Metro watches the src folder
config.watchFolders = [path.resolve(__dirname, "src")];

module.exports = config;
