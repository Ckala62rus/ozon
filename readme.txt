// инициализация
npm init -y

// установка вебпака
npm install webpack webpack-cli --save-dev


// добавляем доп настройки для запуска в package.json
"build": "webpack --mode=production",
"watch": "webpack --watch --mode=development"

// сборка проекта
npm run build

// установка json server
npm install -g json-server

// запуск json server
json-server --watch db.json

для запуска конкретного db.json файла пишем
json-server --watch db/db.json (находится в папке с проектом)

// чтобы live server не перезагружал страницу после изменения файла db/db.json пишем
// в настройках live server
"liveServer.settings.ignoreFiles": [

    "db/db.json"

]

