var keyval = []; //array storing alphanumeric keys
while(keyval.length < 5){
    var r = Math.random().toString(30).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    if(keyval.indexOf(r) === -1) 
	{
	   keyval.push(r);
	    
	}}
console.log(keyval);
var finalkeyval = keyval
                .slice(0,5)
                .map((item) => ({keyvalue : item}));
console.log(finalkeyval);
//display new unassigned key
  var i=0;
    function nextKey()
	{
	 var dist= document.getElementById("namevalue").value;
	    if(dist == "" || data.find(data => data.namevalue === dist)){
	    console.log("No new record will be ADDED.");
		 
	    }
	   else{
	    if (i >= keyval.length) i = 0;
        document.getElementById("keyvalue").value = keyval[i];
        console.log(keyval[i]);
        i++;
  // console.log("counter value"+i);
        var count = keyval.length - i;
        document.getElementById("counter").innerHTML = count;
		 
         }
    }

 
var data=[];     //storing key and district
function addElement(){
var ky = document.getElementById("keyvalue").value;
var dist= document.getElementById("namevalue").value;
     if(!data.find(data => data.namevalue === dist)){
     data.push({keyvalue:ky, namevalue:dist,});
	 }
	
     else{
     alert("The District Name already exist.");
	  
    } 
//console.log(data);

     if (data.length > 5){
     alert("No more Unassigned Keys Are Available!!");
     document.getElementById("btn").disabled = true;
    }
}

var newkeyval = [];
function addNew(){
while(newkeyval.length < 5){
    var r = Math.random().toString(30).substring(2, 10) + Math.random().toString(36).substring(2, 10);
    if(newkeyval.indexOf(r) === -1) 
	{
	   newkeyval.push(r);
	    
	}}
console.log("new keys"+newkeyval);
}
function SavetoCSV(){
//store into local storage
    localStorage.setItem("MyKeyList", JSON.stringify(data));
    localStorage.getItem("MyKeyList");
   
   //merge assigned and unassigned keys
  (Array.prototype.push.apply(data,finalkeyval));
	  console.log(data);
		
 //converting json to array of arrays 
  var result = data.map(Object.values);
  
  //var cols = ['Keys', 'District Name'];
   
//var result = val.unshift(cols);
//downloading into excel sheet.
var finalVal = '';
var content = result;
     for (var x = 0; x < content.length; x++) {
      var value = content[x];
    
         for (var y = 0; y < value.length; y++) {
         var innerValue = value[y];
         var result = innerValue.replace(/"/g, '""');
             if (result.search(/("|,|\n)/g) >= 0)
             result = '"' + result + '"';
        if (y > 0)
            finalVal += ',';
        finalVal += result;
    }
    
    finalVal += '\n';
}

var pom = document.createElement('a');
pom.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(finalVal));
pom.setAttribute('download', 'KeyGenerator.csv');
pom.click();
}

//validation for empty district field
function validateEmpty(){
var dist= document.getElementById("namevalue").value;
if(dist == ""){
alert("District Name is Mandatory Field.");
}
}




//console.log("converted json"+convertToJSON);

//myJson = JSON.stringify(keyval);
//console.log(myJson);
// const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// const EXCEL_EXTENSION = '.xlsx';
// console.log(window);

// function downloadAsExcel(){
// const worksheet  = XLSX.utils.json_to_sheet(valarray);
// const workbook = {
// Sheets: {
// 'data': worksheet
// },
// SheetNames: ['data']
// };
// const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx',type: 'array'});
// console.log("excel buffer is created"+excelBuffer);
// saveAsExcel(excelBuffer, 'myFile');
// }
// function saveAsExcel(buffer, filename){
// const data = new Blob([buffer], {type: EXCEL_TYPE});
// saveAs(data, filename+'_export_'+new Date().getTime()+EXCEL_EXTENSION);
// }

// function searchDist(){
// var srchdist = document.getElementById("searchdist").value;
// for (var j=0; j<10; j++){
// if(srchdist === data.namevalue){
// var flag = 1;
// }
// if(flag == 1){
// document.getElementById("displayname").innerHTML = data.keyvalue;
// }
// else{
// alert("District Name Do Not exist");
// }
// }

// }
