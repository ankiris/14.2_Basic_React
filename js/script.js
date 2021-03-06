var movies = [
    {
        id: 1,
        title: 'Shawshank Redemption',
        desc: 'Movie about hope (and prison)',
        pic: 'https://images-na.ssl-images-amazon.com/images/I/512G9J05RJL.jpg'
    },
    {
        id: 2,
        title: 'Matrix',
        desc: '"There is no spoon"',
        pic: 'https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg'
    },
    {
        id: 3,
        title: 'Lord of the Rings',
        desc: 'A lot of people with different plans regarding one ring',
        pic: 'http://corecanvas.s3.amazonaws.com/theonering-0188db0e/media/thumb/50c769d25ffa0_Ancalagon_LOTR%20Poster_thumb.jpg'
    },
    {
        id: 4,
        title: 'MadMax: Fury road',
        desc: 'They drive, they turn back, they drive',
        pic: 'http://static.metacritic.com/images/products/movies/1/75341fb373e410eb339784e65a09f140.jpg'
    },
    {
        id: 5,
        title: 'Amelie',
        desc: 'Movie about two weird, lonely people that found each other',
        pic: 'https://is5-ssl.mzstatic.com/image/thumb/Video/v4/5d/e2/42/5de24224-2218-2341-0667-12898a6ca7da/source/1200x630bb.jpg'
    }
    ];

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('h2', {}, this.props.title);
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },
    render: function () {
        return React.createElement('p', {}, this.props.desc);
    }
});

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return React.createElement('li', {key: this.props.movie.id},
                React.createElement(MovieTitle, {title: this.props.movie.title}),
                React.createElement(MovieDescription, {desc: this.props.movie.desc}),
                React.createElement('img', { src: this.props.movie.pic })
        );
    }
});

var MovieList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired
    },
    render: function() {
        var moviesElements = this.props.movies.map(function(movie, index) {
            return React.createElement(Movie, {
                key: index,
                movie: movie,
            });
        });
        var element = React.createElement( "div", {},
            React.createElement("h1", {}, "Movie list"),
            React.createElement("ul", {}, moviesElements)
        );
        return element;
    }
});

var element = React.createElement(MovieList, { movies: movies });
ReactDOM.render(element, document.getElementById("app"));
