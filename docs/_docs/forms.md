---
title: Forms
type: components
---

Creates basic styles all form elements.

**Usage**

{% highlight scss %}
@include forms();
{% endhighlight %}

**Options**

{% highlight scss %}
@include forms((
  name: 'form',
  label: (
    weight: 700,
    size: $font-size-base,
    color: $form-label-color
  ),
  input: (
    border: $input-border,
    background: $input-bkg,
    color: $input-color
  ),
  help-text-color: #aaa
));
{% endhighlight %}

## Example

Form inputs have a width of 100% with the purpose of sizing within the grid system.

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

  <button class="button -primary" type="button" role="button">Submit</button>
</form>

{% highlight html %}
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
{% endhighlight %}

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

{% highlight html %}
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
{% endhighlight %}

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

{% highlight html %}
<form class="form">
  <select class="select">
    <option>Choose one</option>
    <option>This</option>
    <option>That</option>
    <option>Those</option>
    <option>Other</option>
  </select>
</form>
{% endhighlight %}

## Radio Buttons

<form class="form">
  <label class="radio">
    <input class="action" type="radio" name="name" checked> Check me.
  </label>
  <label class="radio">
    <input class="action" type="radio" name="name"> No, check me!
  </label>
</form>

{% highlight html %}
<form class="form">
  <label class="radio">
    <input class="action" type="radio" name="name" checked> Check me.
  </label>
  <label class="radio">
    <input class="action" type="radio" name="name"> No, check me!
  </label>
</form>
{% endhighlight %}

## Inline Radio Buttons

<form class="form">
  <label class="radio -inline">
    <input class="action" type="radio" name="name" checked> Check me.
  </label>
  <label class="radio -inline">
    <input class="action" type="radio" name="name"> No, check me!
  </label>
</form>

{% highlight html %}
<form class="form">
  <label class="radio -inline">
    <input class="action" type="radio" name="name" checked> Check me.
  </label>
  <label class="radio -inline">
    <input class="action" type="radio" name="name"> No, check me!
  </label>
</form>
{% endhighlight %}

## Check Boxes

<form class="form">
  <label class="check">
    <input class='action' type="checkbox" name="name" checked> Check me.
  </label>
  <label class="check">
    <input class="action" type="checkbox" name="name"> Check me too!
  </label>
</form>

{% highlight html %}
<form class="form">
  <label class="check">
    <input class="action" type="checkbox" name="name" checked> Check me.
  </label>
  <label class="check">
    <input class="action" type="checkbox" name="name"> Check me too!
  </label>
</form>
{% endhighlight %}

## Inline Checkboxes

<form class="form">
  <label class="check -inline">
    <input class="action" type="checkbox" name="name" checked> Check me.
  </label>
  <label class="check -inline">
    <input class="action" type="checkbox" name="name"> Check me too!
  </label>
</form>

{% highlight html %}
<form class="form">
  <label class="check -inline">
    <input class="action" type="checkbox" name="name" checked> Check me.
  </label>
  <label class="check -inline">
    <input class="action" type="checkbox" name="name"> Check me too!
  </label>
</form>
{% endhighlight %}
