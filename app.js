const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
    const filePath = req.query.file;

    if (!filePath) {
        res.status(400).send('File path is missing');
        return;
    }

    // 读取本地文件
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // 返回文件内容字符串
        res.send(data);
    });
});

// 监听端口
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
