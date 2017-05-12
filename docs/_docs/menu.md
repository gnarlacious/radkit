---
title: Menu
type: components
---

**Usage**

{% highlight scss %}
@include menu();
{% endhighlight %}

**Options**

{% highlight scss %}
@include menu((
  name: 'menu',
  border: (
    style: solid,
    width: 1px,
    color: #ccc
  ),
  radius: 3px,
  background: #fff
));
{% endhighlight %}

<nav class="menu">
  <span class="title">General Info</span>
  <a class="item" href="javascript:;">Account</a>
  <a class="item" href="javascript:;">Profile</a>
  <a class="item -is-active" href="javascript:;">Email</a>
  <a class="item" href="javascript:;">Calendar</a>
</nav>

{% highlight html %}
<nav class="menu">
  <span class="title">General Info</span>
  <a class="item" href="#">Account</a>
  <a class="item" href="#">Profile</a>
  <a class="item -is-active" href="#">Email</a>
  <a class="item" href="#">Calendar</a>
</nav>
{% endhighlight %}
