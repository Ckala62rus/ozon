// инициализация
npm init -y

// установка вебпака
npm install webpack webpack-cli --save-dev


// добавляем доп настройки для запуска в package.json
"build": "webpack --mode=production",
"watch": "webpack --watch --mode=development"

// сборка проекта
npm run build
