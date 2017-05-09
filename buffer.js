//1.д�뻺����
buf = new Buffer(256);
len = buf.write('www.baidu.com');
console.log('written byte is��' + len);

//2.�ӻ�������ȡ����
buf1 = new Buffer(26);
for(var i = 0;i < 7;i++){
	buf1[i] = i + 97;
}
console.log(buf1.toString());
console.log(buf1.toString('ascii'));
console.log(buf1.toString("ascii",0,5));
console.log(buf1.toString('utf8'));
console.log(buf1.toString(undefined,0,5));

//3.��bufferת��ΪJSON����
var json = buf1.toJSON();
console.log(json);

//4.�������ϲ�
var buffer1 = new Buffer('www.buffer1.com');
var buffer2 = new Buffer('www.cainiao.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log('merged buffer3 is ' + buffer3.toString());

//5.�������Ƚ�
var result = buffer1.compare(buffer2);
console.log('compare result id ' + result);

//6.����������
buffer1.copy(buffer2);
console.log('buffer2 content after copy is ' + buffer2);

//7.�������ü�
var bufferSlice = buffer1.slice(0,5);
console.log('buffer1 content after slice is ' + bufferSlice);

//8.����������
var buffer1Length = buffer1.length;
console.log('buffer1 allocation length is ' + buffer1Length);

//9.�Ƚ������������Ƿ����
var isEqual = buffer1.equals(buffer2);
console.log('buffer1 equals buffer2 ? ' + isEqual);

//10.ʹ��ָ��ֵ���buffer
var fillBuffer = new Buffer(20);
fillBuffer.fill('com');
console.log(fillBuffer.toString());