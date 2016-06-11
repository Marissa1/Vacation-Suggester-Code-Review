var florida = function (option1, option2, option3) {
  return (option1 === 'young' && option2 === 'hot' && option3 === 'three');
};
var norway = function (option1, option2, option3) {
  return (option2 === 'cold');
};
var hawaii = function (option1, option2, option3) {
  return (option1 === 'old' && option2 === 'wet' || option2 === 'hot');
};
var none =function () {
  return "I guess you're not going on vacation.";
};



$(document).ready(function() {
  $("form#vacation").submit(function() {
    event.preventDefault();
    var option1 = $("input:radio[name='age']:checked").val();
    var option2 = $("input:radio[name='preference']:checked").val();
    var option3 = $("input:radio[name='guests']:checked").val();
    var age = $("input:radio[name=age]:checked").val();
    var beverage = $("#beverage").val();
    var favoriteColor = $("#color").val();

    if (florida(option1, option2, option3)) {
      $("#florida").show()
      $("#norway").hide()
      $("#hawaii").hide()
    } else if (norway(option1, option2, option3)) {
        $("#florida").hide()
        $("#norway").show()
        $("#hawaii").hide()
    } else if (hawaii(option1, option2, option3)) {
        $("#florida").hide()
        $("#norway").hide()
        $("#hawaii").show()
    }
});
});
