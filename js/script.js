var ideal_case = {
  "id" : "1",
  "name" : "Test 1",
  "children" : [
    {"id" : "2","name" : "Test 2","children" : [
      {"id":"5", "name":"Test 5", "children":[]},
      {"id":"6", "name":"Test 6", "children":[]},
      {"id":"7", "name":"Test 7", "children":[
        {"id":"14", "name":"Test 14", "children":[
          {"id":"17", "name":"Test 17", "children":[]},
          {"id":"18", "name":"Test 18", "children":[]},
          {"id":"19", "name":"Test 19", "children":[]},
          {"id":"20", "name":"Test 20", "children":[]},
          {"id":"21", "name":"Test 21", "children":[]},
        ]},
        {"id":"15", "name":"Test 15", "children":[]},
        {"id":"22", "name":"Test 22", "children":[]},
        {"id":"23", "name":"Test 23", "children":[]},
        {"id":"24", "name":"Test 24", "children":[]}
      ]}]
    },
    {
      "id" : "3","name" : "Test 3","children" : [
        {"id":"8", "name":"Test 8", "children":[]},
        {"id":"9", "name":"Test 9", "children":[]},
        {"id":"10", "name":"Test 10", "children":[]}]
    },
    {
      "id" : "4","name" : "Test 4","children" : [
        {"id":"11", "name":"Test 11", "children":[]},
        {"id":"12", "name":"Test 12", "children":[]},
        {"id":"13", "name":"Test 13", "children":[]}]
    },
  ]
}

var complicated_case = {
  "id" : "1",
  "name" : "Test 1",
  "children" : [
    {"id":"2", "name":"Test 2", "children":[
      {"id":"3", "name":"Test 3", "children":[
        {"id":"5", "name":"Test 5", "children":[]},
        {"id":"6", "name":"Test 6", "children":[]},
        {"id":"7", "name":"Test 7", "children":[]},
        {"id":"8", "name":"Test 8", "children":[
          {"id":"9", "name":"Test 9", "children":[]},
          {"id":"10", "name":"Test 10", "children":[]},
          {"id":"11", "name":"Test 11", "children":[
            {"id":"12", "name":"Test 12", "children":[]},
            {"id":"13", "name":"Test 13", "children":[]},
            {"id":"14", "name":"Test 14", "children":[]},
            {"id":"15", "name":"Test 15", "children":[]},
            {"id":"16", "name":"Test 16", "children":[]},
            {"id":"17", "name":"Test 17", "children":[]},
          ]},
        ]}
      ]},
      {"id":"4", "name":"Test 4", "children":[
        {"id":"18", "name":"Test 18", "children":[
          {"id":"19", "name":"Test 19", "children":[
            {"id":"21", "name":"Test 21", "children":[]},
            {"id":"22", "name":"Test 22", "children":[]},
            {"id":"23", "name":"Test 23", "children":[]},
            {"id":"24", "name":"Test 24", "children":[]},
            {"id":"25", "name":"Test 25", "children":[]},
            {"id":"26", "name":"Test 26", "children":[]},
            {"id":"20", "name":"Test 20", "children":[]},
          ]},
        ]},
      ]}
    ]},
  ]
}

$(document).ready(function(){
  new GridTree({contacts: complicated_case, wrapper: $('#tree-wrapper')})
})


//{"id":"5", "name":"Test 5", "children":[]}, {"id":"6", "name":"Test 6", "children":[]}, {"id":"7", "name":"Test 7", "children":[]}
