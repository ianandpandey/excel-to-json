const express = require('express');
const multer = require('multer');
const { convertExcelToJson } = require('./excelToJson');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(cors());

app.post('/api/convert', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  // Convert Excel to JSON
  const result = convertExcelToJson(req.file.path);

  if (!result) {
    return res.status(500).json({ message: 'Error converting file.' });
  }

  // Send the JSON data in the response
  res.json({
    data: result, // Send the JSON data
    message: 'File converted to JSON',
  });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
