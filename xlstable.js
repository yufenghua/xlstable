/**
 *类excel风格的表格控件
 * 需求如下：
 * 表格需要有滚动条：上下左右
 * 支持单元格的合并拆分
 * 支持增加行列
 *支持求和
 * 实现方案 表格内容通过div来拼接，不使用table
 * 构造方法
 *@param  window对象
 *@param 父节点对象
 *@param 宽
 *@param 高
 *@param 行高
 *@param 列宽
 */
 function XlsTable(wnd,parentEle,width,height,rowHeight,colWidth,rowCount,colCount){
 	this.wnd=wnd;
 	this.parentEle=parentEle?parentEle:wnd.document.body;
 	this.doc=this.wnd.document;
 	this.width=width?width:'100%';
 	this.height=height?height:'100%';
 	this.rowHeight=rowHeight?rowHeight:'20px';
 	this.colWidth=colWidth?colWidth:'20px';
 	this.rowCount=rowCount?rowCount:3;
	this.colCount=colCount?colCount:3;
 	this.initUI();
 }
 /*初始化ui界面*/
 XlsTable.prototype.initUI=function(){
	this.con=this.doc.createElement('div');
	this.parentEle.appendChid(this.con);
	for (var i = 0; i < this.rowCount; i++) {
		for (var ij= 0; j< this.colCount; j++) {
			this[i]
		};
	};
 };
 /**
  *获取当前的行数
  */
XlsTable.prototype.getRowCount = function() {
 	// body...
 };
 /**
  *获取列数
  */
 XlsTable.prototype.getColCount = function() {
 	// body...
 };
 /**
  *增加一行
  *@param index 索引
  */
 XlsTable.prototype.addRow = function(index) {
 	// body...
 };
 /**
  *增加一列
  *@param 索引
  */
 XlsTable.prototype.addCol = function(index) {
 	// body...
 };
 /**
  *合并单元格 
  */
 XlsTable.prototype.merge=function(startRowIndex,startColIndex,endRowIndex,endColIndex){

 };
 /**
  *获取行
  */
 XlsTable.prototype.getRow=function(index){

 };
 /**
  *获取一个表元
  *@param rowIndex 行索引
  *@param colIndex 列索引
  */
 XlsTable.prototype.getCell=function(rowIndex,colIndex){

 };
 /**
  *行对象
  */
 function XlsRow(){

 }
 /**
  *列对象
  */
 function XlsCol(){

 }
 /**
  *单元格
  */
 function XlsCellBase(){

 }
 /**
  *合并单元格
  */
 function XlsCellMulti(){

 }


