import { connectDatabase } from './config/database';
import app from './index';

const port = Number(process.env.PORT || 8000);
const host = process.env.CODESPACE_NAME ? '0.0.0.0' : '127.0.0.1';
const codespaceBaseUrl = process.env.CODESPACE_NAME
  ? `https://${process.env.CODESPACE_NAME}-${port}.app.github.dev`
  : null;

connectDatabase()
  .then(() => {
    app.listen(port, host, () => {
      console.log(`Backend listening on http://${host}:${port}`);
      if (codespaceBaseUrl) {
        console.log(`Codespace API available at ${codespaceBaseUrl}`);
      }
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
