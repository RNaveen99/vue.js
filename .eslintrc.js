module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:prettier/recommended",
        "@vue/prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
};
// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier", "plugin:prettier/recommended"],
//   parserOptions: {
//     ecmaVersion: 2020
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
//   }
// };
