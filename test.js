/**
 * @author Michael Malone
 */


//Give click event to button using only Javascript, not inline onclick attribute on the elememnt


/*****VARIABLES******/

//What happens when I declaire a variable like this and then declaire the same variable name 
//Inside of a function without the "var" keyword
var myVar = "Some value";

function someFunction () {
    myVar = "Different Value";
    myVar0 = "Extra Value";
    //console.log(myVar);
}

someFunction();
//console.log(myVar, myVar0);


//what will be the results from this fullName variable be?
var fullName = "Mike";

var obj = {
    fullName: "Elijah",
    prop: {
        fullName: "Erin",
        getFullname: function () {
            return this.fullName;
        }
    }
};


function tester () {
    var test = obj.prop.getFullname();
    //console.log("From tester function", test);
}
tester();

//Assined to globle variable
var testObj = obj.prop.getFullname;
testObj();
console.log("From Variable", testObj());

//console.log('Global fullName value', testObj());

//What will be the value of myVar? Undeclaired variable
function testFunction () {
    myVar = "Hello";
}
testFunction();
console.log(myVar);


//WHat are circular references?
// How can you prevent them
// WHat do you do to ensure proper memory managment takes place
// HOw can you tell is a number is divisible by another number 


/********Execution Phase...What happens and why?***********/

//Why am I able to reference the full value of the function before it's been defined?

if (typeof a === null) {
    console.log('A is NOT in memory, FALSE');
}else {
    console.log('A is in memory, TRUE');
}

var a ='hello';

b('Mike');

function b (name) {
    return name;
}

var a = 'Mike';

console.log('B', b('Mike'));

//What's the value of the console log of cVar? What happens to variables during the first phase that's differentf from functions?
console.log('value of cVar:', cVar);

var cVar = 'Some crazy thing';



/********Closure***********/

//How does closure work in Javascript?
//Just get answer from candidate

//Do you know what an immediately invoked function expression is?  Why are these good for your code?

var myVar1 = "First Value";

var MyObj = (function () {
    var myVar2 = "Second Value";
    
    //console.log(myVar1, myVar2, myVar3);
    function MyFunction () {
        var myVar3 = "Third Value";
        return myVar3
        //console.log(myVar1, myVar2, myVar3);
    }
    
    return {
        myVar3: MyFunction()
    };
    
    return MyObj;
}());


(function () {
    var myVar2 = "Second Value";
    
    //console.log(myVar1, myVar2, myVar3);
    function MyFunction () {
        var myVar3 = "Third Value";
        return myVar3;
        //console.log(myVar1, myVar2, myVar3);
    }
    
    return {
        value: MyFunction()
    };
    
}());



function testFunction() {
    var myVar2 = "Second Value";
    
    //console.log(myVar1, myVar2, myVar3);
    function MyFunction (val) {
        var myVar3 = "Third Value";
        //console.log(myVar1, myVar2, myVar3);
    }
}
testFunction();

//Return value of myVar
function testFunction() {
    var myVar2 = "Second Value";
    
    //console.log(myVar1, myVar2, myVar3);
    function MyFunction () {
        var myVar3 = "Third Value";
        return myVar3;
        //console.log(myVar1, myVar2, myVar3);
    }
    
    return {
        value: MyFunction()
    };
}

 
//console.log(myVar1, myVar2, myVar3);

//First log will be "First Value", "Second Value", "undefined";
//Second log will be "First Value", "Second Value", "Third Value";
//Third log will be "First Value", "undefined", "undefined";


//Create a constuctor
function Person (name) {
    this.name = name;
    
    this.walking = function () {
        console.log('Walking');
    };
}


function Student (name) {
    Person.call(this, name);
}

Person.prototype = {
    constructor: Person,
    walk: function () {
        console.log("Walking");
    }
};

Person.prototype = {
    constructor: Person,
    walk: function () {
        console.log("Walking");
    }
};
//How does the prototype chain work?  What is the advantage of using the prototype chain?

//Make a new intance of Person
var bob = new Person("Bob");
//Make the person walk
bob.walk();

//What is an object litteral?
var Person = {
    walk: function () {
        console.log("Walking");
    }
};

Person.walk();
//How would you use either pattern

