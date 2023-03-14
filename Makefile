# Local debug build/app version
debug:
	open ./dist/mac/Live\ radio.app --args --remote-debugging-port=8315;
	open http://localhost:8315/;