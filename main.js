// промотать все аудиозаписи в вк до низу -> вставить код в консоль
(function() {
    const audioRow = document.querySelectorAll('.audio_row');

    let num = 0;
//TODO дорабоать промотку
    let timer = setInterval(() => {
        audioRow[num].dispatchEvent(new Event('mouseover'));
        let deletBtn = audioRow[num].querySelector('.audio_row__action_delete');
        deletBtn.dispatchEvent(new Event('click'))
        num++;
        if(audioRow.length < num) clearInterval(timer);
    }, 10);
})();