function get_id(elem) {
  var id = elem.closest("tr").data("id");
  return id;
}

function flip_image(newval, elem) {
  if (newval == "True") {
    elem.replaceWith('<img alt="True" src="/images/true.png">');
  } else {
    elem.replaceWith('<img alt="False" src="/images/false.png">');
  };
  return false;
}


$("#application_map_table").delegate(".automated a img", "click", function(){
  event.preventDefault();
  var id = get_id($(this));
  var edit_url = "items/" + id + "/update_automation";

  var val = $(this).attr('alt');
  var newval = null;
  if (val == "True") {
    newval = "False"
  } else {
    newval = "True"
  };

  $.ajax({
    type: "PUT",
    url: edit_url,
    data: { value : newval}
  });

  flip_image(newval, $(this));
});

$("#application_map_table").delegate(".manual a img", "click", function(){
  event.preventDefault();
  var id = get_id($(this));
  var edit_url = "items/" + id + "/update_manual";

  var val = $(this).attr('alt');
  var newval = null;
  if (val == "True") {
    newval = "False"
  } else {
    newval = "True"
  };

  $.ajax({
    type: "PUT",
    url: edit_url,
    data: { value : newval}
  });

  flip_image(newval, $(this));
});

$("#application_map_table").delegate(".delete", "click", function(event){
  event.preventDefault();
  var id = get_id($(this));
  var delete_url = "items/" + id;
  $.ajax({
    type: "DELETE",
    url: delete_url
  });
  $(this).closest('tr').remove();
});
