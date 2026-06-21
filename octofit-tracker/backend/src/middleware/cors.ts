import { RequestHandler } from 'express';

const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];

const corsMiddleware: RequestHandler = (req, res, next) => {
  const origin = req.headers.origin as string | undefined;
  const isAllowedPreviewOrigin = origin?.endsWith('.app.github.dev');

  if (origin && (allowedOrigins.includes(origin) || isAllowedPreviewOrigin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  }

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  return next();
};

export default corsMiddleware;
