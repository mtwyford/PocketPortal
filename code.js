newDateCheck();
loadDuties();
setSize("screen1",320,480);
setSize("screen2",320,520);
setSize("screen3",320,520);
//loadDuties();
setText("btnDuties", "Founders: White\nLibrary/Det:Guillerman\nCommons: Ancalmo\nGym: Bardon");
onEvent("image1", "click", function() {
  open("https://www.7hills.org");
});
onEvent("btnBack", "click", function() {
  setScreen("screen1");
});
onEvent("btnAttend", "click", function() {
  open("https://portals.veracross.com/sevenhills");
  createRecord("freqTable", {name:'TAM'}, function(record) {
  });
});

onEvent("button1", "click", function( ) {
  setScreen("screen1");
});
onEvent("image2", "click", function() {
  open("https://www.7hills.org");
});
onEvent("btnInfo", "click", function() {
   setScreen("screen3");
});
onEvent("btnBackScr3", "click", function() {
  setScreen("screen1");
});
/*
function drawCalendar() {
  setActiveCanvas("canvas1");
   //vertical lines
   line(5,5,5,350);  //left side  
   line(295,5,295,340); //right
   line (150,5,150,340);
   //horizontal lines
  for (var y=1;y<10;y++){
    line( 5,(y*35) ,295 ,(y*35) );
  }
}
drawCalendar();
*/
onEvent("btnNext", "click", function() {
  open("https://app.frontlineeducation.com/");
});
onEvent("btnAtlas", "click", function() {
  open("https://7hills.rubiconatlas.org");
});
onEvent("button3", "click", function() {
  open("https://app.edmodapp.com/login");
  
});


//https://app.frontlineeducation.com/
//***********************
//help desk buttons
//***********************
onEvent("button2", "click", function( ) {
  //open main samage page
  open("https://7hills.samanage.com/login");
});
onEvent("button16", "click", function() {
  //open link to android app
  open("https://play.google.com/store/apps/details?id=com.solarwinds.service_desk");
});
onEvent("button17", "click", function( ) {
  open("https://apps.apple.com/us/app/solarwinds-service-desk/id1451698030");
});
onEvent("button8", "click", function( ) {
  setScreen("screen4");
});


onEvent("button13", "click", function() {
  open("https://docs.google.com/spreadsheets/d/1bzWNPQDNct3umcMQJ_oF7zy5Z8efcaF1zhVh3TtmD_s/edit#gid=0");
});
onEvent("button12", "click", function() {
  open("https://docs.google.com/spreadsheets/d/1dEoT3DgsMroV0AX6xbO1qF83UrBaL7gBm9emzHp-vmM/edit#gid=0");
});
onEvent("button14", "click", function( ) {
  setScreen("screen2");
  
});
onEvent("button15", "click", function( ) {
  setScreen("screen1");
});
onEvent("button18", "click", function( ) {
	open("https://docs.google.com/spreadsheets/d/1amdro_azA3kiagJ_pjyG6axZt8ZBsP5EGFtUDvoW76g/edit#gid=0");
	console.log("button18 clicked!");
});
onEvent("label12", "click", function( ) {
	open("mailto:marcus.twyford@7hills.org?Code.orgApp");
});
onEvent("button10", "click", function( ) {
	setScreen("screen9");
});
onEvent("button23", "click", function( ) {
	open("https://docs.google.com/document/d/1aVL-bvtAR76Z_w-gDqYQ5wpjLOuTSIJdd-Yu-YBBMls/edit?tab=t.0");
});
onEvent("button24", "click", function( ) {
	open("https://docs.google.com/spreadsheets/d/1fYo_Bu8ZC6oVJwqIQEJn_NyyNEgFV9cpgVKe5aEGmaw/edit?gid=0#gid=0");
});
onEvent("button4", "click", function( ) {
	console.log("Rotating Schedule agenda");
	open("https://docs.google.com/spreadsheets/d/17XilVmkBaXf1gEJgARjRpL6fdWi2mwiKxRlQ9vJD0m8/edit?gid=1710157376#gid=1710157376");
});
onEvent("button7", "click", function( ) {
	setScreen("screen5");
	console.log("affinity groups");
});
onEvent("button5", "click", function( ) {
  open("https://docs.google.com/document/d/13a5ci7GEaw0z4K_ipW0GBXr3Uvt0b1hYR1hf-xAxjyM");
	console.log("Lockers clicked!");
});
onEvent("button28", "click", function( ) {
  setScreen("screen1");
});
onEvent("button29", "click", function( ) {
  setScreen("screen1");
});

