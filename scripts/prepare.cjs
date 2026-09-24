const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const output = path.join(root, '.site');
fs.mkdirSync(output, { recursive: true });
for (const name of ['index.html', '505n672', '900f', 'g2all', '13xxgr', 'serve.json']) {
  fs.cpSync(path.join(root, name), path.join(output, name), { recursive: true });
}
