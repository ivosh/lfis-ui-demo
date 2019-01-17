const fs = require('fs');
const glob = require('glob-promise');
const parser = require('typescript-react-intl').default;
const path = require('path');

const transform = async (pattern: string = 'src/**/*.@(ts|tsx)') => {
  let files: string[];
  try {
    files = await glob(pattern);
  } catch (err) {
    throw new Error(err);
  }

  return files
    .map(file => {
      const contents = fs.readFileSync(file).toString();
      return {
        file,
        contents: parser(contents) as import('react-intl').FormattedMessage.MessageDescriptor[]
      };
    })
    .filter(result => result.contents.length > 0);
};

const main = async () => {
  const src = process.argv[2];
  const dir = process.argv[3];

  const results = await transform(src);
  fs.mkdirSync(dir, { recursive: true });

  for (let { file, contents } of results) {
    const name = path.basename(file, path.extname(file));
    fs.writeFileSync(path.format({ dir, name, ext: '.json' }), JSON.stringify(contents, null, 2));
  }
};

main().then();