function loadDuties() {
  readRecords("duties", {}, function(records) {
    for (var i=0; i < records.length; i++) {
      if (records[i].frDate <= todDate) {
        console.log((todDate + "::") + records[i].frDate);
        console.log((todDate + "?<") + records[i].endDate);
        
        console.log(records[i].id + ':::' + records[i].Founders);
        setText("btnDuties", 
        ("Founders: "+records[i].Founders+ "\nCommons: "+records[i].Commons +
         "\nGym: "+records[i].Gym+"\nLib/Det(286): ")+(records[i]).LibDet);
        }
      }
  });
  
}


var dateCheck;
var month;
var day;
var year;
var todDate;

newDateCheck();
console.log("Date: " + todDate);

//gets the current date
function newDateCheck(){
  dateCheck = new Date();
  month = dateCheck.getMonth() + 1;
  day = dateCheck.getDate();
  year = dateCheck.getFullYear();
  //todDate = month + '/' + day + '/' + year;
  todDate = year + '-' + month + '-' + day;
}
onEvent("btnHome", "click", function( ) {
	setScreen("screen1");
});
onEvent("button27", "click", function( ) {
	setScreen("screen6");
	createRecord("freqTable", {name:'TAM'}, function(record) {
	 });
});
onEvent("image7", "click", function( ) {
	setProperty("image7", "hidden", true);
});
onEvent("btnStudyHall", "click", function( ) {
	setScreen("screen7");
	//showStudyHall();
});
onEvent("button30", "click", function( ) {
	setScreen("screen1");
});
onEvent("btnQ1Q2", "click", function( ) {
	setProperty("imgQ1Q2", "hidden", false);
	setProperty("imgQ3Q4", "hidden", true);
});
onEvent("btnQ3Q4", "click", function( ) {
	setProperty("imgQ1Q2", "hidden", true);
	setProperty("imgQ3Q4", "hidden", false);
});
var advisor;
var grade;
onEvent("ddAdvisor", "change", function( ) {
	console.log("Selected option: " + getText("ddAdvisor"));
	advisor = getText("ddAdvisor");
	findAdvisor(advisor);
});
var advisory;
function findAdvisor(advisor) {
  advisory = "";
  readRecords("students", {}, function(records) {
    for (var j =0; j < records.length; j++) {
      if ((records[j]).Advisor==advisor) {
        advisory = advisory + (records[j]).Last+", "+ (records[j]).First+ "  ("+ (records[j]).Grade+")"+"\n";
      }
    }
    console.log(advisory);
    setText("txtAdvisory", advisory);
  });
}
onEvent("button32", "click", function( ) {
	setScreen("screen1");
	console.log("button32 clicked!");
});
var stuSearch;
onEvent("btnSrchStudent", "click", function( ) {
	stuSearch = getText("txtStuSearch");
	console.log("btnSrchStudent clicked!");
});
onEvent("ddGrade", "change", function( ) {
	console.log("Selected option: " + getText("ddGrade"));
});
onEvent("btnLibGuides", "click", function( ) {
    open("https://7hills.libguides.com/home");
	console.log("button22 clicked!");
});
function showStudyHalls() {
  console.log("burp");
  createCanvas("stdy", 320, 450);
  setActiveCanvas("stdy");
  rect(20, 50, 275, 320);
  setFillColor("yellow");
  rect(20, 50, 275, 50);
  setFillColor("white");
  rect(20, 100, 275, 75);
  rect(20, 175, 275, 75);
  rect(20, 250, 275, 75);
  rect(20, 325, 275, 75);
  line(85, 50, 85, 400);
  line(190, 50, 190, 400);
  var lst = ["aday","bday","b1","b2","b3","b4"];
  var ll = ["A Day","B Day","1","2","3","4"];
  for (var i = 0; i < 6; i++) {
      textLabel(lst[i], ll[i]);
      setProperty(lst[i], "font-size",20);
  }
  setProperty(lst[0], "x", 90);
  setProperty(lst[0], "y", 55);
  setProperty(lst[1], "x", 85);
  setProperty(lst[1], "y", 55);
  setProperty("b1","width",100);
  setProperty("b1", "x", -175);
  setProperty("b1", "y", 115);
  setProperty("b2","width", 50);
  setProperty("b2", "x", 30);
  setProperty("b2", "y", 150);
  setProperty("b3","width", 50);
  setProperty("b3", "x", -30);
  setProperty("b3", "y", 230);
  setProperty("b4","width", 50);
  setProperty("b4", "x", -90);
  setProperty("b4", "y", 300);
}
onEvent("button30", "click", function( ) {
	console.log("button30 clicked!");
});
