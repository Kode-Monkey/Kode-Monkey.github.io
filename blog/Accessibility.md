---
layout: blog
title: How-To-WCAG
categories: Accessibility
image: pour-web-design.png
description: Series of Articles about Web Accessibility and how essential it is for you business.
---

{% assign count = site.categories[page.categories] | size %}

<div class="row">
  <div class="col text-center mb-2">
    <h2>Welcome to our Series on Web Accessibility</h2>

    <p>Learn how you can add WCAG requirements to your website or application to become ADA Compliant.</p>

  </div>
</div>

<hr class="my-3" />

{% if count == 0 %}
  <h3 class="text-center">Currently writing post check back often.</h3>
  <img src="{{site.url}}/assets/images/postbuilding.jpg" class="img-responsive img-thumbnail hidden-xs hidden-sm" alt="Post Building image">
{% else %}
  <ul>
    {% for post in site.categories[page.categories] %}
      <li>
        <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
        <p class="mb-2"><small> <u>{{ post.date | date: '%B %d, %Y' }} | {{site.author}}</u></small></p>
        {{ post.excerpt | strip_html | truncatewords:75 }}
      </li>
      <hr />
    {% endfor %}
  </ul>
{% endif %}
