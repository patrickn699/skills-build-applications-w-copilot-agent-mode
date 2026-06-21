// API configuration using Vite environment variable
// Document: set VITE_CODESPACE_NAME in frontend/.env.local when using Codespaces
export const CODESPACE_NAME = import.meta.env.VITE_CODESPACE_NAME;
export const API_BASE = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

export function extractList(responseJson) {
  if (!responseJson) return [];
  if (Array.isArray(responseJson)) return responseJson;
  if (responseJson.data && Array.isArray(responseJson.data)) return responseJson.data;
  if (responseJson.results && Array.isArray(responseJson.results)) return responseJson.results;
  if (responseJson.items && Array.isArray(responseJson.items)) return responseJson.items;
  return typeof responseJson === 'object' ? [responseJson] : [];
}
