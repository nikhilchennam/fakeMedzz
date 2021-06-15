const QR = require("qrcode");
const Excel = require("xlsx");

function createQR(filename, data) {
    try {
        QR.toFile("images/" + filename + ".png", data);
    } catch (e) {
        console.log("Error creating files" + filename);
    }
}

const ws = Excel.readFile("qr code modified (1).xlsx").Sheets["Sheet1"];
const data = Excel.utils.sheet_to_json(ws);
data.forEach(function(r) {
    createQR(r.batchNo, r.batchNo);

});