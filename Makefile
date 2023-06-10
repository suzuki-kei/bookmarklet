
.PHONY: install
install:
	@npm install

.PHONY: reinstall
reinstall:
	@rm -rf node_modules/
	@rm -rf package-lock.json
	@npm install

.PHONY: test
test:
	@npx mocha --recursive src/test

.PHONY: build
build:
	@npx gulp -f src/gulpfile/gulpfile.js build