//What is a private function? How can I get a vriable value from a private function?

var MyObject = (function () {
    
    function getTheVar () {
        var theVar = "The private value";
        return theVar;
    }
    
    return {
        theVar: getTheVar()
    };
   
}());


var MyModule = (function () {
    'use strict';
    
    function MyModule (args) {
        this.args = args
    }
    
    MyModule.prototype.someMethod = function () {
        console.log('Some stuff');
    };
    
    return MyModule;
    
}());

var theObj = MyObject;
console.log("Revealing private", theObj.theVar);

//What is strict mode?  WHy should you always use it?


function MyConstructor () {
    var method = function () {
        console.log("Public function");
    };
}

//SLICE AND SPLICE Arrays
var myArray = ["Mike", "Erin", "Elijah", "Jamie", "Isaiah", "Frank"];
var myArray2 = myArray.splice(0, 3);//Once you splice it, it mutates the array
var myArray3 = myArray.slice(0, 3);//Once you slice it, it does NOT mutate the array
//myArray.pop() gives you the last index of the array
console.log ("myArray:", myArray, "Spliced version:", myArray2, "Sliced Version:", myArray3);

function TheObject (arg) {
    this.arg = arg;
}

TheObject.prototype = {
    constructor: TheObject,
    test: function () {
        console.log("Value", this.arg);
    }
};

//Namespaceing an Object 
var Aofl = Aofl || {};

Aofl.corejs = Aofl.corejs || {};

Aofl.corejs.myObject = new TheObject("Fred");

Aofl.corejs.myObject.test();


var myModule = (function () {
    
    function Person (name) {
        this.name = name;
        
        var privteMethod = function () {
            var privateVar = 'private';
            return privateVar;
        };
        
        return {
            privilaged: privteMethod()
        };
    }
    
    Person.prototype.sayHi = function () {
        console.log('Hi my name is' + this.name); 
    };
    
    return Person;
}());

var ResponseHandler = (function () {
    'use strict';
    
    function ResponseHandler (deferred, url, payload) {
        return {
            deferred: deferred,
            url: url,
            requestPayload: payload,
            success: function (response) {
                response === "TRUE" ? console.log('true') : console.log('false'); 
            },
            error: function (error) {
                this.reject(error);
            },
            reject: function (error) {
                //_this.deferred.reject(error);
                console.log('REJECTED');
            }
        };
    }
    var rh = ResponseHandler("deferred", 'url/for/me', {me: 'Mike'});
    rh.success('FALSE');
    rh.error('FALSE'); 
    
    return ResponseHandler;
}());



/*
console.log(ResponseHandler("deferred", 'url/for/me', {me: 'Mike'}));

var rh = ResponseHandler("deferred", 'url/for/me', {me: 'Mike'});
rh.success('TRUE');
rh.error('FALSE');*/


//Aggregation Example:

(function () {
    'use strict';
    
    //This constructor will use the others as aggrgates
    //car.js takes on the aggrigates
    function Car (tires, engine, doors) {
        this.tires = tires
        this.engine = engine
        this.doors = doors
        return true;//Returns a valid state of the constructor
    }
    
    //tires.js
    function Tires (rims, style) {
        return {
            rims: rims,
            style: style
        };
    }
    
    //engine.js
    function Engine (cylindars, horsepower) {
        return {
            cylindars: cylindars,
            horsepower: horsepower,
            start: function () {
                console.log('Start'); 
            }
        };
    }
    
    //doors.js
    function Doors (type, automatic) {
        return {
            type: type,
            automatic: automatic,
            open: function () {
                console.log('Open door');
            }
        };
    }
    
    //ford.js
    var tires = new Tires("Chrome", "Wide");
    var engine = new Engine("8", "450");
    var doors = new Doors("Suicide", false);
    
    var ford = new Car(tires, engine, doors);
    
    
    console.log("Car:", ford);
    
}());

