function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

(function ($) {
    $.fn.randomize = function (childElem) {
        return this.each(function () {
            var $this = $(this);
            var elems = shuffle($(childElem));
            $this.remove(childElem);
            for (var i = 0; i < elems.length; i++)
            $this.append(elems[i]);
        });
    }
})(jQuery)

jQuery(function($){
    $("div.randomize").randomize("div.book-item");
    $(".book-item:gt(1)").hide();
});