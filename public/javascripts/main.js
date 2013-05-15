function get_id(splitme){
  var id = splitme.split("_")[1];
  return id;
}
function fdsaas() {
  document.write("hello242");
}

function automated_click() {
  document.write("hello");
  var row = $(this).closest("tr");
  var row_id = get_id(row.attr("id"));
  console.log(row_id);

  return false;
}


$("#application_map_table").delegate("td.automated a", "click", function(){
  console.log("noooo");
  var row = $(this).closest("tr");
  var row_id = get_id(row.attr("id"));
  console.log(row_id);

  return false;
});
