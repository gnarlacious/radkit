/** TODO:
  1. Find
  2. Build
  3. Trigger
  4. Toggle
**/



// Create an IIFE to wrap the code in
(function(){

  // Define the constructor
  this.Nav = function() {

    this.nav = document.getElementById('nav_header');
    this.navtrigger = null;

    var defaults = {
      className : 'drop-down',
      menuText  : 'Menu',
      closeText : 'Close'
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] == "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    } else {
      this.options = defaults;
    }

  }

  //=====================
  // Public Methods
  //=====================


  Nav.prototype.trigger = function() {
    var navTrigger, $this = this;

    navTrigger = document.querySelectorAll('[data-nav]');

    for (var i=0; i<navTrigger.length; i++) {
      navTrigger[i].addEventListener('click', function() {
        $this.nav = document.getElementById(this.dataset.nav);
        $this.navtrigger = this;

        translateStyle.call($this);

        $this.toggle();
      });
    }
  }

  Nav.prototype.toggle = function() {

    // Toggle the navigation from open and close states
    toggleNav.call(this);

  }

  //=====================
  // Private Methods
  //=====================

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for(property in properties) {
      if(properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  function toggleText(elem, newText) {
    var textnode, whitespace, i;

    // Iterate through contents in trigger
    // Find the only content that is text and switch to close text
    whitespace = /^\s*$/;
    i = document.createNodeIterator(elem, NodeFilter.SHOW_TEXT);
    while (textnode = i.nextNode()) {
      if (textnode.nodeName === "#text" && !(whitespace.test(textnode.nodeValue))) {
        textnode.nodeValue = newText;
      }
    }
  }

  function toggleNav() {
    this.navtrigger.classList.toggle('-is-open');

    if (!this.navtrigger.classList.contains('-is-open')) {
      toggleText(this.navtrigger, this.options.menuText);
    } else {
      toggleText(this.navtrigger, this.options.closeText);
    }

    if (!this.nav.classList.contains('-is-open')) {
      this.nav.className = this.nav.className + ' -is-open ' +  '_' + this.options.className;
    } else {
      this.nav.className = this.nav.className.replace(' -is-open ', '');
      this.nav.className = this.nav.className.replace('_' + this.options.className, '');
    }
  }

  function translateStyle() {
    if (this.options.className == 'drop-down') {
      var elHeight = this.nav.offsetHeight;
      this.nav.style.top = -Math.abs(elHeight) + 'px';
    }
  }
}());
