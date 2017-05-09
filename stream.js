//1.�����ж�ȡ����
var fs = require("fs");
var data = '';

//�����ɶ���
var readerStream = fs.createReadStream('input.txt');

//���ñ���ΪUTF8
readerStream.setEncoding('UTF8');

//�������¼� --> data,end,end error
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

//2.д����
var data = 'www.writestream.com';

//����һ������д�������д�뵽�ļ�output.txt
var writeStream = fs.createWriteStream('output.txt');

//ʹ��UTF8����д������
writeStream.write(data,'UTF8');

//����ļ�ĩβ
writeStream.end();

//�������¼� --> data,end,end error
writeStream.on('finish',function(){
	console.log('write completed!');
	});

writeStream.on('error',function(err){
	console.log(err.stack);
	});
	
console.log('program write is over.');

//3.�ܵ���
//�ܵ���д����
var read = fs.createReadStream('input.txt');
var write = fs.createWriteStream('write.txt');
read.pipe(write);
console.log('program pipe is over.');

//4.��ʽ�� ͨ�����������������һ����������������������Ļ��ơ���ʽ��һ�����ڹܵ�������
var zlib = require('zlib');

//ѹ��input.txt�ļ�Ϊinput.txt.gz
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));
console.log('file compress completed.');

//��ѹinput.txt.gz�ļ�Ϊinput.txt
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('decompress.txt'));//��ѹ֮����ļ�����Ϊ�գ�
console.log('file decompress completed.');