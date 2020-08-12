// *** Imports
const collectionFilters = require("./filters/collections");
const utils = require("./utils");

// *** Content Globs
const articlesDir = "src/content/articles/*.md";
const microDir = "src/content/micro/**/*.md";
const notesDir = "src/content/micro/notes/*.md";

module.exports = {
	articles: collection => {
		return collection
			.getFilteredByGlob(articlesDir)
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	},
	microposts: collection => {
		return collection
			.getFilteredByGlob(microDir)
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	},
	notes: collection => {
		return collection
			.getFilteredByGlob(notesDir)
			.filter(collectionFilters.publishedItems)
			.sort(collectionFilters.sortByDate);
	}
};
