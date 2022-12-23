//import Model Students
const Student = require(".../models/Students");

class StudentsController {
    // index(req, res) {
    //     //memanggil method static all
    //     // const students = Students.all();
    //     //mengirim callback do=i parameter.
    //     Student.all(function (students) {
    //         const data = {
    //             message: "Menampilkan semua students",
    //             data: students,
    //         };
    
    //         res.json(data);
    //     });   
    // }

    async index(req, res) {
        //memanggil method static all dengan async await.
        const students = await Students.all();
    
        const data = {
            message: "Menampilkan semua students",
            data: students,
        };

        res.json(data);
    }

    store(req,res) {
            /**
             * TODO 2: memanggil method create.
             * Method create mengembalikan data yang baru diinsert
             * Kembalikan data alam bentuk json.
             */
        const data = {
            message: "Menambahkan data student",
            data: [],
        };
    
        res.json(data);
        }
    }

