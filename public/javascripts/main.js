$(document).ready(function (e) {
  $('#add-btn').on('click', function (e) {
    e.preventDefault();
    $('#create-note').submit();
  });

  $('#create-note').on('submit', function (e) {

    e.preventDefault();

    var title = $('#note-title').val();
    var body = $('#note-body').val();
    var data = {
      title: title,
      body: body
    }

    console.log(data);

    $.ajax({
      url: siteUrl + '/notes/',
      method: 'post',
      dataType: 'json',
      data: data,
    })
    .done(function (data) {
      console.log(data);
      alert('Successfully added the note');
    });
  });

});