//Regular Expressions
(function () {
    'use strict';
    
    var RX = {
        match: function (string) {
            //'/'+string+'/'.test('cat');
            //'/\[A-Z]\b/'.test(string);
            '/1\+1=2/'.match();
            console.log('/1\+1=2/'.match('1'));
            console.log(/Mike/.test(string));
            console.log(/^A/.test(string));//Matches the first letter
            console.log(/e$/.test(string));//Matches the last letter
            console.log('/a+/'.match('a'));//Matches all instances of the indicated letter
        }
    };
    
    RX.match('A That is my boy Sean');
    RX.match('an ode');
    RX.match('Mike');
    RX.match('aaaaaaaaa22');
}());

//Chaining methods example
(function () {
    'use strict';
    
    var SiteMethods = {
        currentValue: "",
        numberObj: "",
        increase: function (val) {
            if (typeof val !== 'number') {
                console.log(typeof val);
                return;
            }else {
                this.currentValue = val;
                console.log("Increase is called with a vallue passed in of ", val);
            }
            return this;
        },
        createObject: function () {            
            var obj = {};
            for (var i = 0; i < this.currentValue; i++) {
                obj['number'+i] = i;
                this.numberObj = obj;
            }
            console.log('Value of the object:', this);
            return this;
        }
    };
    
    SiteMethods.increase(22).createObject();
}());

//Use of bind() vs passing parent object reference of 'this
(function () {
    'use strict';
    
    var EventTest = {
        init: function () {
            if (window.addEventListener) {
                window.addEventListener('load', this.checkEvent, true);
            }
        },
        checkEvent: function (e) {
            var targ = e.target;
            console.log('Value of event target', targ, EventTest.testVal);
        },
        testVal: "The Test Value"
    };
    
    //EventTest.init();
    
    function EVTest () {
        //empty constructor
    }
    EVTest.prototype = {
        init: function () {
            if (window.addEventListener) {
                window.addEventListener('load', this.checkEvent, true);
                console.log('Value of this:', this.checkEvent);
            }
        },
        checkEvent: function (e) {
            var targ = e.target;
            console.log('Value of event target', targ, EVTest.prototype.testVal);
        },
        testVal: "The Test Value from constructor" 
    };
    
    var evt = new EVTest();
    evt.init();
}());

(function () {
  'use strict';
  
  //Faster than a for loop for string concatenation.
  var list = ['Mike', 'Erin', 'Elijah', 'Jayden'];
  var group = '<ul><li>'+list.join('</li><li>')+'</li></ul>';
  var test = list.join(': ');
  
  console.log('group', test);
  
  
  function MyNewObject(name, age) {
    this.name = name;
    this.age = age;
  }
  
  MyNewObject.prototype = {
    constructor: MyNewObject,
    getName: function () {
      for (var name in this) {
        if (this[name] === this) {
          return this;
        }else {
          console.log('you are crazy', this.parent);
        }
      }
    }
  };
  //Only works when global and will return the variable name as a string
  var mno = new MyNewObject('mike', '41');
  console.log('THE MNO', mno.getName());
}());


(function () {
  
  //typeof vs === undefined
  'use strict';
  var test = {};
  test.init = function () {
    console.log('Hey you');
  };
  
  console.log('Value of undefined', typeof test.hello === 'undefined');
}());

(function (val) {
  'use strict';
  
   var loginRequired = {
      'dashboard': 'dashboard',
      'promotional-assets': 'promotional-assets',
      'my-account-partner': 'my-account-partner',
      'partner-accounts': 'partner-accounts',
      'my-account': 'my-account',
    };
    
    //Better than nested || checks for value between the ()    
    if (loginRequired[val]) {
      console.log('TEST OBJECT LITTERAL VALUE:', loginRequired[val]);
    }else {
      console.log('ITs NOT A KEY IN TEST OBJECT', loginRequired[val]);
    }
}('partner-fuck'));


//MODULE GENERATION
var MyModules = (function Manager() {
  'use tsrict';
  
  var modules = {};//store modules on keys here
  //Define function for creating modules
  
  /*
   * @param {String} name:  name of the module
   * @param {Array} deps:  Array of dependencies the module can use
   * @param {Function} impl:  the function that will constain the scope of your module and it's functinality'
   * 
   */
  function define(name, deps, impl) {
    var length = deps.length;     
    for (var i = 0; i < length; i++) {
      deps[i] = modules[deps[i]];
      console.log('deps:', deps[i], 'modules:', modules[deps[i]]);
    }
    modules[name] = impl.apply(impl, deps);
    console.log('modules', modules);
  }
  
  //Returns the modules object with a key added (name which comes from the getModule method) that will eventually be assigned the 
  //value of the function that will contain the scope of the module you create
  //When this is called, it returns the value of the key set on the modules object and it's value will be exposed'
  function getModule(name) {
    return modules[name];
  }
  
  return {
    define: define,
    getModule: getModule
  };
}());

