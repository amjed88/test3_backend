const mysql=require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const pool =mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

let test ={};
test.Login=(username)=>{
    return new Promise((resolve,reject)=>{
        pool.query('select *from logintbl where username=?',[username],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);

        });

    });

};
 test.all=()=>{
     return new Promise((resolve,reject)=>{
         pool.query('select *from amtbl',(err,results)=>{
             if(err){
                 return reject(err);
             }
             return resolve(results);
         });

     });

 };
 test.one=(id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('select *from amtbl where id=?',[id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });

    });

};
test.insert=(id,name,date)=>{
    return new Promise((resolve,reject)=>{
        pool.query('insert into  amtbl values (?,?,?)',[id,name,date],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.delete=(id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('delete from  amtbl where id=? ',[id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });

    });
};
test.put=(name,id)=>{
    return new Promise((resolve,reject)=>{
        pool.query('update amtbl set name=? where id=? ',[name,id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });

    });
};

 module.exports=test;