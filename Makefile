install:
	npm install

start-even:
	npx babel-node src/bin/even.js

start-calc:
	npx babel-node src/bin/calc.js

start-gcd:
	npx babel-node src/bin/gcd.js

start-progression:
	npx babel-node src/bin/progression.js

start-prime:
	npx babel-node src/bin/prime.js

publish:
	npm publish

lint:
	npx eslint .