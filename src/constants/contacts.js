import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // Отримуємо шлях до поточного файлу
const __dirname = path.dirname(__filename); // Отримуємо шлях до директорії

export const PATH_DB = path.join(__dirname, '../db/db.json');
