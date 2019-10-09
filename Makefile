install:
	yarn install

run:
	yarn run dev

build:
	yarn run build

publish: build
	echo "发布..."
	./publish.sh
	echo "发布完成."
