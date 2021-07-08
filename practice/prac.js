function Information(ename, age, dept){
    this.ename= ename;
    this.age= age;
    this.dept= dept;
}
Information.prototype.getInfo = function(){
    return document.write('Information about Employee: '+'<br>'+this.ename+'<br>'+this.age+'<br>'+this.dept+'<br>');

}
var e1= new Information('Ramy',24,'HR');
var e2= new Information('Nary',29,'PMO');
e1.getInfo(); 
e2.getInfo();
//document.write('Information about Employee: '+'<br>'+e1.getInfo()+'<br>'+e2.getInfo());