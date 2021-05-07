const fs = require('fs');
const path = require('path');
const { genFromData } = require('swagger-codegen-ts');

const filePath = path.join(__dirname, '..', 'config', 'openapi.json');
const outputDir = path.join(__dirname, '..', './src/services/api/');

const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

genFromData(
  {
    outputDir,
    hook: {
      customFunctionName(data) {
        const name = `${data.method.toLowerCase()}${data.path.replace(/^\/api/, '')}`;
        return name.replace(/[\/-]/g, '_').replace(/[{}]/g, '$');
      },
    },
  },
  data,
)
  .then((_) => process.exit(0))
  .catch((error) => console.log('err:\n', error));