//Passing MyModules as a dependency to thie IIFE
(function TestModulesOut(MyModules, window) {
  'use strict';
  
  //define your module here first.  It sets a key on the private module object within MyModules
  MyModules.define('testModule1', [window], function (window) {
    'use strict';
    
    var TestMod = {
      init: function initMethod() {
        console.log('Initializing the testModule1')
      }
    };
    
    return {
      init: TestMod.init
    };
  });
  
  //The variable used as your module reference MUST match the name passed in to .getModule()
  var testModule1 = MyModules.getModule('testModule1');
  testModule1.init();
  console.log('The TestModule: testModule1', testModule1);
  
}(MyModules, window));


var globalVariable = 'Global';
var globalVariable2 = 'Global 2';

(function IIFE() {
  'use strict';
    
  function safeAndSound (val1, val2) {
    var privateVar = 'Private';
    var privateVar2 = 'Private as well';
    
    //Accept values from outside the scope of this function
    console.log(typeof val1, typeof val2);
  }
  
  //This works because of the rules defined by lexical scope
  safeAndSound(globalVariable, globalVariable2);
}());

//Will produce a reference error because safeAndSound is closed within the IIFE
//safeAndSound('Val1', 'Val2');

(function () {
  'use strict';
  
  //This will run
  declaration('Mike');  
  function declaration (name) {
    var myCoolVariable = 'cool';
    var anotherCoolVariable = 'cool as well';
    
    console.log(name, 'is using a', myCoolVariable, 'variable');
  }
  
  //This will result in a TypeError
  //expression();
  var expression = function expression (name) {
    var myCoolVariable = 'Cool';
    var anotherCoolVariable = 'Cool as well';
    console.log(name+"'s", 'variable is', anotherCoolVariable);
  };
  
  //Your function should not do too many things beyond what it was intended to do
  function getNames(list) {
    var var1 = 'a thing 1';
    var var2 = 'a thing 2';
    var var3 = 'a thing 3'; 
     
    //This is a bad idea
    if (list.indexOf('addresses') !== -1) {
      generateAddressList(list['addresses']);
    }
    if (list.indexOf('planes') !== -1) {
      generatePlanesList(list['addresses']);
    }
    if (list.indexOf('trains') !== -1) {
      generateTrainsList(list['addresses']);
    }
    if (list.indexOf('lions') !== -1) {
      generateLionsList(list['addresses']);
    }
    if (list.indexOf('shoes') !== -1) {
      generateShoesList(list['addresses']);
    }
    if (list.indexOf('bikes') !== -1) {
      generateBikesList(list['addresses']);
    }
    if (list.indexOf('player') !== -1) {
      generatePlayerList(list['addresses']);
    }
    
    function generateAddressList (list) {
      //Logic to generate address list
    }
    
    function generatePlanesList (list) {
      //Logic to generate planes list
    }
    
    function generateTrainsList (list) {
      //Logic to generate trains list
    }
    
    function generateLionsList (list) {
      //Logic to generate lions list
    }
    
    function generateShoesList (list) {
      //Logic to generate shoes list
    }
    
    function generateBikesList (list) {
      //Logic to generate nikes list
    }
    
    function generatePlayerList (list) {
      //Logic to generate players list
    }
    
  }
  
  //Annoymous function callback in .then()
  var RegisterName = {
    place: function (name) {
      http({
        url: 'url/to/endpoint',
        method: 'POST',
        headers: {
          'Content-type': 'json'
        },
        data: {
          'name': name
        }
      })
      .then(function (resp) {
        console.log('Data posted with', name, resp);
      });
    }
  };
  
  //Named function callback in .then()
  var RegisterName = {
    place: function (name) {
      http({
        url: 'url/to/endpoint',
        method: 'POST',
        headers: {
          'Content-type': 'json'
        },
        data: {
          'name': name
        }
      })
      .then(function postSuccess(resp) {
        console.log('Data posted with', name, resp);
      });
    }
  };
  
  
  //Polymorphic inheritence function
  function inherit(childObj, parentObj) {
    var copyOfParent = Object.create(parentObj.prototype);
    copyOfParent.constructor = childObj;
    childObj.prototype = copyOfParent;
  }
  
  //Constructor example.  Constuctor names must start with a capital letter  
  function MyConstructor(args) {
    this.args = args;
    this.staus = 1;
  }
  
  MyConstructor.prototype = {
    constructor: MyConstructor,
    init: function () {
      //Initialize
    },
    updateStatus: function () {
      //update status
      this.status++;
      console.log('Update staus', this.status);      
    }
  };
  
  //Inheritence example from one object to another
  function TheOtherConstructor(args) {
    this.args = args;
    this.type = 'SubClass';
    MyConstructor.call(this, args);
  }
  
  inherit(TheOtherConstructor, MyConstructor);
  
  TheOtherConstructor.prototype.findValue = function () {
    console.log('Find the value of something');
  };
  
  var subClass = new TheOtherConstructor({data1:'Some data', data2:'More data'});
  console.log('Here is your new object', subClass);
  
  //Semicolon example
  
  //Good example
  return {
    pastries: ['cake', 'cookies', 'soda', 'pie', 'ice cream']
  };
  
  //Bad example
  return //Interpreter will implicitly place a semicolon here and stop
  {
    pastries: ['rotten cake', 'spoiled cookies', 'flat soda', 'blackbird pie', 'melted ice cream']
  };
  
  //Modify native JavaScript Objects: Bad idea
  Array.prototye.forEach2 = function () {
    //Logic to destroy the sanity of your co-workers
  };
  
  //Ternary operator for short conditional statements
  var defaultValue = 'Default text';
  
  var myValue = typeof otherValue !== 'undefine' ? otherValue : defaultValue;
  
  
  //Formatting
  //One space after the closing paren
  //Keep opening curly brace on the same line as the closing paren
  function theFunction() {
    //Cool stuff the function does
  }
  
  if (someCondtion) {
    //execute some logic
  }
  
  
  //Inside of my-cool-directive/0.1/index.js
  define('app', function (app) {
    'use strict';
    
    //Custom directive
    app.registerDirective('myCoolDirective', [function () {
      return {
        restrict: 'AE',
        scope: {
          data: '@',
          endpoint: '@',
          title: '@'
        },
        controller: 'MyDirectiveController',
        controllerAs: 'myDirCtrl',
        bindToController: true, //use of you want to bind the controller to this scope
        link: function (scope, element, attrs, ctrl) {
          //Your directive logic goes here for DOM manipulation
        }
      };
    }]);
    
    
    app.registerController('MyDirectiveController', ['coolService', function (coolService) {
      var _this = this;
      
      //Thin controller that relies on a service for some data manipulation
      _this.getData = function (url) {
        coolService.getData(url);
      };
    }]);
  });
    
  
  
  //Service Example
  //cool-service/0.1/index.js
  require.config({
    paths: {
      'cool-service': '/js/cool-service/0.1/index-impl'
    }
  });
  
  define('app', 'cool-service', function (app, coolService) {
    app.registerFactory('coolService', ['$http', coolService]);
  });
  
  
  //Service Implemetation Example:
  //cool-service/0.1/index-impl.js
  define(function () {
    'Use strict';
    
    function CoolServiceFactory(http) {
      var coolService = {
        getData: function (url) {
          http({
            url: url,
            method: 'POST',
            headers: {
              'Content-type': 'json'
            },
            data: {
              'name': name
            }
          })
          .then(function postSuccess(resp) {
            console.log('Data posted');
          });
        }
      };
      
      return {
        getData: coolService.getData
      };
    }
  });
  
}());

