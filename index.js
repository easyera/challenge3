$(document).ready(function () {
  $(".circle-input").click(function () {
    var checkbox = $(this).find("input[type='radio']");
    checkbox.prop("checked", true);
    $(".circle-input").removeClass("active");
    $(this).addClass("active");
  });

  $("#myForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission
    var checkboxes = $("input[name='item']:checked");
    var rating = checkboxes.val();

    $("#ratingNumber").text(rating);
    $(".rating-pad").hide();
    $("#thankPage").show();
    return false;
  });
});
