$(function () {
  var puzzleItem = $(".puzzle-item");

  puzzleItem.on("click", function () {
    var num = $(this).index() + 1;
    var questionArea = $(".questionArea");
    var questionWrap = $(".questionWrap--q" + num);
    questionWrap.fadeIn();
    questionArea.fadeIn();
  });
});
