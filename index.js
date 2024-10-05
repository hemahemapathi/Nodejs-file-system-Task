const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = 3000;


const folderPath = path.join(__dirname, 'timestamps');

// Ensure the timestamps folder exists
fs.mkdir(folderPath, { recursive: true }).catch(console.error);

app.use(express.json());

app.get('/', (req, res) => {
   res.redirect('/get-timestamps');
});

// Endpoint to create a text file with current timestamp
app.post('/create-timestamp', async (req, res) => {
  try {
    const now = new Date();
    const fileName = now.toISOString().replace(/:/g, '-') + '.txt';
    const filePath = path.join(folderPath, fileName);
    await fs.writeFile(filePath, now.toISOString());
    res.status(201).json({ message: 'File created successfully', fileName });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create file' });
  }
});

// Endpoint to retrieve all text files in the folder
app.get('/get-timestamps', async (req, res) => {
  try {
    const files = await fs.readdir(folderPath);
    const textFiles = files.filter(file => path.extname(file) === '.txt');
    if (textFiles.length > 0) {
      res.type('text/plain').send(textFiles[0].slice(0, -4)); // Remove .txt extension
    } else {
      res.status(404).send('No timestamp files found');
    }
  } catch (error) {
    res.status(500).send('Failed to retrieve files');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});