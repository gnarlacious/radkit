// Create an IIFE to wrap the code in
(function() {

  // Define the constructor
  this.Modal = function() {

    // Create global element references
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;
    this.content = null;

    // Determine proper prefix
    this.transitionEnd = transitionSelect();

    var defaults = {
      className: "_fade-and-drop",
      closeButton: true,
      maxWidth: 600,
      minWidth: 280,
      overlay: true
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

  Modal.prototype.trigger = function() {
    var modalTrigger;
    var $this = this;

    modalTrigger = document.querySelectorAll('[data-modal]');

    for (var i=0; i<modalTrigger.length; i++) {
      modalTrigger[i].addEventListener('click', function() {
        $this.content = document.getElementById(this.dataset.modal);
        $this.open();
      });
    }
  }

  Modal.prototype.open = function() {

    // Build the Modal
    buildModal.call(this);

    // Initialize our event listeners
    initializeEvents.call(this);

    /*
     * After adding elements to the DOM, use getComputedStyle
     * to force the browser to recalc and recognize the elements
     * that we just added. This is so that CSS animation has a start point
     */
    window.getComputedStyle(this.modal).height;

    /*
    * Add our open class and check if the modal is taller than the window
    * If so, our anchored class is also applied
    */
    this.modal.className = this.modal.className +
      (this.modal.offsetHeight > window.innerHeight ?
        ' -is-open -is-anchored' : ' -is-open');
      this.overlay.className = this.overlay.className + ' -is-open';

  }

  Modal.prototype.close = function() {
    // Store the value of this
    var $this = this;

    // Remove  the open class name
    this.modal.className = this.modal.className.replace(' -is-open', '');
    this.overlay.className = this.overlay.className.replace(' -is-open', '');

    /*
     * Listen for CSS transitionend event and then
     * Remove the nodes from the DOM
     */
     this.modal.addEventListener(this.transitionEnd, function() {
       $this.modal.parentNode.removeChild($this.modal);
     });

     this.modal.addEventListener(this.transitionEnd, function() {
       if ($this.overlay.parentNode) $this.overlay.parentNode.removeChild($this.overlay);
     });
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

  function buildModal() {
    var content, contentHolder, d;

     // Create a documentFragment to build with
     d = document.createDocumentFragment();

     if (typeof this.content === "string") {
        content = this.content;
      } else {
        content = this.content.innerHTML;
      }

     // Create Modal element
     this.modal = document.createElement('div');
     this.modal.className = 'modal ' + this.options.className;
     this.modal.style.minWidth = this.options.minWidth + 'px';
     this.modal.style.maxWidth = this.options.maxWidth + 'px';

     // If closeButton option is true, add a close button
     if (this.options.closeButton === true) {
       this.closeButton = document.createElement('button');
       this.closeButton.className = 'close';
       this.closeButton.innerHTML = '&times;';

       this.modal.appendChild(this.closeButton);
     }

     // If overlay is true, add one
     if (this.options.overlay === true) {
       this.overlay = document.createElement('div');
       this.overlay.className = 'overlay ' + this.options.className;

       d.appendChild(this.overlay);
     }

     // Create content area and append to modal
     contentHolder = document.createElement('div');
     contentHolder.className = 'content';
     contentHolder.innerHTML = content;
     this.modal.appendChild(contentHolder);

     d.appendChild(this.modal);

     document.body.appendChild(d);
  }

  function initializeEvents() {

    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.close.bind(this));
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', this.close.bind(this));
    }

  }

  function transitionSelect() {
    var el = document.createElement('div');
    if (el.style.WebkitTransition) return 'WebkitTransitionEnd';
    if (el.style.OTransition) return 'oTransitionEnd';

    return 'transitionend';
  }

}());
