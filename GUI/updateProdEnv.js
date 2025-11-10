import fs from 'fs/promises';
import path from 'path';
import {DateTime} from "luxon";

const envFileNames = ['.env.production'];

const currentTimestamp = DateTime.now().toFormat('yyyy-MM-dd HH:mm');

async function updateProdEnvFiles() {
  for (const fileName of envFileNames) {
    const envFilePath = path.join(process.cwd(), fileName);

    try {
      await fs.access(envFilePath);

      let data = await fs.readFile(envFilePath, 'utf8');

      const updatedEnvFileContent = data.includes('VITE_APP_VERSION')
        ? data.replace(
            /VITE_APP_VERSION=.*/,
            `VITE_APP_VERSION=${currentTimestamp}`,
          )
        : `${data.trim()}\nVITE_APP_VERSION=${currentTimestamp}\n`;

      await fs.writeFile(envFilePath, updatedEnvFileContent, 'utf8');
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.error(`File ${fileName} does not exist. Skipping update.`);
      } else {
        console.error(`Error updating ${fileName} file:`, err);
        process.exit(1);
      }
    }
  }
}

updateProdEnvFiles();
