
.PHONY: install
install:
	@npm install

.PHONY: test
test:
	@npx mocha --recursive test

.PHONY: build
build:
	@npx gulp build

