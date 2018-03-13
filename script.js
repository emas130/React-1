var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        img: 'http://1.fwcdn.pl/po/05/71/30571/7529392.3.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film opowiadający historię króla sawanny',
        img: 'http://1.fwcdn.pl/po/68/78/6878/6927221.6.jpg'
    },
    {
        id: 3,
        title: 'Shrek',
        desc: 'Komedia animowana',
        img: 'http://1.fwcdn.pl/po/95/09/9509/7640796.3.jpg'
    },
    {
        id: 4,
        title: 'Incepcja',
        desc: 'Film sc-fi',
        img: 'http://1.fwcdn.pl/po/08/91/500891/7354571.6.jpg'
    },
    {
        id: 5,
        title: 'Wszyscy ludzie prezydenta',
        desc: 'Film o aferze Watergate',
        img: 'http://1.fwcdn.pl/po/17/94/11794/7443427.6.jpg'
    }
];



var moviesElement = movies.map(function (movie) {
	return React.createElement('li', {
			key: movie.id
		},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {
			src: movie.src
		})
	);
});

var element = React.createElement('div', {},
	React.createElement('h1', {}, 'Lista filmów'),
	React.createElement('ul', {}, moviesElement)
)

ReactDOM.render(element, document.getElementById('app'));
