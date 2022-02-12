const lyricsElement = document.getElementById('lyrics');
const play = document.getElementById('play-btn');
const stop = document.getElementById('stop-btn');
const player = document.getElementById('player')
play.style.display = 'none';
stop.style.display = 'none';

function initScroll() {
    stop.style.display = 'inline';
	lyricsElement.scrollTop = 0;
	previousScrollTop  = 0;
	ScrollInterval = setInterval('scroll()', 100);
}

function scroll() {
	lyricsElement.scrollTop = previousScrollTop;
	previousScrollTop++;
}

function stopScroll() {
	clearInterval(ScrollInterval);
    stop.style.display = 'none';
    play.style.display = 'inline';
}

function resumeScroll() {
	previousScrollTop = lyricsElement.scrollTop;
	ScrollInterval    = setInterval('scroll()', 100);
    stop.style.display = 'inline';
    play.style.display = 'none';
}
//start scrolling after 13 sec
setTimeout(initScroll, 13000)