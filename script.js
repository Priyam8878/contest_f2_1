/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    // arr.map( (element) => {
    //     if(element.profession === "developer"){
    //         console.log(element);
    //     }
    // })
    //printing name by map function
    arr.map(printByMap)
    function printByMap(item) {
      if (item.profession === "developer") {
        console.log(item)
      }
      
    }

  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
   
    arr.forEach(item => {
        if(item.profession === "developer"){
            console.log(item)
        }
    });


  }
  
  function addData() {
    //Write your code here, just console.log
    let getid = arr.length;
    let newarr = {id:getid+1,name:"susan",age:"20",profession:"intern"};
    arr.push(newarr);
    console.log(arr);
    
  }
  
  function removeAdmin() {
    arr.filter( (element) => {
        if(element.profession !== "admin"){
            console.log(element);
        }
    });

  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let employees = [
        { id: 5, name: "priyam", age: "19", profession: "developer" },
        { id: 6, name: "rahul", age: "33", profession: "admin" },
        { id: 7, name: "deepak", age: "22", profession: "developer" }
      ];
      
      let addEmp = arr.concat(employees);
      
      console.log(addEmp);
  }