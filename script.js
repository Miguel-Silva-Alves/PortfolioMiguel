$("document").ready(function(){

    $('.aa img').mouseover(function () {
        console.log($(this).attr('id'))
        $('.aa img').popover({
            placement : 'right',
            trigger: 'click hover',
            html : true,
        });
    })

})