---
title: Tables
type: components
---


**Usage**

{% highlight scss %}
@include tables();
{% endhighlight %}

**Options**

{% highlight scss %}
@include tables((
  name: 'table',
  width: 100%,
  border: solid 1px $table-cell-border
));
{% endhighlight %}

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

{% highlight html %}
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
{% endhighlight %}


## Bordered Example

Add the `-bordered` modifier to the `.table` class.

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

{% highlight html %}
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
{% endhighlight %}


## Stripped Example

Add the `-stripped` modifier to the `.table` class.

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

{% highlight html %}
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
{% endhighlight %}


## Hover Example

Add the `-hover` modifier to the `.table` class.

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

{% highlight html %}
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
{% endhighlight %}
