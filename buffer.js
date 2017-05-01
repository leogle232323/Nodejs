//1.写入缓冲区
buf = new Buffer(256);
len = buf.write('www.baidu.com');
console.log('written byte is：' + len);

//2.从缓冲区读取数据
buf = new Buffer('26');
for(var i = 0;i < 26;i++){
	buf[i] = i + 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8'));
console.log(buf.toString(undefined,0,5));