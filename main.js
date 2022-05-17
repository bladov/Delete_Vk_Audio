// вставить код в консоль
(function() {
    function pageScroll() {
        window.scrollBy(0,1000);
        scrolldelay = setTimeout(pageScroll,10);
    }

    pageScroll();

    const audioRow = document.querySelectorAll('.audio_row');

    let num = 0;
    let timer = setInterval(() => {
        audioRow[num].dispatchEvent(new Event('mouseover'));
        let deletBtn = audioRow[num].querySelector('.audio_row__action_delete');
        deletBtn.dispatchEvent(new Event('click'))
        num++;
        if(audioRow.length < num) clearInterval(timer);
    }, 70);
})();