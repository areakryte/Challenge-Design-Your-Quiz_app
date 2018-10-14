function onStart(event){
  console.log('clicked');

  var div = $(this).closest("div");
  div.remove();
}
