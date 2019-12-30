---
layout: page
title: Articles
weight : 90
---

   {% comment %}
        The code below dynamically generates a list of entries.
        See http://joshualande.com/jekyll-github-pages-poole/.
      {% endcomment %}

{% for post in site.posts %}

* {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})

{% endfor %}

<hr>

## By category

<br>

<div id="archives">
{% assign sorted_categories = site.categories | sort %}
{% for category in sorted_categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

    <h3 class="category-head">{{ category_name }}</h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.categories[category_name] %}
    <article class="archive-item">
      <h4><a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a></h4>
    </article>
    {% endfor %}
  </div>
{% endfor %}
</div>




