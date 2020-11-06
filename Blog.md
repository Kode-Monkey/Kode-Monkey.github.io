---
layout: blog
meta-title:  Blog Posts
title: Blog Posts
categories: blog
description: Blogs post to help you manage your site.
image: posticon.jpg
permalink: Blog/
---

<p class="text-center"><img src="{{ site.url }}/assets/images/SmallBusinessTipTrick-Group.jpg" style="width:45%;" class="img-responsive" alt="Small BusinessTips & Trick" /></p>

<div class="row">
  <div class="col">
    {% assign post = site.posts.first %}
    {% assign content = post.content %}
    {% include blog_detail.html %}
  </div>
</div>

<!-- row 1 -->
<div class="row  mb-3">
  <!-- Col 1 -->
  <div class="col-sm-4">
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Advertising"><img src="{{ site.url }}/assets/images/Digital_Advertising_High_Res.png" style="width:20%; height: auto;" class="img-responsive rounded center-block" alt="Advertising" /></a></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Advertising"><strong><em>{ Advertising }</em></strong></a></p>
      </div>
    </div>
  </div>
  <!-- Col 2 -->
  <div class="col-sm-4">
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Accessibility"><img src="{{ site.url }}/assets/images/Blog/Accessibility/Accessibility.png" style="width:20%; height: auto;" class="img-responsive center-block" alt="Accessibility" /></a></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Accessibility"><strong><em>{ How-To_WCAG }</em></strong></a></p>
      </div>
    </div>
  </div>
  <!-- Col 3 -->
  <div class="col-sm-4">
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/ContentExperience"><img src="{{ site.url }}/assets/images/Content-Marketing.png" style="width:20%;" class="img-responsive center-block" alt="Content and Experience" /></a></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/ContentExperience"><strong><em>{ Content & Experience }</em></strong></a></p>
      </div>
    </div>
  </div>
</div>

<!-- row 2 -->
<div class="row mb-3">
  <!-- Col 1 -->
  <div class="col-sm-4">
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Listings"><img src="{{ site.url }}/assets/images/Website-Traffic-Driver.png" style="width:20%;" class="img-responsive center-block" alt="Listings" /></a></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
      <p class="text-center"><a href="{{ site.url}}/blog/Listings"><strong><em>{ Listings }</em></strong></a></p>
      </div>
    </div>
  </div>
    <!-- Col 2 -->
  <div class="col-sm-4">
    <div class="row">
      <div class="col">
      <p class="text-center"><a href="{{ site.url}}/blog/Websites"><img src="{{ site.url }}/assets/images/Website-Reputation.png" style="width:20%;" class="img-responsive center-block" alt="Advertising" /></a></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Websites"><strong><em>{ Websites }</em></strong></a></p>
      </div>
    </div>
  </div>
  <!-- Col 3 -->
  <div class="col-sm-4">
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Reputation"><img src="{{ site.url }}/assets/images/Reputation-Services.png" style="width:20%;" class="img-responsive center-block" alt="Content and Experience" /></a></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Reputation"><strong><em>{ Reputation }</em></strong></a></p>
      </div>
    </div>
  </div>
</div>

<!-- row 3 -->
<div class="row mb-3">
  <!-- Col 1 -->
  <div class="col-sm-4">
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/SEO"><img src="{{ site.url }}/assets/images/Enhanced-SEO.png" style="width:20%;" class="img-responsive center-block" alt="Content and Experience" /></a></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/SEO"><strong><em>{ SEO }</em></strong></a></p>
      </div>
    </div>
  </div>
  <!-- Col 2 -->
  <div class="col-sm-4">
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Social"><img src="{{ site.url }}/assets/images/Social_Marketing_High_Res.png" style="width:20%;" class="img-responsive center-block" alt="Advertising" /></a></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Social"><strong><em>{ Social }</em></strong></a></p>
      </div>
    </div>
  </div>
  <!-- Col 3 -->
  <div class="col-sm-4">
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Security"><img src="{{ site.url }}/assets/images/security-icon.png" style="width:20%;" class="img-responsive center-block" alt="Advertising" /></a></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="text-center"><a href="{{ site.url}}/blog/Security"><strong><em>{ Security }</em></strong></a></p>
      </div>
    </div>
  </div>
</div>
