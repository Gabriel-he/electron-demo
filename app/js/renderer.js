// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
    
var fs = require('fs'),
textarea = document.getElementsByTagName('textarea')[0],
button = document.getElementsByTagName('button')[0];

function writeFile() {
    var text = textarea.value;

    fs.writeFile('message.txt', text, 'utf8',function(err) {
        if (err) {
            throw err;
        } else {
            console.log('file saved!')
        }
    });
}

button.onclick = writeFile;


const shell = require('electron').shell;
const os = require('os');
var xlsx = require('node-xlsx').default;

const {dialog} = require('electron').remote;


/**
 * 解析excel文件主函数
 */
function parseXlsxFile(path) {
    console.log(typeof path)
    var fileObj = xlsx.parse(path)
    // 此处读出来的是个多维数组，数据按行读取
    console.log(fileObj);
}

/**
 * 生成excel文件主函数,返回文件buffer
 */
function buildXlsxFile(filename, data) {
    return xlsx.build([{
                name: filename,
                data: data,
            }])

}


const fileManagerBtn = document.getElementById("openFileBtn")
fileManagerBtn.addEventListener('click', function(e) {
    //console.log(os.homedir(), __dirname);
    //shell.showItemInFolder(__dirname)

    // 打开文件选择框，回调函数中获取文件进行解析
    dialog.showOpenDialog({
        title: '选择源文件',
        defaultPath: os.homedir(),
        properties: ['openFile'],
    }, function(res) {
        console.log(res);
        //这里是字符串数组
        parseXlsxFile(res[0]);

    })
})


const filebuldBtn = document.getElementById("buildFileBtn")
filebuldBtn.addEventListener('click', function(e) {

    // 打开选择框，回调函数中获取文件路径以生成文件
    dialog.showSaveDialog({
        title: '选择生成文件位置',
        defaultPath: os.homedir(),
    }, function(res) {
        // 这里返回字符串
        console.log(res);
        if (res) {
            var filename = res.split("/").pop();
            var data = [[1,2,3],[4,5,6],[7,8,9]];
            // get buffer
            var buffer = buildXlsxFile(filename, data);

            // write buffer to xlsx file
            fs.writeFile( res + '.xlsx', buffer, 'binary',function(err) {
                if (err) {
                    throw err;
                } else {
                    console.log('file saved!')
                    dialog.showMessageBox({message:"文件生成成功！"})
                }
            });

        }
    })
})
