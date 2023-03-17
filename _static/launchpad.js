function selfHosted() {
    // code that should be executed when this page is self-hosted rather than
    // run directly on launchpad infrastructure

    // hide the equinix metal link
    metal_link = null;
    for (link of document.querySelectorAll('a')) {
        if (link.textContent.includes('Enabled by Equinix Metal')) {
			if (link.parentElement.tagName == "LI") {
	            link.parentElement.hidden = true;
			} else {
	            link.hidden = true;
			}
        }
    }
}

function addServices(data) {
    // this function will read any services from json and add links to the menu
    menu = document.getElementsByClassName("wy-menu wy-menu-vertical")
    if (menu) {
        new_title = document.createElement("p");
        new_title.className = "caption";
		new_title.textContent = "LaunchPad";
        new_list = document.createElement("ul");
        for (const [name, url] of Object.entries(data)) {
			link = document.createElement("a");
            link.target = "_blank";
			link.href = url;
			link.textContent = name;
			link.className = "reference external";
			list_item = document.createElement("li");
			//list_item.className = "toctree-l1";
			list_item.prepend(link);
			new_list.prepend(list_item);
		}
		menu[0].prepend(new_list);
		menu[0].prepend(new_title);
    }
}

(function () {
	var myPlugin = function (hook, vm) {

		// Invoked on each page load after new markdown has been transformed to HTML.
		// Supports asynchronous tasks (see afterEach documentation for details).
		// hook.afterEach(function (html) {
		// 	// ...
		// 	return html;
		// });
	
		// Invoked on each page load after new HTML has been appended to the DOM
		hook.doneEach(function () {
				// self hosted or launchpad hosted?
				pageHost = new URL(document.URL).host
				if (!pageHost.endsWith('.nvidialaunchpad.com')) {
					selfHosted();
				}
		
				// load service links
				$.getJSON("services.json", addServices);  
		});
	};
	// Add plugin to docsify's plugin array
	$docsify = $docsify || {};
	$docsify.plugins = [].concat($docsify.plugins || [], myPlugin);
  })();

// window.onload = function() {
	// // self hosted or launchpad hosted?
	// pageHost = new URL(document.URL).host
	// if (!pageHost.endsWith('.nvidialaunchpad.com')) {
	// 	selfHosted();
	// }

	// // load service links
    // $.getJSON("services.json", addServices);
// };
