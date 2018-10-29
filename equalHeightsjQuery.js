var text_divs = $('div');

if (text_divs) {
    function equalHeights (blocks) {
        var ar_i = 0;
        var text_divs_height = 0;
        var max_chislo = 0;
        var arr_max_height = new Array();

        while (ar_i<blocks.length) {
            text_divs_height = blocks[ar_i].clientHeight;
            arr_max_height[ar_i] = text_divs_height;
            ar_i++;
        }
        max_chislo = Math.max.apply(null, arr_max_height);
        $(blocks).height(max_chislo);
    }

    equalHeights(text_divs);
}
