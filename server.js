const express = require('express');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// 配置 multer 来处理文件上传
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// 用于接收表单提交的数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit-form', upload.fields([{ name: 'idCardFront' }, { name: 'idCardBack' }]), (req, res) => {
    const formData = req.body;
    console.log(formData); // 输出数据，您可以将其保存到数据库

    // 保存数据逻辑...
    res.json({ message: '提交成功' });
});

// 启动服务器
app.listen(port, () => {
    console.log(`服务器正在运行在 http://localhost:${port}`);
});
