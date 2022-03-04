rebuild:
	rm -f package-lock.json
	npm install

cleanstart:
	rm -f package-lock.json
	npm install
	npm start

pullstart:
	git pull origin main
	npm start
