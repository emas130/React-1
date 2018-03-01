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

var Movie = React.createClass({
    propTypes: {
        id: React.PropTypes.object.isRequired,
        content: React.PropTypes.array.isRequired
    },
    render: function() {
        return React.createElement('li', {id: this.props.id.id, content: this.props.content}, this.props.content)
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        content: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement('h2', {id: this.props.id, content: this.props.content.title}, this.props.content.title)
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        content: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement('p', {id: this.props.id, content: this.props.content.desc}, this.props.content.desc)
    }
});

var MovieImage = React.createClass({
    propTypes: {
        id: React.PropTypes.string.isRequired,
        src: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement('img', {id: this.props.id, src: this.props.src.img})
        ) 
    }
});

var movieElements = movies.map(function(movie) {
    var title = React.createElement(MovieTitle, {key: getID(), id: getID(), content: movie});
    var img = React.createElement(MovieImage, {key: getID(), id: getID(), src: movie});
    var desc = React.createElement(MovieDescription, {key: getID(), id: getID(), content: movie});
    var elemsArray = [title, img, desc];
    return (
        React.createElement(Movie, {key: movie.id, id: movie, content: elemsArray})          
    )
});

var MovieList = React.createClass({
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, movieElements)
            )
        )       
    }
});

function getID() {
    var ID = '';
    var string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (i = 0; i < 10; i++) {
        ID += string.charAt(Math.floor(Math.random() * string.length));
    }
    return ID;
}

var myList = React.createElement(MovieList);
ReactDOM.render(myList, document.getElementById('app'));