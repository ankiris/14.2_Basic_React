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
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', { src: movie.pic })
        );
    });

var element =
React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));