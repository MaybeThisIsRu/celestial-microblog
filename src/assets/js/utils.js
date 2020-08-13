const twemoji = () => {
	if (window.twemoji) {
		window.twemoji.parse(document.body, {
			folder: "svg",
			ext: ".svg"
		});
	}
};

export { twemoji };
