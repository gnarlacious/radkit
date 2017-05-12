---
title: Alerts
type: components
---

Flash messages, or alerts, inform users of successful or pending actions.

**Usage**

{% highlight scss %}
@include alerts();
{% endhighlight %}

**Options**

Change how alerts are viewed.

{% highlight scss %}
@include alerts((
  name: 'alert',
  padding: 0.5rem 1rem,
  margin: $gutter-width 0,
  border: true,
  border-width: 1px,
  radius: 0,
  background: true,
  color: true
));
{% endhighlight %}

## Variations

### Info

Add the `-has-info` variant within element with the alert class.

<section class="alert -has-info">
  <p>Here is my title</p>
</section>

{% highlight html %}
<section class="alert -has-info">
  <p>Here is my title</p>
</section>
{% endhighlight %}

### Warning

Add the `-has-warning` variant within element with the alert class.

<section class="alert -has-warning">
  <p>Here is my title</p>
</section>

{% highlight html %}
<section class="alert -has-warning">
  <p>Here is my title</p>
</section>
{% endhighlight %}

### Error

Add the `-has-error` variant within element with the alert class.

<section class="alert -has-error">
  <p>Here is my title</p>
</section>

{% highlight html %}
<section class="alert -has-error">
  <p>Here is my title</p>
</section>
{% endhighlight %}

### Success

Add the `-has-success` variant within element with the alert class.

<section class="alert -has-success">
  <p>Here is my title</p>
</section>

{% highlight html %}
<section class="alert -has-success">
  <p>Here is my title</p>
</section>
{% endhighlight %}
