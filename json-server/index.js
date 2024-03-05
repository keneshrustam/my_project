const fs = require('fs');
const path = require('path');

const jsonServer = require('json-server');
const multer = require('multer');
const { createCanvas, loadImage } = require('canvas');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/mangas'); // Папка, куда сохранять файлы
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Имя файла сохраняется без изменений
    }
});

const upload = multer({ storage: storage });

// server.post('/mangas', upload.array('images'), async (req, res) => {
//     try {
//         const mangaData = JSON.parse(req.body.data); // Парсим строку JSON из FormData
//
//         const images = req.files; // Получаем массив загруженных изображений
//         const mangaName = mangaData.nameFolder; // Имя манги для создания папки
//         const mangaDir = path.join(__dirname, 'uploads', 'mangas', mangaName);
//
//         if (!fs.existsSync(mangaDir)) {
//             fs.mkdirSync(mangaDir);
//         }
//
//         // Сохраняем каждое изображение в папку манги
//         for (const image of images) {
//             const imagePath = path.join(mangaDir, image.originalname);
//             fs.writeFileSync(imagePath, image.buffer);
//         }
//
//         // Добавляем информацию о манге в ваш JSON-файл
//         const dbPath = path.resolve(__dirname, 'db.json');
//         const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
//
//         const newId = db.mangas.length > 0 ? Math.max(...db.mangas.map(manga => manga.id)) + 1 : 1;
//         mangaData.id = newId;
//
//         // Записываем данные манги в базу данных
//         db.mangas.push(mangaData);
//         fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
//
//         res.status(201).json({ message: 'Images uploaded successfully' });
//     } catch (error) {
//         console.error('Error uploading images:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

server.use(router);

server.listen(5005, () => {
    console.log('server is running on 5005 port');
});