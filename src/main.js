(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);
	var view, $3d = false;

	// Fires when an instance of the element is created
	el.createdCallback = function() {};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {

		view = new APP.Elements.Water();
		// get 3d reference
		//$3d = $(this).closest(".construct").three();
		// create plane
		// add water shader

	};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {};

	document.registerElement('construct-water', {
		prototype: el
	});
}());
