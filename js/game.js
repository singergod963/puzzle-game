$(function () {
  var choosedQuestion = 0;
  // var puzzleItem = $(".puzzle-item");

  // puzzleItem.on("click", function () {
  //   var num = $(this).index() + 1;
  //   var questionArea = $(".questionArea");
  //   var questionWrap = $(".questionWrap--q" + num);
  //   questionWrap.fadeIn();
  //   questionArea.fadeIn();
  // });

  $('.puzzle-item').on('click', function () {
    choosedQuestion = $(this).index() + 1;
    $('.questionWrap--q' + choosedQuestion).fadeIn();
    $('.questionArea').fadeIn();
  });
});
