module.exports = {
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "./tests/[a-zA-Z0-9]{1,40}.spec.ts",

    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/"
    ],
}