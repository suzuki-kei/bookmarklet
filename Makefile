
.PHONY: install
install:
	@npm install

.PHONY: test
test:
	@npx mocha --recursive src/test

.PHONY: build
build:
	@npx gulp -f src/gulpfile/gulpfile.js build

