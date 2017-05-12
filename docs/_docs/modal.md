---
title: Modal
type: components
---

This will be hards.

<button class="button -primary" data-modal="modalContent">Open Modal</button>

<div class="modal-content" id="modalContent">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<script src="{{ "/js/modal.js" | prepend: site.baseurl }}"></script>
<script>
  var modal = new Modal();
  modal.trigger();
</script>
