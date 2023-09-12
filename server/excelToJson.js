const excelToJson = require('convert-excel-to-json');

function convertExcelToJson(filePath) {
  const result = excelToJson({
    sourceFile: filePath,
    header: {
      rows: 1,
    },
  });

  console.log('Excel to JSON Result:', result); // Add this line to log the result

  return result;
}

module.exports = { convertExcelToJson };
