---
layout: blog  
title: Advertising
category: Advertising
image: Digital_Advertising_High_Res.png
---

{% assign count = site.categories[page.category] | size %}

{% if count == 0 %}
  <h3 class="text-center">Currently writing post check back often.</h3>
  <img src="{{site.url}}/assets/images/postbuilding.jpg" class="img-responsive img-thumbnail hidden-xs hidden-sm" alt="Post Building image">
{% else %}
  <ul>
    {% for post in site.categories[page.category] %}
      <li>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        {{ post.excerpt | strip_html | truncatewords:75 }}
      </li>
      <hr />
    {% endfor %}
  </ul>
{% endif %}
