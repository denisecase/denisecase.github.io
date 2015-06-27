---
layout: page
title: Archive
weight : 90
---

   {% comment %}
        The code below dynamically generates a list of entries. 
        See http://joshualande.com/jekyll-github-pages-poole/.
      {% endcomment %}

{% for post in site.posts %}
  * {{ post.date | date_to_string }} &raquo; [ {{ post.title }} ]({{ post.url }})
{% endfor %}

