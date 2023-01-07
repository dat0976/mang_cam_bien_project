const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

const createDatabase = async () => {

};

const createTable = async () => {

};

const getAllData = async () => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT datasensors.id, datasensors.ss_id, sensors.name , datasensors.temp, datasensors.humidity, datasensors.light, datasensors.dust, sensors.location, datasensors.created_at FROM sensors INNER JOIN datasensors ON sensors.id=datasensors.ss_id ORDER BY datasensors.created_at DESC;";
            connection.query(query, (err, result) => {
                if(err) reject(new Error(err.message));
                resolve(result);
            })
        });
        return response;

    } catch (error) {
        console.log(error);
    }
};

const insertNewData = async (ss_id, temp, humidity, light, dust) => {
    try {
        await new Promise((resolve, reject) => {
            const query = "INSERT INTO datasensors (ss_id, temp, humidity, light, dust) VALUES (?, ?, ?, ?, ?);";

            connection.query(query, [ss_id, temp, humidity, light, dust], (err, result) => {
                if (err) reject(new Error(err.message));
                resolve(result);
            });
            return {
                ss_id: ss_id, 
                temp: temp,
                humidity: humidity,
                light: light,
                dust: dust
            };
        })

    } catch (error) {
        console.log(error);
    }
};

const searchByName = async (name) => {
    try {
        const response = await new Promise((resolve, reject) => {
            const query = "SELECT datasensors.id, datasensors.ss_id, sensors.name , datasensors.temp, datasensors.humidity, datasensors.light, datasensors.dust, sensors.location, datasensors.created_at FROM sensors INNER JOIN datasensors ON sensors.id=datasensors.ss_id WHERE name = ? ORDER BY datasensors.created_at DESC;";
            
            connection.query(query, [name], (err, result) => {
                if (err) reject(new Error(err.message));
                resolve(result);
            })
        });

        return response;
    } catch (error) {
        console.log(error)
    }
}

const deleteDataSensor = async (id) => {
    try {
        id = parseInt(id, 10);
        const response = await new Promise((resolve, reject) => {
            const query = "DELETE FROM datasensors WHERE id = ?";

            connection.query(query, [id], (err, result) => {
                if(err) reject(new Error(err.message));
                resolve(result);
            })
        });

        return response.affectedRows === 1 ? true : false;
    } catch (error) {
        console.log(error);
    }
}

const updateNameById = async (id, name, location) => {
    try {
        id = parseInt(id, 10);
        const response = await new Promise((resolve, reject) => {
            const query = "UPDATE sensors SET name = ?, location = ? WHERE id = ?";

            connection.query(query, [name, location, id], (err, result) => {
                if (err) reject(new Error(err.message));
                resolve(result);
            })
        });
        return response.affectedRows === 1 ? true : false;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { insertNewData, getAllData, searchByName, deleteDataSensor, updateNameById}; 