var foo = 'Hello';
//Closure Example
(function () {
  'use strict';
  
  var bar = 'World';
  console.log('Inside: ', foo, bar);
  
  var test = [];
  test.push(1);
  test.push(2);
  console.log('test array length: ', test.length);
  
}());

//console.log('Outside: ', foo, bar);

(function () {
  console.log('test 1');
  
  //Settimeout 0 forces it's execution to be last.
  setTimeout(function () {
    console.log('test 2');
  }, 0);
  
  console.log('test 3');
  
  //.split() returns an array of the letters in the string split by whatever you use as a delimeter
  //In this case, the delimeter is an empty string or the space between the letters.
  var string = "I'm a lasagna hog".split('').reverse().join('');
  var pop = "I'm a lasagna hog".split('');
  var tempArr = [];
  
  length = pop.length; 
  for (var i = 0; i < length; i++ ) {
    var reverseIndex = pop.pop();
    tempArr.push(reverseIndex);
  }
  console.log('Reversed', tempArr);
}());

//HackerSchool
(function () {
  'use strict';
  
  function addIndexes(list) {
    var sum = '';
    var length = list.length;
     for (var i = 0; i < length; i++) {
       if (i > 0) {
         sum = list[i-1] + list[i];  
       }
     }
    return sum;
}


  function addIndexes(list) {
    var sum = 0;
    var length = list.length;
    
    /*for (var i = 0; i < length; i++) {
      console.log(sum, "+", list[i], '=');
      sum = typeof list[i] === 'number' ? sum += list[i] : parseInt(sum += list[i]);
      console.log(sum);
    }*/
   
    var listArr = list.split('');
    var length = listArr.length;
    
    sum = listArr.reduce(function (preVal, cVal) {
        return parseInt(preVal) + parseInt(cVal);
    }, 0);
    
    console.log('SUM', sum);
    return sum;
  }
  //console.log(addIndexes([1, 2, 3, 4, 10, 11]));
  //console.log(addIndexes(338, 65, 713, 595, 428, 610, 728, 573, 871, 868));
}());

