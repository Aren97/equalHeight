
function equalHeights (blocks) {
    var text_divs = $(blocks);
    if (text_divs) {
        var ar_i = 0;
        var text_divs_height = 0;
        var max_chislo = 0;
        var arr_max_height = new Array();

        while (ar_i<text_divs.length) {
            text_divs_height = text_divs[ar_i].clientHeight;
            arr_max_height[ar_i] = text_divs_height;
            ar_i++;
        }
        max_chislo = Math.max.apply(null, arr_max_height);
        $(text_divs).height(max_chislo);
    }
}

equalHeights('div');
