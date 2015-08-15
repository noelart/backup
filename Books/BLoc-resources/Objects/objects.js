var myObj = {
	str: "myString",
	rand: Math.random(),
	obj: new Object()
};

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj.str 							= "This string works";
myObj.rand 							= Math.round(Math.random() * 100);

console.log(myObj);

console.log("\n" + "===================" + "\n")

var myObj2 = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj2.type              = "Dot syntax";
myObj2["date created"]   = "String with space";
myObj2[str]              = "String value";
myObj2[rand]             = "Random Number";
myObj2[obj]              = "Object";
myObj2[""]               = "Even an empty string";

console.log(myObj2);