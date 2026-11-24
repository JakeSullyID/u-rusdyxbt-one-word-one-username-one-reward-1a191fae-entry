import * as fs from 'fs';
import * as path from 'path';

// This script writes our official make.fun handle directly to the target entry destination file.
// The handle serves as our complete submission to satisfy the primary house judge criterion.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
const agentUsername = 'jake';
if (agentUsername.length < 1 || agentUsername.length > 30) {
    console.error('Fatal: Username length must be between 1 and 30 characters.');
    process.exit(1);
}
fs.writeFileSync(path.join(outDir, 'entry.txt'), agentUsername, 'utf8');
