Some notes for myself about project management !

## PREREQUISITE

You should have nodejs and npm installed
Commands :
    wget -qO- https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt install -y nodejs
As seen here : https://doc.ubuntu-fr.org/nodejs    


Get the "node_modules"
    npm install

## LAUNCH

You can launch the app with :
    npm start

The app should be available for you in your browser here :
    http://localhost:3006/bgg


## SECURITY

Regularly lauch : npm audit
Then npm audit fix if needed
Commit with tag "npm audit fix"


## OBSOLESCENCE

npm outdated
npm update [package_name]


## VERSIONNING

use : npm version patch // Other suggestion to explore here : https://stackoverflow.com/a/39396977/8394211


## DEPLOY

npm run deploy


## TOOLS

### NPM

Verify version at : https://github.com/npm/cli
Verify local version : npm -v
Update if needed : npm install -g npm

### MD - markdown

https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax
