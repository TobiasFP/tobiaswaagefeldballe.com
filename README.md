# Install and build 
nvm install 16
nvm use 16
npm install -g @ionic/cli yarn
yarn install

./push_to_osandweb.sh

# tobiaswaagefeldballe.com
tobiaswaagefeldballes website as a resume

The purpose of this site is to demonstrate my coding skills, by utilizing some very much intended poor choices in ui/ux, coupled with some very good code The site will include: Front end in Ionic/Angular packed as a pwa. A show of skill by integrating webassembly A resume written as a webcomponent in vue, injected into angular A backend in GoLang, calling both MySQL and MongoDB. Sound analysis demonstration using the web audio api and three.js A "what did x person say today on danish televised news" showing my scraping abilities (read more on tellie.dk) A lot of bad ui calls that will show you what technology was used to create what part of the site, made with three.js