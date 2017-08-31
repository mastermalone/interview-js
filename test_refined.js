/**
 * @author Michael Malone
 */

/*
 * JS Test for front-end candidates 
 */

//The Simple stuff.  Use this to weed out people that are just too junior.  We need juniors, but not beginners.

/*
 * BEGIN BASIC FUNDAMENTAL TEST
 */
 
/*
 *Question 1: What happens when I declaire a global variable and then declaire the same
 *variable name within a function?
 * 
 * Question 2:  What happens if I declair a variable without the 'var' keyword?
 */

//Ask them if this variable can be accessed outside the funtion
//If they answer incorrectly, move on but first explain how this becomes a global if you are not in strict mode.
var myVar = "Some value";

function someFunction () {
    myVar = "Different Value";
    myVar0 = "Extra Value";
}

someFunction();
//console.log('what is the value of myVar0?', myVar0); 

/*
 * Arrays and for loops
 * Question: What is an array?
 * Question: What is a for loop?
 * Task:  Create an array of names.
 * Task: Create a for loop that itterates through the array
 * Bonus: Dynamically create an unordered list that contains the text from the array
 * Bonus points for using Array.map()
 */

(function arraysAndForLoops() {
  'use strict';
  
  var myCoolArray = ['Mike', 'Erin', 'Elijah'];
  var length = myCoolArray.length;
  var i = 0;
  var results = document.getElementById('results');
  var ul = document.createElement('ul');
  var text = null;
  var li = null;
  var frag = document.createDocumentFragment();
  var frag2 = document.createDocumentFragment();
  
  //For Loop version
  for(i; i < length; i++) {
    console.log('forloop through array:', myCoolArray[i]);
    text = document.createTextNode(myCoolArray[i]);
    li = document.createElement('li');
    li.setAttribute('data', myCoolArray[i]);
    li.appendChild(text);
    frag.appendChild(li);
  }
  
  ul.appendChild(frag);
  results.appendChild(ul);
  
  
  //Array.map version
  myCoolArray.map(function mapIt(item, idx, array) {
    console.log('Map though the array', item);
    text = document.createTextNode(item+' mapped');
    li = document.createElement('li');
    li.setAttribute('data', item);
    li.appendChild(text);
    frag2.appendChild(li);
  });
  
  ul.className = 'loop-list';
  ul.id = 'loop-result';
  ul.appendChild(frag2);
  results.appendChild(ul);
}());


/*
 * EVENTS
 * Event delegation.  Using one event listener to trigger events on multiple elements
 * Question to ask: Is the person familiar with adding event listners nativley in JavaScript?
 * Question 2: Is the person familiae with Event delegation?
 * Task in JS Fiddle: Have the person create an event delgation example
 */

(function eventDelegation() {
  'use strict';
  
  var lr = document.getElementById('loop-result');
  
  var Events = {
    init: function init() {
      if (window.addEventListener) {
        if (lr) {
          lr.addEventListener('click', Events.delegate, true);
        }
      }
    },
    delegate: function delegate(e) {
      if (e.target.hasAttribute('data')) {
         console.log('Clicked on ', e.target.getAttribute('data'));
      }
    }
  };
  
  Events.init();
}());

/*
 * Question: What will be the results from this fullName variable be?
 * This section demonstrates the person's understanding of 'this' and how it's value is assigned based on 
 * execution context
 */
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

//Using this tester function, what will the value of the function be
function fullNameValue () {
  return obj.prop.getFullname();
}
console.log('fullNameValue:', fullNameValue());

//What if We assigned the getFullName method to a variable and then execute it?  What would the value be?
//Notice that I did not execute the getFullname method right away.
//Execution context is the key to understanding how this works.  Where wa the method envoked is the clue.
var fullNameVar = obj.prop.getFullname;
console.log('fullNameValue from global variable: ', fullNameVar());


/*
 * Some questions to ask:
 * What are circular references? How can you prevent them?
 * What can you do to ensure proper memory managment when writing code?
 * How can you tell is a number is divisible by another number using JavaScript 
 */

