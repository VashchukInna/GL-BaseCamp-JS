(function () {
    let previousHero = document.querySelector('.prev');
    let nextHero = document.querySelector('.next');
    let index = 1;
    let blockOfInfo = document.querySelector('.info');
    let blockOfMovies = document.querySelector('.films');
    let li = document.createElement('li');
    let load = document.querySelector('.content-right');
    var loader = document.createElement('div');

    function getInfoOfHeroes(heroes) {
        var ul = document.createElement('ul'),
            characteristicsOfHeroes = {
                'name': 'Name: ',
                'height': 'Height: ',
                'mass': 'Mass: ',
                'hair_color': 'Hair Color: ',
                'skin_color': 'Skin Color: ',
                'eye_color': 'Eye Color: ',
                'birth_year': 'Birth Year: ',
                'gender': 'Gender: '
            };
        for (var key in characteristicsOfHeroes) {
            var li = document.createElement('li');
            li.textContent = characteristicsOfHeroes[key] + heroes[key];
            ul.appendChild(li);
        }
        blockOfInfo.appendChild(ul);
    }

    function loadHero(index) {
        loading();
        fetch('http://swapi.co/api/people/' + index + '/', {method: 'GET'})
            .then(function (response) {
                return response.json();
            })
            .then(function (heroes) {
                getInfoOfHeroes(heroes);
                return heroes.films;
            })
            .then(function (films) {
                return Promise.all(films.map(function (film) {
                        return loadFilm(film);
                    })
                );
            })
            .then(function (episodes) {
                var nameOfMovies = episodes.map(function (episode) {
                    return episode.name;
                });
                createFilmInfo(nameOfMovies);
            })
            .then(function () {
                removeLoader();
            })
            .catch(function () {
                removeLoader();
                blockOfInfo.textContent = 'Something went wrong. Please try again later';
            });
    }

    loadHero(index);

    function loading() {
        load.setAttribute('style', 'opacity: 0');
        loader.classList.add('load');
        document.body.appendChild(loader);
    }

    function loadFilm(url) {
        return fetch(url, {method: 'GET'})
            .then(function (response) {
                return response.json();
            })
            .then(function (films) {
                return {
                    name: 'Episode ' + films.episode_id + ': ' + films.title
                };
            });
    }

    function createFilmInfo(films) {
        var ul = document.createElement('ul');
        films.forEach(function (films) {
            var li = document.createElement('li');
            li.textContent = films;
            ul.appendChild(li);
        });
        blockOfMovies.appendChild(ul);
    }

    nextHero.addEventListener('click', getNextHero);
    previousHero.addEventListener('click', getPreviousHero);

    function getNextHero() {
        if (index < 88) {
            index++;
            removeInfo();
            loadHero(index);
        }
        if (index === 2) {
            previousHero.removeAttribute('disabled');
        }
        if (index === 88) {
            nextHero.setAttribute('disabled', 'disabled');
        }
    }

    function getPreviousHero() {
        if (index > 1) {
            index--;
            removeInfo();
            loadHero(index);
        }
        if (index === 1) {
            previousHero.setAttribute('disabled', 'disabled');
        }
        if (index === 88) {
            nextHero.removeAttribute('disabled');
        }
    }

    function removeInfo() {
        blockOfInfo.textContent = '';
        blockOfMovies.textContent = '';
    }

    function removeLoader() {
        load.setAttribute('style', 'opacity: 1');
        load.setAttribute('style', 'transition: all 1s ease-out');
        loader.remove();
    }
})();