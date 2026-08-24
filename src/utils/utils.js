export const capitalizeAll = (text) => (typeof text === "string" ? text.toUpperCase() : text);

export const isLoading = () => document.readyState === "loading";

export const onDomContentLoaded = (callback) => {
	if (document.readyState !== "loading") {
		callback();
		return undefined;
	}

	document.addEventListener("DOMContentLoaded", callback);

	return () => document.removeEventListener("DOMContentLoaded", callback);
};

export const waitForPageAssets = async () => {
	const fontsReady = document.fonts?.ready || Promise.resolve();
	const imagesReady = Array.from(document.images).map((image) => {
		if (image.complete) return Promise.resolve();

		return new Promise((resolve) => {
			image.addEventListener("load", resolve, { once: true });
			image.addEventListener("error", resolve, { once: true });
		});
	});

	await Promise.all([fontsReady, ...imagesReady]);
};
