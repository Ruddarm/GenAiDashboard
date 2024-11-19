const dotenv = require("dotenv");
// const data = require(".")
const path = require("path"); // To handle file paths
const participantsModel = require("../Models/participants");
const mongoose = require("mongoose");
const excelJS = require("exceljs");
dotenv.config();
const connection = require("../Db/MongoOperation");
const main = async () => {
  await connection();
};
const readExcel = async (path) => {
  try {
    await main();
    const workBook = new excelJS.Workbook();
    await workBook.xlsx.readFile(path);
    const sheet = workBook.getWorksheet(1);
    Data = [];
    sheet.eachRow((row, rowindex) => {
      if (rowindex == 1) {
        return;
      }
      const [
        userName,
        userEmail,
        profilelink,
        status,
        TotalBadage,
        arcadeGames,
        Eligible,
      ] = row.values.slice(1);
      Data.push({
        userName,
        userEmail,
        profilelink,
        TotalBadage,
        status,
        arcadeGames,
        Eligible,
      });
      // console.log(row.values.slice(1))
    });
    await participantsModel.insertMany(Data);
    console.log("Data saved")
  } catch (e) {
    console.log(e);
  }
};

readExcel(path.join(__dirname, "../Data/stdData.xlsx"));