(function () {
  'use strict';
  

  
    function sum(val) {
      var sum = val;
      
      function calc(val) {
        return sum += val;
        //sum += val;
        //return calc;
      }
      
      /*
      calc.toString = function () {
              return sum;
            };*/
      
      return calc;
    }
    

  
  
  /*function sum(val) {
    
    var sum = val;
    
    function calc(val) {
       sum += val;
       return calc;
    }
    
    calc.toString = function () {
      return sum;
    }
    
    return calc;
    
  }*/
  
  //var theSum = sum(4);
  console.log("Total sum", sum(4)(5));
}());

(function () {
  'use strict';
  
  function Item(x)
  {
    this.x = x;
  }
  
  function numbers()
  {
    var result = new Array(10000);
    for (var i = 0, l = result.length; i < l; ++i)
      result[i] = new Item(i);
    return new Item(result);
  }
  
  function strings()
  {
    var result = new Array(10000);
    for (var i = 0, l = result.length; i < l; ++i)
      result[i] = new Item(i.toString());
    return new Item(result);
  }
  
  function init()
  {
    var numberCache = numbers();
    var stringCache = strings();    
    var documentCache = new Item(document.body.textContent.toLowerCase());
  }
  
  //init();
}());


(function window() {
  'use strict';
 
  var that = {};
  //A prototype-less object, you will not find any _proto on this object.
  //This is functionally safer to use than {} ø is created holding option+o
  var ø = Object.create(null);
  
  function foo (a, b, c) {
    console.log('a:', a, 'b:', b, 'c:', c);
    
    this.prop = 'WTF';
    console.log('Value of this:', this);
  }
  
  function boo() {
    //console.log('Value of this', this);
    console.log('Value of a', this.a);
  }
  
  //Passing null to this can prevent implicit binding to a default object such as window if this were 
  //A global function.  This will prevent unintended globals that get created.
  foo.apply(ø, [8, 5, 7]);
  
  //Curry with bind(..)
  var bar = foo.bind(ø, 2, 2);
  bar(3);
  bar(9);
  console.log(that);
  
  //Indirect this binding
  var a = 2;
  var o = {a: 3, boo: boo};
  var p = {a: 4};
  
  o.boo();
  p.boo = o.boo;
  p.boo();
  
  
  
  
  function isValid(val) {
    var _validlist = ['art', 'find_its', 'coloring', 'painting'];
    
    var idx = 0;
    _validlist.map(function mapIt(key) {
      
      console.log('HERE IS THE KEY', val.match(key));
      if (val.match(key)) {
        if (val.match(_validlist[idx]).input === key) {
          console.log('We have ', key, val.match(_validlist[idx]), _validlist.lastIndexOf(_validlist.length));
          return true;
          //break;
        }else {
          throw new Error('There are no valid activity types found in the payload: activity_info.type');
        }
      }
      idx++;
    });
    
    
    /*for (var i = 0; i < _validlist.length; i++) {
      if (val.match(_validlist[i])) {
        console.log('WE HAVE AN OBJECT');
        if (val.match(_validlist[i]).input === _validlist[i]) {
          console.log('We have ', _validlist[i], val.match(_validlist[i]));
          return true;
          break;
        }else {
          throw new Error('There are no valid activity types found in the payload: activity_info.type');
        }
      }
    }*/
  }
  
  isValid('coloring');
  //console.log('THE REAL VALUE OF THE MATCH', isValid('Blah'));
}());

