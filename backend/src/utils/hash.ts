import crypto from 'crypto';
import fs from 'fs';

export const generateSHA256 = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(filePath);

    stream.on('error', reject);
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => resolve(hash.digest('hex')));
  });
};

export const verifySHA256 = async (filePath: string, expectedHash: string): Promise<boolean> => {
  const currentHash = await generateSHA256(filePath);
  return currentHash === expectedHash;
};
