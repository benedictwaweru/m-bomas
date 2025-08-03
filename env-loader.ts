/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import * as fs from 'fs/promises';
import * as path from 'path';
import * as dotenv from 'dotenv';

async function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env');

  try {
    await fs.access(envPath, fs.constants.F_OK);

    const { error } = dotenv.config({ path: envPath });

    if (error) {
      throw new Error(`Failed to load .env file: ${error.message}`);
    }
  } catch (error: unknown) {
    console.error(
      'Error loading .env:',
      error instanceof Error ? error.message : 'Unknown error',
    );
    process.exit(1);
  }
}

loadEnv().catch((error) => {
  console.error(`An error occurred: ${error}`);
  process.exit(1);
});