(function rangeTest() {
  'use strict';
  
  var $scope = {
    level: 9
  };
  var gradeRange = [7, 8, 9, 10];
  
  var grade = null;
  
  function returnGrade(arr) {
    var grades = ['kindergarten', 'first', 'second'];
    console.log('Running check for grade'); 
    
    for (var i = 0; i < arr.length; i++) {
      console.log('in the loop');
      if (arr[i] === $scope.level) {
        console.log('Found a match within range', arr[i]);
        
        switch (arr[i]) {
          case 7:
          grade = grades[1];
          console.log('Got it for'+ grade + 'grade');
          break;
          case 8:
          grade = grades[1];
          console.log('Got it for'+ grade + 'grade');
          break;
          case 9:
          grade = grades[2];
          console.log('Got it for'+ grade + 'grade');
          break;
          case 10:
          grade = grades[2];
          console.log('Got it for'+ grade + 'grade');
          break;
          default: 
          grade = grades[0];
        }
        
        console.log('The value of grade:',grade);
        break;
      }
    }
    
  }
  
  returnGrade(gradeRange);
  
  
}());

(function () {
  'use strict';
  
  var res = document.getElementById('results');
  
  function clickMe (e) {
    console.log('What is the event type ?:', e.type);
    e.target.innerHTML = 'Clicked';
  }
  
  if (window.addEventListener) {
    res.addEventListener('click', clickMe);
  }
  
}());

//Academic JavaScript Test

/*
 * STRING REVERSAL
 */
(function reverseString() {
  'use strict';
  
  var string = 'hello';
  var reversedStringArray = [];
  var reversedString = '';
  var Reverser = {
    init: function init() {
      this.reverse(string);
    },
    reverse: function reverse(str) {
      var stringArray = str.split('');//Convert string to array for browser compatibility
      
      reversedStringArray = stringArray.map(function mapIt(letter, idx, array) {
        console.log('The letter:', letter, idx, array[(array.length - 1) - idx]);
        return array[(array.length - 1) - idx];
      });
      
      reversedString = reversedStringArray.join('');//convert array back to string
      
      console.log('VALUE OF THE REVERSED STRING ARRAY: ', reversedString);
    }
  };
  
  Reverser.init();
}());

/*
 * FIND THE DUPLICATES OF THE ARRAY
 */

(function duplicateArrayValue() {
  'use strict';
  
  var duplicatesArr = ['them', 'they', 'theirs', 'ours', 'yours', 'mine', 'they', 'ours'];
  
  var Reducer = {
    init: function init() {
      this.getDuplicates(duplicatesArr);
    },
    getDuplicates: function getDuplicates(list) {
      var duplcateArr = [];
      var dupObject = {};
      var testdupObject = list.map(function(o){
        console.log('THE o:', o);
        return o;
      });
      
      for (var i = 0; i < list.length; i++) {
        if (dupObject[duplicatesArr[i]]) {
          duplcateArr.push(duplicatesArr[i]);
          console.log('THE DUPLICATES:', duplicatesArr[i]);
        }
        dupObject[duplicatesArr[i]] = duplicatesArr[i];
      }
      
      console.log('The duplicates are:', duplcateArr);
    }
  };
  Reducer.init();
}());


