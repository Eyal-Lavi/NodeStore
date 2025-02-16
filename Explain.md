
npx sequelize model:generate --name Order --attributes orderId:integer,amount:integer,userId:string

npx sequelize model:generate --name Product --attributes name:string,quantity:integer,price:integer,description:string

npx sequelize model:generate --name User --attributes name:string,userName:string,email:string,password:string,token:string

יצירת מיגרציה
npx sequelize-cli migration:generate --name add-product-image-table

יצירה ראשונית של seed
npx sequelize seed:generate --name addProduct

מחיקת seed כולם
npx sequelize db:seed:undo:all

מחיקת seed ספציפי
npx sequelize db:seed:undo --name xxxxxxx

הפעלה seed
npx sequelize db:seed --seed xxxxxxxx

הפעלה seed all
npx sequelize db:seed:all

הפעלה מיגרציה
npx sequelize db:migrate

מחיקת מיגרציה
npx sequelize db:migrate:undo --name xxxxxx



הפעלת הdrop על המגרציה עם שם ספציפי
npx sequelize db:migrate:undo --name 20250105192317-create-product.js
