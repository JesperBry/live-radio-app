# Local debug build/app version
debug:
	open ./dist/mac/Live\ radio.app --args --remote-debugging-port=8315;
	open http://localhost:8315/;

build-all:
	npm run build:mac
	npm run build:linux
	npm run build:win

release: build-all
	gh release create v$(version) ./dist/radio-app_$(version)_amd64.deb ./dist/radio-app_$(version)_amd64.snap ./dist/radio-app-$(version)-setup.exe ./dist/radio-app-$(version).dmg