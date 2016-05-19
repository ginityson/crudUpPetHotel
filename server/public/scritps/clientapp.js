$(document).ready(function () {
dropdownPop();
$('#register').on('click', ownerReg);
$('#addpet').on('click', petReg);

});
function ownerReg() {
  event.preventDefault();

  var values = {};
//
  $.each($('#ownerReg').serializeArray(), function (i, field) {
    values[field.name] = field.value;
  });
  $.ajax({
    type: 'POST',
    url: '/owners',
    data: values,
    success: function (data) {

      console.log(values);
    }
  });
}
function dropdownPop() {
  $.ajax({
    type: 'GET',
    url: '/owners',
    success: function (names){
      names.forEach(function (name) {
        $('#dropdown').append('<option id="' + name.id + '">' + name.first_name + ' ' + name.last_name + '</option>');



      })
    }

  })

}
function petReg() {
  event.preventDefault();
  var values = {};
values.owners_id = $('#dropdown').find(':selected').attr('id');
//
  $.each($('#pets').serializeArray(), function (i, field) {
    values[field.name] = field.value;
  });
  //AJAX call here


  $.ajax({
    type: 'POST',
    url: '/pets',
    data: values,
    success: function () {

      console.log('it works post pet');
    }

  })

  //
}
