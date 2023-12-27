
# Inventory-Management-System

# installation
make sure node js is installed in your system
## Frontend
* cd to /frontend folder 
* inside terminal run  `npm install`
* then run 'npm start'

## Backend
* cd to /backend folder 
* inside terminal run :- npm install
* then run `node index.js`
* add your .env file and add mongoDb connection string in it.

## End Points
* POST: http://localhost:8000/grocery/add 
Body Object :-
``` status
{
    "product_name":"name" , // in String 
    "quantity":10,  // number
    "price_per_unit": 10 //number
}
```

* GET :http://localhost:8000/grocery/all

## Output 

![image](https://github.com/bewithkomalkumar/Inventory-Management-System/assets/81805096/1b3d80ae-41a0-4b26-9aab-e4c437028d78)

![image](https://github.com/bewithkomalkumar/Inventory-Management-System/assets/81805096/d2256de2-338d-48c8-8868-fc5bbb38dc7b)










