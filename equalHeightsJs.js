var text_divs = document.querySelectorAll('div');

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
        
        max_chislo = Math.max.apply(null, arr_max_height) + "px";
        ar_i = 0;
        while (ar_i<blocks.length){
            blocks[ar_i].style.height = max_chislo;
            ar_i++;
        }
        
    }

    equalHeights(text_divs);
}
