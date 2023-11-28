
.DEFAULT_GOAL := help

.PHONY: help
help: # 各ルールの説明を表示する
	@make.usage $(MAKEFILE_LIST)

.PHONY: install
install: npm.install # alias for npm.install

.PHONY: npm.install
npm.install: # npm の依存パッケージをインストールする
	@npm install

.PHONY: reinstall
reinstall: npm.reinstall # alias for npm.reinstall

.PHONY: npm.reinstall
npm.reinstall: # npm の依存パッケージを再インストールする
	@bash src/scripts/npm.reinstall.sh

.PHONY: test
test: # テストを実行する
	@npx mocha --recursive src/test

.PHONY: build
build: # 成果物を作る
	@npx gulp -f src/gulpfile/gulpfile.js build