/*
 * COMPILE PHASES:
 * Question (variable section): Based on the variable declaration below, do you believe that 'a' will be null or 
 * ***will 'a' be in memory? 
 * Question (function section): Why am I able to reference the full value of the function before it's been defined?
 * Tip: Se if the person can in some way describe the compile phases (hoisting etc.).  There are two. 
 * One to create a space in memory for the variables and functions, the other to assign values to the variables
 * Functions get the entire value during the firts phase
 */

(function compilePhases() {
  'use strict';
  
  //Variable section
  if (typeof a === null) {
    console.log('A is NOT in memory, FALSE');
  }else {
    console.log('A is in memory, TRUE');
  }
  
  var a = 'hello';
    
  //function section....
  /*
   * Why is is possible to call a function before it has been declared?
   * What is another method to write a function that ensures it cannot be called unless it has been declaired
   * NOTE: (Look for function expression to be the answer.  The answer is a a given since we have already discussed variable assigment)
   */
  
  whyIsThisPossible(a);
  console.log(whyIsThisPossible(a));
  
  function whyIsThisPossible(string) {
    return string + ', this is possible because _________';
  }
  
}());

/*
 * CLOSURE
 * Ask the person if they know what closure is and how it works.
 * See if they can describe it and then create an example in JS fiddle
 * A closure is a nested function that has"closure" over it's parent function.
 * It has access to the parent functions scoped varibles which, when returned, can be 
 * accessed via envoking the returned closure.
 * Normally, you would not have access to private vairiables values without the use of closure
 */

(function closure() {
  'use strict';
  
  var theClosure = function theClosure() {
    var privateVar = 'HAHAHA, I am private!';
    
    var nestedFunction = function nestedFunction(value) {
      return value;
    };
    
    return nestedFunction(privateVar);
  };
  
  var showTheClosureValue = function showTheClosureValue(closure) {
    console.log('The value of the closure is:', closure());
  };
  
  showTheClosureValue(theClosure);
}());

/*
 * IMEDIATELY INVOKED FUNCTION EXPRESSIONS AND REVEALING MODULES
 * Ask the candidate what IIFE's are and why we should use them in our code.
 * Have the candidate provide you an example within JS Fiddle
 * USES:  IIFE's are used to create scope for your code so you do not pollute the global namespace 
 * You can also use IIFE's for creating modules as seen by the two examples below.
 * NOTE: You will need a server for the AJAX example to work
 */

(function IIFE() {
  'use strict';
  
  //The first module is a simple AJAX caller used to load a JSON file
  //module1.js
  var Module1 = (function module1() {
    return function Module1() {
      var ModuleContent = {
        
        /*The ajax function accepts a config object for its passed in parameters
         * Config objets for parameters are a nicer approach to inserting numerous argumens between the parentheseis
         */
        ajax: function ajax(config) {
          var url = null;
          var req = null;
          
          if (typeof config !== 'object') {
            return;
          }else {
            url = config.url;
            req = new XMLHttpRequest();
            console.log('getting data from ', url);
            req.onreadystatechange = function getRequestData(data) {
              if (req.readyState === 4) {
                //req.getResponseHeader('Content-Type');
                if (req.status === 200) {
                  if (typeof config.callback === 'function') {
                    config.callback(JSON.parse(req.responseText));
                  }
                }
              }
            };
            req.open('GET', url, true),
            req.send();
          }
        }
      };
      return {
        ajax: ModuleContent.ajax
      };
    }();
  }());
  
  //The second module loads the first as a dependency
  //The module parameter holds the value of Module1 which is passed in to the IIFE
  //module2.js
  var Module2 = (function module2(module) {
    return function Module2() {
      var ModuleContent = {
        init: function init() {
          console.log('initializing Module2');
        },
        getData: function getDate(url) {
          console.log('Sending the url or the JSON to the dependency module from ', url);
          /*The module param of this IIFE holds the value of the dependency that gets passed in.
           */
          
          module.ajax({
            url: url,
            callback: ModuleContent.useData
          });
        },
        useData: function useData(data) {
          console.log('THE DATA: ', data);
        }
      };
      return {
        init: ModuleContent.init,
        getData: ModuleContent.getData
      };
    }();
  }(Module1));
  
  Module2.init();
  Module2.getData('test.json');
  
}());

