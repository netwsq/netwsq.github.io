
$("#searchtext").keydown(function(event) {
    if (event.keyCode == 13) {
        var word=$("#searchtext").val();
        var regex = new RegExp(word, "i");
        var elements_1 = $(".download");
        elements_1.hide();
        $("#div").find("*[id]").filter(function() { return this.id.match(regex); }).show();
    }
  });