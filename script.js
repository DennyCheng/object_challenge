var locations = []; // this array will hold your objects

// object constructor
function Pizza(state,revenue,locationsCount){
  this.state = state;
  this.revenue = revenue;
  this.locationCount = locationsCount;
  this.averageRevenue = function(){
    return(this.revenue/this.locationCount);
  }
};
// object instances
var Ill = new Pizza("Il",5000,12);
var Mn = new Pizza("MN",300,3);
var Nv = new Pizza("NV",25000,1);
// push object instances to locations array
//locations.push(new Pizza("Il",5000,12));
locations.push(Mn);
locations.push(Ill);
locations.push(Nv);
console.log(locations);


// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
