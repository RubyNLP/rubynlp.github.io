(function pulse(back) {
    $('#seventyfive').animate(
        {
            'font-size': (back) ? '100px' : '140px',
            opacity: (back) ? 1 : 0.5
        }, 700, function(){pulse(!back)});
    $('#seventyfive img').animate(
        {
            'width': (back) ? '500px' : '450px'
        }, 700);
})(false);
