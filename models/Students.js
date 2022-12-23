//import database
const db = require(".../config/database");

//membuat class Model Students
class Students {
/**
 * Membuat method static all
 */
    static all(callback) {
        // return Promise sebagai solusi Asynchronous
        return new Promise((resolve, reject) => {
            const query = "SELECT * from students";
        /**
         * Melakukan query menggunakan method query.
         * Menerima 2 params: query dan callback
         */ 
        db.query(query, (err, result) => {
            resolve(results);
            });
        });
    }
/**
 * TODO 1: Buat fungsi untuk insert data.
 * Method menerima parameter data yang akan diinsert.
 * Method mengembalikan data student yang baru diinsert.
 */
    static create(){
        
    }
}

//export class Student 
module.export = Students;