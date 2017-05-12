---
title: Buttons
type: components
---

Buttons are used for actions, like in forms.

**Usage**

{% highlight scss %}
@include buttons();
{% endhighlight %}

**Options**

{% highlight scss %}
@include buttons((
  name: 'button',
  padding: 10px 20px,
  radius: 3px,
  font-family: $font-family-action,
  font-weight: 400,
  type: 'default' 'primary' 'secondary' 'tertiary'
));
{% endhighlight %}

## Variants

All buttons will start with a class `button`. Followed by an additional `-{variant-type}` modifier.

### Default Buttons

Page change, common/repeatable actions.

<button type="button" class="button -default">Default Button</button>
<a href="javascript:;" class="button -default">Link Button</a>


{% highlight html %}
<button class="button -default">Default Buttons</button>
<a href="#" class="button -default">Link Button</a>
{% endhighlight %}

### Primary
Primary page action, create, save, submit actions.

<button type="button" class="button -primary">Primary Button</button>

{% highlight html %}
<button type="button" class="button -primary">Primary Button</button>
{% endhighlight %}

### Secondary
Similar or opposing option as to primary action. Preview, edit, remove, etc.

<button type="button" class="button -secondary">Secondary Button</button>

{% highlight html %}
<button type="button" class="button -secondary">Secondary Button</button>
{% endhighlight %}

### Tertiary
Navigation, toggles, switches, pagination.

<button type="button" class="button -tertiary">Tertiary Button</button>

{% highlight html %}
<button type="button" class="button -tertiary">Tertiary Button</button>
{% endhighlight %}

### Disabled State

<button type="button" class="button -default" disabled>Default Button</button>
<a href="javascript:;" class="button -default -is-disabled">Link Button</a>

{% highlight html %}
<button type="button" class="button -default" disabled>Default Button</button>
<a href="javascript:;" class="button -default -is-disabled">Link Button</a>
{% endhighlight %}

### Button Block

<button type="button" class="button -default -full">Button full width</button>

{% highlight html %}
<button type="button" class="button -default -full">Button full width</button>
{% endhighlight %}

## Button Controllers

Although they are buttons, they are used separately from buttons which means a need to call an additional module to use them.

**Usage**

{% highlight scss %}
@include control-group();
{% endhighlight %}

**Options**

{% highlight scss %}
@include control-group((
  name: 'control-group'
));
{% endhighlight %}

### Button Groups

The style of the button groups are dictated by how the buttons are created. The only option is to change the name of the `.control-group` if that is not the design names them.

<section class="control-group">
  <button class="button -tertiary">Prev</button>
  <button class="button -tertiary">Now</button>
  <button class="button -tertiary">Next</button>
</section>

{% highlight html %}
<section class="control-group">
  <button class="button -tertiary">Prev</button>
  <button class="button -tertiary">Now</button>
  <button class="button -tertiary">Next</button>
</section>
{% endhighlight %}
