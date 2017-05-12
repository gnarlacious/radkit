---
title: All
type: global
---

## Variations

### Info

<section class="alert -has-info">
  <p>Here is my title</p>
</section>

### Warning

<section class="alert -has-warning">
  <p>Here is my title</p>
</section>

### Error

<section class="alert -has-error">
  <p>Here is my title</p>
</section>

### Success

<section class="alert -has-success">
  <p>Here is my title</p>
</section>

---

## Button Variants

<button type="button" class="button -default">Default Button</button>
<a href="javascript:;" class="button -default">Link Button</a>

## Primary

<button type="button" class="button -primary">Primary Button</button>

### Secondary

<button type="button" class="button -secondary">Secondary Button</button>

### Tertiary

<button type="button" class="button -tertiary">Tertiary Button</button>

### Disabled State

<button type="button" class="button -default" disabled>Default Button</button>
<a href="javascript:;" class="button -default -is-disabled">Link Button</a>

### Button Block

<button type="button" class="button -default -full">Button full width</button>

### Button Groups

<section class="control-group">
  <button class="button -tertiary">Prev</button>
  <button class="button -tertiary">Now</button>
  <button class="button -tertiary">Next</button>
</section>

---

## Forms

<form class="form">
  <label class="label" for="name">Name</label>
  <input class="input" type="text" id="name" >

  <label class="label" for="email">Email</label>
  <input class="input" type="email" id="email" value="">

  <label class="check">
    <input class="action" type="checkbox" id="remember"/> Remember me
  </label>

  <label class="radio">
    <input class="action" type="radio" name="radio" id="yes" checked/> Yes
  </label>
  <label class="radio">
    <input class="action" type="radio" name="radio" id="no" /> No
  </label>

  <button class="button -primary" type="submit" role="button">Submit</button>
</form>

## Form Validation

<form class="form">
  <!-- Basic input -->
  <label class="label">Basic Input</label>
  <input class="input" type="text" />
  <span class="help-text">This is help text for input.</span>

  <!-- Disabled input -->
  <label class="label">Disabled Input</label>
  <input class="input" disabled type="text" value="Disabled value">

  <!-- Success input -->
  <label class="label">Success Input</label>
  <input class="input -has-success" type="text" value="Successful value">
  <span class="help-text -has-success">Correct information!</span>

  <!-- Success input -->
  <label class="label">Failed Input</label>
  <input class="input -has-error" type="text" value="Incorrect value">
  <span class="help-text -has-error">Wrong information!</span>
</form>

## Select Box

<form class="form">
  <select class="select">
    <option>Choose one</option>
    <option>This</option>
    <option>That</option>
    <option>Those</option>
    <option>Other</option>
  </select>
</form>

## Radio Buttons

<form class="form">
  <label class="radio">
    <input class="action" type="radio" name="name" checked> Check me.
  </label>
  <label class="radio">
    <input class="action" type="radio" name="name"> No, check me!
  </label>
</form>

## Inline Radio Buttons

<form class="form -inline">
  <label class="radio">
    <input class="action" type="radio" name="name" checked> Check me.
  </label>
  <label class="radio">
    <input class="action" type="radio" name="name"> No, check me!
  </label>
</form>

## Check Boxes

<form class="form">
  <label class="check">
    <input class="action" type="checkbox" name="name" checked> Check me.
  </label>
  <label class="check">
    <input class="action" type="checkbox" name="name"> Check me too!
  </label>
</form>

## Inline Checkboxes

<form class="form -inline">
  <label class="check">
    <input class="action" type="checkbox" name="name" checked> Check me.
  </label>
  <label class="check">
    <input class="action" type="checkbox" name="name"> Check me too!
  </label>
</form>

---

## Menu

<nav class="menu">
  <span class="title">General Info</span>
  <a class="item" href="javascript:;">Account</a>
  <a class="item" href="javascript:;">Profile</a>
  <a class="item -is-active" href="javascript:;">Email</a>
  <a class="item" href="javascript:;">Calendar</a>
</nav>

---

## Modal

<button class="button -primary" data-modal="modalContent">Open Modal</button>

<div class="modal-content" id="modalContent">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<script src="{{ "/js/modal.js" | prepend: site.baseurl }}"></script>
<script>
  var modal = new Modal();
  modal.trigger();
</script>

---

## Tables

## Basic Example

Add the `.table` class to any `<table>`.

<table class="table">
  <tr>
    <th>Table Header</th>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
  <tr>
    <td>Table Cell</td>
    <td>Row 1</td>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Table Cell</td>
    <td>Row 2</td>
    <td>Row 2</td>
  </tr>
</table>

## Bordered Example

<table class="table -bordered">
   <tr>
    <th>Table Header</th>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
  <tr>
    <td>Table Cell</td>
    <td>Row 1</td>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Table Cell</td>
    <td>Row 2</td>
    <td>Row 2</td>
  </tr>
</table>

## Stripped Example

<table class="table -stripped">
  <tr>
    <th>Table Header</th>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
  <tr>
    <td>Table Cell</td>
    <td>Row 1</td>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Table Cell</td>
    <td>Row 2</td>
    <td>Row 2</td>
  </tr>
</table>

## Hover Example

<table class="table -hover">
  <tr>
    <th>Table Header</th>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
  <tr>
    <td>Table Cell</td>
    <td>Row 1</td>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Table Cell</td>
    <td>Row 2</td>
    <td>Row 2</td>
  </tr>
</table>
