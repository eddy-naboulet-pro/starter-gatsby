require('ts-node').register({
  transpileOnly: true,
  files: true,
  "compilerOptions": {
    "target": "es2019",
    "module": "commonjs",
    "lib": ["dom", "es2020"],
    "jsx": "react",
    "strict": false,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "noImplicitAny": false,
    "resolveJsonModule": true,
  }
})

require(`ts-node`).register({ transpileOnly: true, files: true })

module.exports = require(`./gatsby-config.ts`)