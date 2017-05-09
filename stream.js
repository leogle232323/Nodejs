//1.从流中读取数据
var fs = require("fs");
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');

//设置编码为UTF8
readerStream.setEncoding('UTF8');

//处理流事件 --> data,end,end error
readerStream.on('data',function(chunk){
	data += chunk;
	});
	
readerStream.on('end',function(){
	console.log(data);
	});
	
readerStream.on('error',function(err){
	console.log(err.stack);
	});
	
console.log('program read is over.');

//2.写入流
var data = 'www.writestream.com';

//创建一个可以写入的流，写入到文件output.txt
var writeStream = fs.createWriteStream('output.txt');

//使用UTF8编码写入数据
writeStream.write(data,'UTF8');

//标记文件末尾
writeStream.end();

//处理流事件 --> data,end,end error
writeStream.on('finish',function(){
	console.log('write completed!');
	});

writeStream.on('error',function(err){
	console.log(err.stack);
	});
	
console.log('program write is over.');

//3.管道流
//管道读写操作
var read = fs.createReadStream('input.txt');
var write = fs.createWriteStream('write.txt');
read.pipe(write);
console.log('program pipe is over.');

//4.链式流 通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
var zlib = require('zlib');

//压缩input.txt文件为input.txt.gz
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
console.log('file compress completed.');

//解压input.txt.gz文件为input.txt
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('decompress.txt'));//解压之后的文件内容为空？
console.log('file decompress completed.');