/*
 * MODULE GENRATION CONCEPT
 * Module generation is a quick way to crank out modules without having to write the IIFE's over and over.
 * If the person you are interviewing knows how to create modules using native JavaScript, 
 * see if they have a nice pattern for grnerating modules.  The example below demonstrates 
 * how you can generate modules using native JavaScript.  
 */
(function moduleGenerator(window) {
  'use strict';
  
  //MODULE GENERATION
  var MyModules = (function Manager() {
    'use strict';
    
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
        modules[deps[i]] = deps[i];
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
  
  /*
   * USEING THE MODULE GENERATOR
   */
  //Passing MyModules as a dependency to thie IIFE
  (function TestModulesOut(MyModules, window) {
    'use strict';
    
    //Define your module here first.  It sets a key on the private module object within MyModules
    MyModules.define('testModule1', [window], function moduleImpl(window) {
      'use strict';
      
      var TestMod = {
        init: function initMethod() {
          console.log('Initializing the testModule1');
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
  
}(window));


/*
 * PROTOTYPE
 * Ask the candidate if they know what prototype is and what is it used for.  
 * Main concept: Prototype is javascripts object property look up chain that allows objects
 * to use methods and properties defined on themselves, or, the object that they inhereit from.
 * The base object in Javascript from which all objects are created in 'Object'.  Functions are also 
 * objects and are treated as first class citizens in the language.
 * Have the person create an example using protype by creating a constructor and then add
 * properties and methods to its prototype. 
 * PROS: Allows you to create multiple instances of custom objects which can inherit from a base object.
 *       Each instance points to the same space in memory for the properties and methods on the prototype object
 * CONS: Using prototype inheritance can create a really fragile code base due to the tightly coupled nature
 *       of it.  Making a change to the parent object affects all objects that inherit from it.
 * Questions: Ask the person what the advantages and disadvantages are of using prototype inheritence.  Look for 
 * answers such as 'tight coupling' and 'fragile code'.  
 */

(function protoType() {
  'use strict';
  
  //Simple Robot constructor...
  var Robot = function Robot(config) {
    if (typeof config !== 'object') {
      return;
    }
    
    this.name = config.name;
    this.type = config.type;
    this.powerLevel = config.powerLevel;
  };
  
  Robot.prototype = {
    constructor: Robot,
    identity: function identity() {
      return this.name;
    },
    stateAffiliation: function stateAffiliation() {
      console.log('My name is ', this.identity(), 'I represent the ', this.type+"'s", 'My power level is currently at', this.displayPowerLevel());
    },
    displayPowerLevel: function displayPowerLevel() {
      return this.powerLevel;
    }
  };
  
  var robieJr = new Robot({
    name: 'Robie Jr',
    type: 'Circut City Robot',
    powerLevel: 9000
  });
  
  robieJr.stateAffiliation();
  
  /*
   * Question:  Ask what the differences is between adding a method to the prototype vs adding a method to the constructor.
   * Answer:  Methods added to the prototype do not get created over and over again during instatiation of the object.
   *          Methods added to the constructor do.  You save memory using prototype.
   */
  
  /*
   * Inheritence section:
   * Question:  Ask the person if they know of a way to make one object inherit from another.
   *            Look for weirds patterns such as envoking a new instance of the parent object and
   *            adding it as the sub-class's consructor.  
   * Possible solution:  One way to achieve prototypal inheritence is via Polymorphism.  The parsitic
   *                     inheritence pattern uses polymorphism to produce an object that is more or less
   *                     independent from the parent but still shares gets updates from the parent.
   * Create the inheritence function:
   * 
   */
  
  var inherit = function inherit(childObj, parentObj) {
    var copyOfParent = Object.create(parentObj.prototype);//Copy the parent prototype object
    copyOfParent.constructor = childObj; //Set the constructor to the child object
    childObj.prototype = copyOfParent; //Set the prototype of the child object.
  };
  
  /*
   * Make a new Sub-Class and have it call the parent object
   */
  
  var OptimusPrime = function OptimusPrime(config) {
    Robot.call(this, config);
    console.log('OPTIMUS', this);//Look in the console and see the inherited properties from the Robot object
  };
  
  inherit(OptimusPrime, Robot);
  
  OptimusPrime.prototype.transform = function transform() {
    console.log(this.type+"'s! Transform and roll out!");
  };
  
  var optimus = new OptimusPrime({
    name: 'Optimus Prime',
    type: 'Autobot',
    powerLevel: '10,000,000,000' 
  });
  
  optimus.stateAffiliation();
}());

//Regular Expressions
(function regularExpressions() {
  'use strict';
  
  var RX = {
    match: function (string) {
      //'/'+string+'/'.test('cat');
      //'/\[A-Z]\b/'.test(string);
      '/1\+1=2/'.match();
      console.log('MATCH', '/1\+1=2/'.match('1'));
      console.log('TEST', /Mike/.test(string));
      console.log(/^A/.test(string));//Matches the first letter
      console.log(/e$/.test(string));//Matches the last letter
      console.log('MATCH AGAIN', '/a+/'.match('a'));//Matches all instances of the indicated letter
    }
  };
  
  RX.match('A That is my boy Sean');
  //RX.match('an ode');
  //RX.match('Mike');
  //RX.match('aaaaaaaaa22');
}());


/*
 * ACADEMICS
 * If you so desire, you can test the critical thinking ability of your candidate
 * Below are some fun challenges to see where they stand.  This is by no means a disqualifier
 * but you can be sure they person on the line is fairly capable with the language.  
 */

//FIZ BUZZ
/*
 * Ask the person to write a function that takes a number and shows any number divisible by
 * 3, 5 or 5x3
 */

(function reverseStringIife() {
  'use strict';
  
  var reversString = function reverseString(str) {
    var reversedStr = '';
    console.log('REVERSE STRING:');
    for (var i = str.length; i > 0; i--) {
      reversedStr += str[i-1];
    }
    console.log(reversedStr);
  };
  reversString('Hello are you happy, people?');
}());

(function stringReversIife2() {
  'use strict';
  
  var reverseString2 = function reverseString2(str) {
    var strArr = str.split('');
    var reversedString = [];
    var completeReversal = '';
    
    for (var i = strArr.length; i > 0; i--) {
      reversedString.push(strArr[i-1]);
    }
    completeReversal = reversedString.join('');
    console.log('REVERSE STrING 2:', completeReversal);
  };
  
  reverseString2('This better get reversed or else!');
}());

(function fixBuzz() {
  'use strict';
  
  var Fizz = {
    buzz: function buzz(num) {
      console.log('Prepping Fizz Buzz', num);
            
      for (var i = 0; i < num; i++) {
        if (i % 3 == 0) {
          console.log('FIZZ!, Divisible by 3:',(i));//Show all numbers divisble by 3
        } 
        if (i % 5 == 0) {
          console.log('BUZZ! Divisible by 5:',(i));//Show all numbers divisble by 5
        } 
        if (i% 3 == 0 && i % 5 ==0 && i % (5*3) == 0) {
          console.log('BAZZ!, Divisible by 3, 5, or 3 x 5:',(i));//Show all numbers divisble by 3, 5 and 5x3
        } 
      }
    }    
  };
  
  Fizz.buzz(100);
}());

/*
 * Join Two Arrays:
 * Ask the person to write a function that joins two arrays
 * My example is below
 */

(function joinArrays() {
  'use strict';
  
  var array1 = ['Hello', 'goodbye', 'hola', 'sayonara'];
  var array2 = ['Mihow', 'A Dios', 'Danke', 'End'];
  
  var ArrayFusion = {
    init: function join(list1, list2) {
      return list1.concat(list2);
    }
  };
  
  console.log('The new array', ArrayFusion.init(array1, array2));
  
}());

/*
 * Reverse an Array
 * Ask the person to write a function that reverses the indexes of an Array.  
 * Kudos for using Array.map()
 * Lumps of coal for using brute force via a for loop and a temp array
 */

(function reversArray() {
  'use strict';
  
  var arrayToReverse = ['Tom', 'Jerry', 'Popeye', 'Bluto'];
  
  var ArrayReversal = {
    reverse: function reverse(list) {
      return list.map(function (str, idx, array) {
        console.log('str:',str, 'idx:',idx, 'array:', array);
        return array[(array.length -1) -idx];
      }) ;
    }
  };
  console.log('Reversed Array', ArrayReversal.reverse(arrayToReverse));
}());


(function dupiife() {
  'use strict';
  
  var duplicates =  ['Tom', 'Jerry', 'Popeye', 'Bluto', 'Tom', 'Jerry'];
  var dupContainer = {};
  var dupArray = [];
  
  duplicates.forEach(function mapIt(item, idx, array) {
    if (!dupContainer[item]) {
      dupContainer[item] =  array[idx];
    }else {
      dupArray.push(item);
    }
  });
  console.log('HERE IS THE OBJECT CONTAINER:', dupContainer);
  console.log('HERE ARE THE DUPLICATES:', dupArray);
}());

/* 
 * BINARY FUNCTIONS AND MULTIPLE INVOCACTIONS
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
    doubleInvocable: function doubleInv(a) {
      return function(b) {
        return a+b;
      };
    },
    doubleInvocableBinary: function doubleInvocableBinary(binary) {
      return function(a) {
        return function (b) {
          return binary(a, b);
        };
      };
    }
  };
  
  console.log('add', Binary.add(5, 6));
  console.log('mul', Binary.mul(5, 6));
  console.log('doubleInv', Binary.doubleInvocable(5)(6));
  console.log('doubleInvBinary', Binary.doubleInvocableBinary(Binary.mul)(5)(6));
  
}());

/*
 * Write a chainable function
 * Ask the person if they know of a simple way to make calling functions chainable
 * for exapmple Myfunction.init().someMethod().anotherMethod()
 * My example
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
    }
  };
  
  Chainable.init()
  .method1()
  .method2();
}());


(function returnTrue() {
  'use strict';
  
  var testObj = {
    someValue: 'Hello',
    empty: ''
  };
  
  
  var Testing = {
    getObjValue: function getObjValue(obj) {
      console.log('THE TYPEOF', (obj));
      return (obj) ? obj : 'no good';
    }
  };
  
  
  var Compare = {
    init: function init(val1, val2) {
      return val1 != val2;
    }
  };
  
  console.log('THE RETURNED VALUE IS', Testing.getObjValue(testObj.someValue));
  console.log('IS VAL1 = to VAL2?', Compare.init(0, '0'));
  
}());

(function testisNaN() {
  'use strict';
  
  
  var testKey = function testKey(val) {
    var key = val;
    
    if (key == 0) {
      console.log('THE KEY IS', key, typeof key);
    }else {
      console.log('THE KEY IS FALSE', key, typeof key);
    }
  };
  
  function test(val) {
    if (typeof val === 'number') {
      return (function bitwize(val) {
        return (val | 0) === val;       
      }(parseInt(val)));
    }
  } 
  console.log('Test function value', test(999797));
  testKey(0);
  
  
  var testSwitchCase = function testSwitchCase(obj) {
    var coloringMode = null;
    switch(obj) {
      case 1:
      coloringMode = 1;
      console.log('Found the value to be ', obj);
      break;
      case 2:
      coloringMode = 2;
      console.log('Found the value to be ', obj);
      break;
      default:coloringMode = 0;
      console.log('DEFAULT VALUE FOR CASE coloing mode is', coloringMode);
    }
  };
  
  testSwitchCase(1);
}());


(function readText() {
  'use strict';
  
  var text = 'The brown cow jumped over the moon. Can this text be itterated through?';
  
  var mapit = function mapit(txt) {
    console.log('TEXT', text);
    var textArr = txt.split(' ');
    console.log(textArr);
    textArr.map(function maps(item, idx, array) {
      console.log(item);
    });
  };
  
  mapit(text);
}());

/*
 * ES6
 */

(function iifes6() {
  'use strict';
   
  let calculateMonthlyPayment = function calculateMonthlyPayment(config) {
    console.log('HELLO YOU', typeof config);
     let monthlyRate = 0;
    if (typeof config !== 'object') {
      throw new Error('Hey, you need to use an object');
      return;
    }
    if (config.rate) {
      let monthlyRate = config.rate / 100/ 12;
    }
    let monthlyPayment = (config.principal*monthlyRate) / (1 - (Math.pow(1/(1 + monthlyRate), config.years * 12)));
    console.log('MONTHLY PAYMENT');
    return monthlyPayment;
  };
  
  calculateMonthlyPayment({
    principal: 1500,
    years: 30,
    rate: 4.5
  });
}());

