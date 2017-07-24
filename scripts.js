

var table_data = [ 
				   { first_name : 'Rose', last_name : 'Tyler', home : 'Earth' },
                   { first_name : 'Zoe', last_name : 'Heriot',home : 'Space Station W3'},
                   { first_name : 'Jo', last_name : 'Grant', home : 'Earth'},
                   { first_name : 'Leela', last_name : null, home : 'Unspecified'},
                   { first_name : 'Romana', last_name  : null, home : 'Gallifrey'},
                   { first_name : 'Clara', last_name  : 'Oswald', home : 'Earth'},
                   { first_name : 'Adric',last_name  : null, home : 'Alzarius'},
                   { first_name : 'Susan', last_name  : 'Foreman', home : 'Gallifrey'}
                ];
                
var tbl = document.createElement("table");

table_data.forEach(function(o){
  
var r = document.createElement("tr");
  
  for (var prop in o){
    var c = document.createElement("td");
    c.textContent = o[prop];  
    r.appendChild(c);         
  }
  tbl.appendChild(r);
});

document.body.appendChild(tbl);