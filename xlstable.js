/**
 *类excel风格的表格控件
 * 需求如下：
 * 表格需要有滚动条：上下左右
 * 支持单元格的合并拆分
 * 支持增加行列
 *支持求和
 * 实现方案 表格内容通过div来拼接，不使用table
 */
 function XlsTable(){

 }
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