/*
 * FIZZ BUZZ
 */

(function fixBuzz() {
  'use strict';
  
  var Fizz = {
    buzz: function buzz(num) {
      console.log('Prepping Fizz Buzz', num);
            
      for (var i = 0; i < num; i++) {
        if (i % 3 == 0) {
          console.log('Divisible by 3:',(i));
        } 
        if (i % 5 == 0) {
          console.log('Divisible by 5:',(i));
        } 
        if (i % (5*3) == 0) {
          console.log('Divisible by 15:',(i));
        } 
      }
    }    
  };
  
  Fizz.buzz(100);
}());


/*
 * Join Two Arrays
 */

(function joinArrays() {
  'use strict';
  
  var array1 = ['Hello', 'goodbye', 'hola', 'sayonara'];
  var array2 = ['Mihow', 'Ari Gato', 'Danke', 'End'];
  
  var ArrayFuse = {
    join: function join(list1, list2) {
      return list1.concat(list2);
    }
  };
  
  console.log('The new array', ArrayFuse.join(array1, array2));
  
}());

/*
 * Reverse an Array
 * 
 */

(function reversArray() {
  'use strict';
  
  var arrayToReverse = ['Tom', 'Jerry', 'Popeye', 'Bluto'];
  
  var ArrayReversal = {
    reverse: function reverse(list) {
      var tempArray = [];
      console.log('List Pop()', list);
      return list.map(function (str, idx, array) {
        console.log('str:',str, 'idx:',idx, 'array:', array);
        return array[(array.length -1) -idx];
      }) ;
    }
  };
  console.log('Reversed Array', ArrayReversal.reverse(arrayToReverse));
}());


/*
 * Factorial Pattern
 * WORK IN PROGRESS
 */

(function factorial() {
  'use strict';
  
  var Factorial = {
    init: function init(num) {
      var tempSet = 0;
      var previousValue = 0;
      var currentValue = 0;
      var resultOfCurrentTimesPrevious = 0;
      var storedMultiplier = 0;
      var overallStored = 0;
      
      for (var i = num; i > 0; i--) {
        tempSet = i-1;
        currentValue = i;
        previousValue = i+1;
        
        if (i >= 0) {
          if (i <= num -1) {
            console.log('Hurray for ',i);
            resultOfCurrentTimesPrevious = currentValue*previousValue;
            //storedMultiplier = resultOfCurrentTimesPrevious * (i-1);
            overallStored += storedMultiplier*(i-1);
            console.log('Factorial:', 'PreviousValue', previousValue, 'X Currentvalue:', currentValue, '=', resultOfCurrentTimesPrevious, 'storedMultiplier:', storedMultiplier, 'overallStored:', overallStored);
          }
          storedMultiplier = resultOfCurrentTimesPrevious * (i-1);
        }
      }  
    }
  };
  
  Factorial.init(10);
}());

/*
 * Write a binary function that adds two values and returns them
 * Write a function that retuns a multiplied value 
 * Write a function that is callable with two invocations
 * Write a function that takes a binary function as an argument and is callable with two invocations
 */

(function addSum() {
  'use strict';
    
  var Binary = {
    add: function add(a, b) {
      return a + b;
    },
    mul: function mul(a, b) {
      return a*b;
    },
    doubleInv: function doubleInv(a) {
      return function(b) {
        return a+b;
      };
    },
    doubleInvBinary: function doubleInvBinary(binary) {
      return function(a) {
        return function (b) {
          return binary(a, b);
        };
      };
    }
  };
  
  console.log('add', Binary.add(5, 6));
  console.log('mul', Binary.mul(5, 6));
  console.log('doubleInv', Binary.doubleInv(5)(6));
  console.log('doubleInvBinary', Binary.doubleInvBinary(Binary.mul)(5)(6));
  
}());

/*
 * Write a chainable function
 */

(function chainable() {
  'use strict';
  
  var Chainable = {
    init: function init() {
      console.log('init chain', this);
      return this;
    },
    method1: function method1() {
      console.log('Method 1', this);
      return this;
    },
    method2: function method2() {
      console.log('Method 2', this);
      return this;
    },
  };
  
  Chainable.init()
  .method1()
  .method2();
}());
