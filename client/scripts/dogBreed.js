var app = {
  server: 'localhost:3000',

  fetch: function(animate) {
    $.ajax({
      url: '/breeds',
      type: 'GET',
      success: function(data) {
        console.log(data); 
        app.render(data);
      },
      error: function(err) {
        console.error('Failed to fetch dog breeds', err);
      }
    });
  },

  render: function(arr) {
    for (var i = 0; i < arr.length; i++) {
      var $p = $("<p class='breed_name' id='" + arr[i].name + "'></p>").text(arr[i].name);
      $('.breedsList').append($p);
    }
  }
};

// reset when new page is rendered
var clickCt = 0;
$('#breeds').on('click', function() {
  if (clickCt === 0) {
    app.fetch();
  }
  clickCt++;
});