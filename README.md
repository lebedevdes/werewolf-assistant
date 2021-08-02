# The Werewolf Assistant

This project is web assistant for tabletop role-playing game Werewolf: The Forsaken

### System dependencies

* Python 3.9.5
* NodeJS v16.4.2
* npm v7.18.1

### Installation

* Install Python 3.9.5
* Install dependencies via `pip install -r requirements.txt`
* Run `python manage.py migrate` into source directory
* Install nmv (check source for additional information https://github.com/nvm-sh/nvm)
* Install nodejs via `nvm install v16`
* In `./frontend` directory run `npm init -y`
* Run `npm i`

### Startup

* In `./frontend` directory run `npm run dev`
* In root directory run `python manage.py runserver 0.0.0.0:8000`
