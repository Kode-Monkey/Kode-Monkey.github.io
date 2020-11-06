---
layout: template
mine-image: ADA Complinace Logo.png
img-size: 100
meta-title: Accessibility Remidation
title: Accessibility Remidation
category: Accessibility
subtitle: Accessibility Documentation
description: What Web Accessibility errors mean.
permalink: Accessibility-Errors
---

<!-- <p><a href="https://wave.webaim.org/"><img src="https://wave.webaim.org/img/wavelogo.svg" alt="WAVE Web Accessibility Evaluation Tool" style="width:50%"></a></p>
<h1>WAVE Documentation</h1> -->

<p>Welcome, thank you for chooseing Kaffeinated Kodemonkey for your ADA certification and/or VPAT needs.</p>

<p>Through an Accessibility Evaluation you recived a How-To-Fix Report outlining errors, alerts, features, structure elements, and aria
content found throught your site. Each page has been listed with the number of issues or warnings that linked to the item on this page to
help your team in understanding what they means, why it matters, and how to resolve it.</p>

<p>If at any time you do not understand how to resolve and issue please reach out to your accessibiltiy specalist for further explination.</p>

<div class="accordion mt-5" id="TabMenu">
  <div class="row mb-4">
    <div class="col">
      <ul class="nav nav-tabs">
        <!-- TabMenu - Errors -->
        <li class="nav-item pr-0" id="accessibilty-errors">
          <p class="text-center pl-1 mt-0 mb-0"><button type="button" class="btn btn-small btn-errors" data-toggle="collapse" data-target="#collapse-errors" aria-expanded="false" aria-controls="collapse-errors"><i class="fas fa-times"></i> Errors</button></p>
        </li>
        <!-- TabMenu - Alerts -->
        <li class="nav-item pr-0" id="accessibility-alerts">
          <p class="text-center pl-3 pr-3 mt-0 mb-0"><button type="button" class="btn btn-small btn-alerts" data-toggle="collapse" data-target="#collapse-alerts" aria-expanded="false" aria-controls="collapse-alerts"><i class="fas fa-exclamation-triangle"></i> Alerts</button></p>
        </li>
        <!-- TabMenu - Features -->
        <li class="nav-item pr-0" id="accessibility-features">
          <p class="text-center pl-0 mt-0 mb-0"><button type="button" class="btn btn-small btn-features" data-toggle="collapse" data-target="#collapse-features" aria-expanded="true" aria-controls="collapes-features"><i class="fab fa-codepen"></i> Features</button></p>
        </li>
        <!-- TabMenu - Structural Elements -->
        <li class="nav-item pr-0" id="accessibility-structural-elements">
          <p class="text-center pl-3 mt-0 mb-0"><button type="button" class="btn btn-small btn-structural-elements" data-toggle="collapse" data-target="#collapse-structural-elements" aria-expanded="true" aria-controls="collapes-structural-elements"><i class="fas fa-code-branch"></i> Structural Elements</button></p>
        </li>
        <!-- TabMenu - Aria -->
        <li class="nav-item pr-0" id="accessibility-aria">
          <p class="text-center pl-3 mt-0 mb-0"><button type="button" class="btn btn-small btn-aria" data-toggle="collapse" data-target="#collapse-aria" aria-expanded="true" aria-controls="collapes-aria"><i class="fas fa-code"></i> Aria</button></p>
        </li>
      </ul>
    </div>
  </div>

  <!-- Tab #Errors-->
  <div id="collapse-errors" class="collapse show" aria-labelledby="accessibility-errors" data-parent="#TabMenu">
    <!-- Content -->
    <p>Errors indicate accessibility issues that need to be fixed.</p>

    <div class="accordion" id="ADA-Errors">
      <div class="card">
        <div class="card-header" id="alt_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_missing" aria-expanded="false" aria-controls="collapse_alt_missing">
              <img src="https://wave.webaim.org/img/icons/alt_missing.svg" class="img-fluid" style="width: 3%;" class="img-fluid" style="width: 3%;" alt=""> Missing alternative text - alt_missing
            </button>
          </h2>
        </div>

        <div id="collapse_alt_missing" class="collapse" aria-labelledby="alt_missing" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Image alternative text is not present.</p>
            <h3>Why It Matters:</h3>
            <p>Each image must have an alt attribute. Without alternative text, the content of an image will not be available to screen reader users or when the image is unavailable.</p>
            <h3>What To Do:</h3>
            <p>Add an alt attribute to the image. The attribute value should accurately and succinctly present the content and function of the image. If the content of the image is conveyed in the context or surroundings of the image, or if the image does not convey content or have a function, it should be given empty/null alternative text (alt="").</p>
            <h3>The Algorithm... in English:</h3>
            <p>An image does not have an alt attribute.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_link_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_link_missing" aria-expanded="false" aria-controls="collapse_alt_link_missing">
              <img src="https://wave.webaim.org/img/icons/alt_link_missing.svg" class="img-fluid" style="width: 3%;" class="img-fluid" style="width: 3%;" alt=""> Linked image missing alternative text - alt_link_missing
            </button>
          </h2>
        </div>
        <div id="collapse_alt_link_missing" class="collapse" aria-labelledby="alt_link_missing" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An image without alternative text results in an empty link.</p>
            <h3>Why It Matters:</h3>
            <p>Images that are the only thing within a link must have descriptive alternative text. If an image is within a link that contains no text and that image does not provide alternative text, a screen reader has no content to present to the user regarding the function of the link.</p>
            <h3>What To Do:</h3>
            <p>Add appropriate alternative text that presents the content of the image and/or the function of the link.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An image without alternative text (missing alt attribute or an alt value that is null/empty or only space characters) is within a link that does not contain text and an image with alternative text.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_spacer_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_spacer_missing" aria-expanded="false" aria-controls="collapse_alt_spacer_missing">
              <img src="https://wave.webaim.org/img/icons/alt_spacer_missing.svg" class="img-fluid" style="width: 3%;" class="img-fluid" style="width: 3%;" alt=""> Spacer image missing alternative text - alt_spacer_missing
            </button>
          </h2>
        </div>
        <div id="collapse_alt_spacer_missing" class="collapse" aria-labelledby="alt_spacer_missing" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A layout spacer image (which should have null/empty alternative text) does not have an alt attribute.</p>
            <h3>Why It Matters:</h3>
            <p>Spacer images are used to maintain layout. They do not convey content and should be given null/empty alternative text (alt="") so they are not presented to users and are ignored by screen readers.</p>
            <h3>What To Do:</h3>
            <p>If the image is a spacer image, give the image null/empty alternative text (alt=""). Alternatively, consider using CSS instead of spacer images to control positioning and layout.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An image is missing an alt attribute and has a width or height of 3 pixels or less or has a file name starting with "spacer.*", "space.*", or "blank.*". </p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_input_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_input_missing" aria-expanded="false" aria-controls="collapse_alt_input_missing">
              <img src="https://wave.webaim.org/img/icons/alt_input_missing.svg" class="img-fluid" style="width: 3%;"> Image button missing alternative text - alt_input_missing
            </button>
          </h2>
        </div>
        <div id="collapse_alt_input_missing" class="collapse" aria-labelledby="alt_input_missing" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Alternative text is not present for a form image button.</p>
            <h3>Why It Matters:</h3>
            <p>Image buttons provide important functionality that must be presented in alternative text. Without alternative text, the function of an image button is not made available to screen reader users or when images are disabled or unavailable.</p>
            <h3>What To Do:</h3>
            <p>Add appropriate alternative text that presents the function of the image button (e.g., &lt;input src="button.gif" type="image" alt="Submit search"&gt;).</p>
            <h3>The Algorithm... in English:</h3>
            <p>An image button (&lt;input type="image"&gt;) does not have an alt attribute or has an alt value that is null/empty (alt="") or only space characters.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_area_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_area_missing" aria-expanded="false" aria-controls="collapse_alt_area_missing">
              <img src="https://wave.webaim.org/img/icons/alt_area_missing.svg" class="img-fluid" style="width: 3%;"> Image map area missing alternative text - alt_area_missing
            </button>
          </h2>
        </div>
        <div id="collapse_alt_area_missing" class="collapse" aria-labelledby="alt_area_missing" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Alternative text is not present for an image map area (hot spot).</p>
            <h3>Why It Matters:</h3>
            <p>Image map areas or clickable hot spots provide important functionality that must be provided in alternative text. Without alternative text, the function of the area is not made available to screen reader users or when images are unavailable.</p>
            <h3>What To Do:</h3>
            <p>Add a descriptive alt attribute value to each area element. Additionally, ensure that the area elements are listed in the code in a logical, intuitive order (e.g., matching the visual order, alphabetically, etc.).</p>
            <h3>The Algorithm... in English:</h3>
            <p>An area element does not have the alt attribute or has an alt value that is null/empty (alt="") or only space characters.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_map_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_map_missing" aria-expanded="false" aria-controls="collapse_alt_map_missing">
              <img src="https://wave.webaim.org/img/icons/alt_map_missing.svg"  class="img-fluid" style="width: 3%;"> Image map missing alternative text - alt_map_missing
            </button>
          </h2>
        </div>
        <div id="collapse_alt_map_missing" class="collapse" aria-labelledby="alt_map_missing" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An image that has hot spots does not have an alt attribute.</p>
            <h3>Why It Matters:</h3>
            <p>Any content or function of an image that uses an image map (hot spots) and does not have an alt attribute will not be available to screen reader users or if the image is unavailable.</p>
            <h3>What To Do:</h3>
            <p>Add an alt attribute to the image. Ensure the alt attribute value for the image map image is appropriate. The alternative text is typically null/empty (alt=""), unless the image conveys content not conveyed in the hot spot areas (e.g., "Map of the United States").</p>
            <h3>The Algorithm... in English:</h3>
            <p>An image element has the usemap attribute and no alt attribute.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="longdesc_invalid">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_longdesc_invalid" aria-expanded="false" aria-controls="collapse_longdesc_invalid">
              <img src="https://wave.webaim.org/img/icons/longdesc_invalid.svg" class="img-fluid" style="width: 3%;"> Invalid longdesc - longdesc_invalid
            </button>
          </h2>
        </div>
        <div id="collapse_longdesc_invalid" class="collapse" aria-labelledby="longdesc_invalid" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>The longdesc attribute is not a URL.</p>
            <h3>Why It Matters:</h3>
            <p>The longdesc attribute of an image must be a valid URL of a page that contains a description of the image content. A longdesc value that contains image description text will not provide any accessibility information. Due to poor support, a link to the long description content should be used instead of longdesc.</p>
            <h3>What To Do:</h3>
            <p>Remove the longdesc attribute and provide a link to the long description content. If the longdesc attribute is maintained, ensure the attribute value is a valid URL/filename.</p>
            <h3>The Algorithm... in English:</h3>
            <p>The longdesc attribute value:</p>
            <ul>
            <li>is empty</li>
            <li>is not a URL or filename</li>
            <li>is a URL or filename with an extension of .jpg, .gif, or .png</li>
            </ul>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="label_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_label_missing" aria-expanded="false" aria-controls="collapse_label_missing">
              <img src="https://wave.webaim.org/img/icons/label_missing.svg" class="img-fluid" style="width: 3%;"> Missing form label - label_missing
            </button>
          </h2>
        </div>
        <div id="collapse_label_missing" class="collapse" aria-labelledby="label_missing" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A form control does not have a corresponding label.</p>
            <h3>Why It Matters:</h3>
            <p>If a form control does not have a properly associated text label, the function or purpose of that form control may not be presented to screen reader users. Form labels also provide visible descriptions and larger clickable targets for form controls.</p>
            <h3>What To Do:</h3>
            <p>If a text label for a form control is visible, use the &lt;label&gt; element to associate it with its respective form control. If there is no visible label, either provide an associated label, add a descriptive title attribute to the form control, or reference the label(s) using aria-labelledby. Labels are not required for image, submit, reset, button, or hidden form controls.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;input&gt; (except types of image, submit, reset, button, or hidden), &lt;select&gt;, or &lt;textarea&gt; does not have a properly associated label text. A properly associated label is:</p>
            <ul>
            <li>a &lt;label&gt; element with a for attribute value that is equal to the id of a unique form control
            <li>a &lt;label&gt; element that surrounds the form control, does not surround any other form controls, and does not reference another element with its for attribute
            <li>a non-empty title attribute, or
            <li>a non-empty aria-labelledby attribute.
            </ul>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li><li>3.3.2 Labels or Instructions (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="label_empty">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_label_empty" aria-expanded="false" aria-controls="collapse_label_empty">
              <img src="https://wave.webaim.org/img/icons/label_empty.svg" class="img-fluid" style="width: 3%;"> Empty form label - label_empty
            </button>
          </h2>
        </div>
        <div id="collapse_label_empty" class="collapse" aria-labelledby="label_empty" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A form label is present, but does not contain any content.</p>
            <h3>Why It Matters:</h3>
            <p>A &lt;label&gt; element that is associated to a form control but does not contain text will not present any information about the form control to the user.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the form label contains text that describes the function of the associated form control. Labels are not required for image, submit, reset, button, or hidden form controls. If a label is not necessary visually, a descriptive title attribute may be added to the form control.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A form label is present and associated with an existing form control (using for/id or surrounds the form control), but does not contain any text or images with alternative text.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li><li>3.3.2 Labels or Instructions (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="label_multiple">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_label_multiple" aria-expanded="false" aria-controls="label_multiple">
              <img src="https://wave.webaim.org/img/icons/label_multiple.svg" class="img-fluid" style="width: 3%;"> Multiple form labels - label_multiple
            </button>
          </h2>
        </div>
        <div id="collapse_label_multiple" class="collapse" aria-labelledby="label_multiple" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A form control has more than one label associated with it.</p>
            <h3>Why It Matters:</h3>
            <p>A form control should have at most one associated label element. If more than one label element is associated to the control, assistive technology may not read the appropriate label.</p>
            <h3>What To Do:</h3>
            <p>Ensure that at most one label element is associated to the form control. If multiple form labels are necessary, use aria-labelledby.</p>
            <h3>The Algorithm... in English:</h3>
            <p>Two or more &lt;label&gt;s are associated to a single &lt;input&gt; (except types of image, submit, reset, button, or hidden), &lt;select&gt;, or &lt;textarea&gt;.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li><li>3.3.2 Labels or Instructions (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_reference_broken">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_reference_broken" aria-expanded="false" aria-controls="collapse_aria_reference_broken">
              <img src="https://wave.webaim.org/img/icons/aria_reference_broken.svg" class="img-fluid" style="width: 3%;" alt=""> Broken ARIA reference - aria_reference_broken
            </button>
          </h2>
        </div>
        <div id="collapse_aria_reference_broken" class="collapse" aria-labelledby="aria_reference_broken" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An aria-labelledby or aria-describedby reference exists, but the target for the reference does not exist.</p>
            <h3>Why It Matters:</h3>
            <p>ARIA labels and descriptions will not be presented if the element referenced does not exist in the page.</p>
            <h3>What To Do:</h3>
            <p>Ensure the element referenced in the aria-labelledby or aria-describedby attribute value is present within the page and presents a proper label or description.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An element has an aria-labelledby or aria-describedby value that does not match the id attribute value of another element in the page.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_menu_broken">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_menu_broken" aria-expanded="false" aria-controls="collapse_aria_menu_broken">
              <img src="https://wave.webaim.org/img/icons/aria_menu_broken.svg" class="img-fluid" style="width: 3%;" alt=""> Broken ARIA menu - aria_menu_broken
            </button>
          </h2>
        </div>
        <div id="collapse_aria_menu_broken" class="collapse" aria-labelledby="aria_menu_broken" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An ARIA menu does not contain required menu items.</p>
            <h3>Why It Matters:</h3>
            <p>ARIA menus are application menus (like those used in software menu) with a specific keyboard interactions. They are NOT for navigation links on a web site and must contain at least one menuitem, menuitemcheckbox, or menuitemradio element.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the menu is an application menu and has the appropriate keyboard interactions (menu items are navigated via the arrow keys, not via the Tab key) and internal menu items, otherwise remove the menu role.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An element with role="menu" does not contain at least one element with role="menuitem", role="menuitemcheckbox", or role="menuitemradio".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.1.1 Keyboard (Level A)</li><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="title_invalid">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_title_invalid" aria-expanded="false" aria-controls="collapse_title_invalid">
              <img src="https://wave.webaim.org/img/icons/title_invalid.svg" class="img-fluid" style="width: 3%;" alt=""> Missing or uninformative page title - title_invalid
            </button>
          </h2>
        </div>
        <div id="collapse_title_invalid" class="collapse" aria-labelledby="title_invalid" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>The page title is missing or not descriptive.</p>
            <h3>Why It Matters:</h3>
            <p>A descriptive title helps users understand a page's purpose or content. Without a proper title, many users (especially those using screen readers or other assistive technology) may have difficulty orienting themselves to the page.</p>
            <h3>What To Do:</h3>
            <p>Add a brief, descriptive page title.</p>
            <h3>The Algorithm... in English:</h3>
            <p>The page title is missing, empty, contains only whitespace characters, or begins with "untitled".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.4.2 Page Titled (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="language_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_language_missing" aria-expanded="false" aria-controls="collapse_language_missing">
              <img src="https://wave.webaim.org/img/icons/language_missing.svg" class="img-fluid" style="width: 3%;" alt=""> Document language missing - language_missing
            </button>
          </h2>
        </div>
        <div id="collapse_language_missing" class="collapse" aria-labelledby="language_missing" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>The language of the document is not identified.</p>
            <h3>Why It Matters:</h3>
            <p>Identifying the language of the page allows screen readers to read the content in the appropriate language. It also facilitates automatic translation of content.</p>
            <h3>What To Do:</h3>
            <p>Identify the document language using the &lt;html lang&gt; attribute (e.g., &lt;html lang="en"&gt;).</p>
            <h3>The Algorithm... in English:</h3>
            <p>The &lt;html lang&gt; attribute is missing or is empty.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>3.1.1 Language of Page (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="meta_refresh">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_meta_refresh" aria-expanded="false" aria-controls="collapse_meta_refresh">
              <img src="https://wave.webaim.org/img/icons/meta_refresh.svg" class="img-fluid" style="width: 3%;" alt=""> Page refreshes or redirects - meta_refresh
            </button>
          </h2>
        </div>
        <div id="collapse_meta_refresh" class="collapse" aria-labelledby="meta_refresh" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>The page is set to automatically change location or refresh using a &lt;meta&gt; tag.</p>
            <h3>Why It Matters:</h3>
            <p>Pages that automatically change location or refresh pose significant usability issues, particularly for screen reader and keyboard users.</p>
            <h3>What To Do:</h3>
            <p>Remove the &lt;meta&gt; refresh and give the user control over time-sensitive content changes.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;meta http-equiv="refresh"&gt; tag is present.<h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.2.1 Timing Adjustable (Level A)</li><li>2.2.2 Pause, Stop, Hide (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="heading_empty">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_heading_empty" aria-expanded="false" aria-controls="collapseThcollapse_heading_emptyree">
              <img src="https://wave.webaim.org/img/icons/heading_empty.svg" class="img-fluid" style="width: 3%;" alt=""> Empty heading - heading_empty
            </button>
          </h2>
        </div>
        <div id="collapse_heading_empty" class="collapse" aria-labelledby="heading_empty" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A heading contains no content.</p>
            <h3>Why It Matters:</h3>
            <p>Some users, especially keyboard and screen reader users, often navigate by heading elements. An empty heading will present no information and may introduce confusion.<h3>What To Do:</h3>
            <p>Ensure that all headings contain informative content.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A heading element is present that contains no text (or only spaces) and no images with alternative text.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="button_empty">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_button_empty" aria-expanded="false" aria-controls="collapse_button_empty">
              <img src="https://wave.webaim.org/img/icons/button_empty.svg" class="img-fluid" style="width: 3%;" alt=""> Empty button - button_empty
            </button>
          </h2>
        </div>
        <div id="collapse_button_empty" class="collapse" aria-labelledby="button_empty" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A button is empty or has no value text.</p>
            <h3>Why It Matters:</h3>
            <p>When navigating to a button, descriptive text must be presented to screen reader users to indicate the function of the button.</p>
            <h3>What To Do:</h3>
            <p>Place text content within the &lt;button&gt; element or give the &lt;input&gt; element a value attribute.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;button&gt; element is present that contains no text content (or alternative text), or an &lt;input type="submit"&gt;, &lt;input type="button"&gt;, or &lt;input type="reset"&gt; has an empty or missing value attribute.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_empty">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_empty" aria-expanded="false" aria-controls="collapse_link_empty">
              <img src="https://wave.webaim.org/img/icons/link_empty.svg" class="img-fluid" style="width: 3%;" alt=""> Empty link - link_empty
            </button>
          </h2>
        </div>
        <div id="collapse_link_empty" class="collapse" aria-labelledby="link_empty" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A link contains no text.</p>
            <h3>Why It Matters:</h3>
            <p>If a link contains no text, the function or purpose of the link will not be presented to the user. This can introduce confusion for keyboard and screen reader users.<h3>What To Do:</h3>
            <p>Remove the empty link or provide text within the link that describes the functionality and/or target of that link.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An anchor element has an href attribute, but contains no text (or only spaces) and no images with alternative text.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_skip_broken">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_skip_broken" aria-expanded="false" aria-controls="collapse_link_skip_broken">
              <img src="https://wave.webaim.org/img/icons/link_skip_broken.svg" class="img-fluid" style="width: 3%;" alt=""> Broken skip link - link_skip_broken
            </button>
          </h2>
        </div>
        <div id="collapse_link_skip_broken" class="collapse" aria-labelledby="link_skip_broken" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A skip navigation link exists, but the target for the link does not exist or the link is not keyboard accessible.</p>
            <h3>Why It Matters:</h3>
            <p>A link to jump over navigation or jump to the main content of the page assists keyboard users only if the link is properly functioning and is keyboard accessible.<h3>What To Do:</h3>
            <p>Ensure that the target for the link exists and that the link is not hidden with CSS display:none or visibility:hidden.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An in-page link contains the words "skip" or "jump" and is hidden with CSS display:none or visibility:hidden, or the link has an href attribute that does not match the id value of another element within the page or the name attribute value of an anchor element within the page.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.1.1 Keyboard (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="th_empty">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_th_empty" aria-expanded="false" aria-controls="collapse_th_empty">
              <img src="https://wave.webaim.org/img/icons/th_empty.svg" class="img-fluid" style="width: 3%;" alt=""> Empty table header - th_empty
            </button>
          </h2>
        </div>
        <div id="collapse_th_empty" class="collapse" aria-labelledby="th_empty" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A &lt;th&gt; (table header) contains no text.</p>
            <h3>Why It Matters:</h3>
            <p>The &lt;th&gt; element helps associate table cells with the correct row/column headers. A &lt;th&gt; that contains no text may result in cells with missing or incorrect header information.</p>
            <h3>What To Do:</h3>
            <p>If the table cell is a header, provide text within the cell that describes the column or row. If the cell is not a header or must remain empty (such as the top-left cell in a data table), make the cell a &lt;td&gt; rather than a &lt;th&gt;.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;th&gt; element does not contain any text (or contains only spaces) and no images with alternative text.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="blink">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseThree">
              <img src="https://wave.webaim.org/img/icons/blink.svg" class="img-fluid" style="width: 3%;" alt=""> Blinking content - blink
            </button>
          </h2>
        </div>
        <div id="collapseTen" class="collapse" aria-labelledby="blink" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Blinking content is present.</p>
            <h3>Why It Matters:</h3>
            <p>Blinking content can be distracting and confusing to users, particularly those with certain cognitive disabilities.</p>
            <h3>What To Do:</h3>
            <p>Remove the blinking effect (&lt;blink&gt; element or text-decoration:blink style). Important text can be styled in other ways.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A non-empty &lt;blink&gt; element or other text has CSS text-decoration:blink styling.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.2.2 Pause, Stop, Hide (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="marquee">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_marquee" aria-expanded="false" aria-controls="collapse_marquee">
              <img src="https://wave.webaim.org/img/icons/marquee.svg" class="img-fluid" style="width: 3%;" alt=""> Marquee - marquee
            </button>
          </h2>
        </div>
        <div id="collapse_marquee" class="collapse" aria-labelledby="marquee" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A &lt;marquee&gt; element is present.</p>
            <h3>Why It Matters:</h3>
            <p>A marquee element presents scrolling text that the user cannot stop. Scrolling animated content can be distracting and confusing to users, particularly for those with certain cognitive disabilities.</p>
            <h3>What To Do:</h3>
            <p>Remove the marquee element. If content must scroll, use an alternative scrolling mechanism that allows the user to pause or stop the animation.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;marquee&gt; element is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.2.2 Pause, Stop, Hide (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="contrast">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_contrast" aria-expanded="false" aria-controls="collapse_contrast">
              <img src="https://wave.webaim.org/img/icons/contrast.svg" class="img-fluid" style="width: 3%;" alt=""> Very Low Contrast - contrast
            </button>
          </h2>
        </div>
        <div id="collapse_contrast" class="collapse" aria-labelledby="contrast" data-parent="#ADA-Errors">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Very low contrast between foreground and background colors.</p>
            <h3>Why It Matters:</h3>
            <p>Adequate contrast is necessary for all users, especially users with low vision.</p>
            <h3>What To Do:</h3>
            <p>Increase the contrast between the foreground (text) color and the background color. Large text (larger than 18 point or 14 point bold) does not require as much contrast as smaller text.</p>
            <h3>The Algorithm... in English:</h3>
            <p>Text is present that has a contrast ratio less than 4.5:1, or large text (larger than 18 point or 14 point bold) has a contrast ratio less than 3:1. Elements with background images must have a background color defined that provides adequate contrast when images are disabled or unavailable.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.4.3 Contrast (Minimum) (Level AA)</li></ul>
          </div>
        </div>
      </div>
    </div>

  </div>  <!-- Close Tabe -->

  <!-- Tab #Alerts-->
  <div id="collapse-alerts" class="collapse" aria-labelledby="accessibility-alerts" data-parent="#TabMenu">
    <!-- Content -->
    <p>Alerts are items that you may want to confirm are working as you intented.</p>

    <div class="accordion" id="ADA-Alerts">
      <div class="card">
        <div class="card-header" id="alt_suspicious">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_suspicious" aria-expanded="false" aria-controls="collapse_alt_suspicious">
              <img src="https://wave.webaim.org/img/icons/alt_suspicious.svg" class="img-fluid" style="width: 3%;" alt=""> Suspicious alternative text - alt_suspicious
            </button>
          </h2>
        </div>
        <div id="collapse_alt_suspicious" class="collapse" aria-labelledby="alt_suspicious" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Alternative text is likely insufficient or contains extraneous information.</p>
            <h3>Why It Matters:</h3>
            <p>If the alternative text for an image does not provide the same content or information conveyed by the image, that content will not be available to screen reader users and when images are unavailable.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the alternative text for the image or image input provides a succinct, yet equivalent alternative to the content and function of the image. Screen readers and browser presentation inform the user that the object is an image, so alternative text of "image of..." (and similar) should be avoided. If the image does not convey content or if the content is presented in nearby text (e.g., a caption), null/empty alternative text (alt="") is appropriate.</p>
            <h3>The Algorithm... in English:</h3>
            <p>The alt text value of an image or image button:</p>
            <ul>
            <li>begins with "graphic of", "bullet", or "image of",
            <li>ends with "image" or "graphic",
            <li>contains only space characters (alt=" "),
            <li>is an image file name (e.g. alt="photo.gif"), or
            <li>is one of the following: "image", "graphic", "photo", "photograph", "drawing", "painting", "artwork", "logo", "bullet", "button", "arrow", "more", "spacer", "blank", "chart", "table", "diagram", "graph", or "*".
            </ul>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_redundant">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_redundant" aria-expanded="false" aria-controls="collapse_alt_redundant">
              <img src="https://wave.webaim.org/img/icons/alt_redundant.svg" class="img-fluid" style="width: 3%;" alt=""> Redundant alternative text - alt_redundant
            </button>
          </h2>
        </div>
        <div id="collapse_alt_redundant" class="collapse" aria-labelledby="alt_redundant" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>The alternative text for an image is the same as nearby or adjacent text.</p>
            <h3>Why It Matters:</h3>
            <p>Alternative text that is the same as nearby or adjacent text will be presented multiple times to screen readers or when images are unavailable.</p>
            <h3>What To Do:</h3>
            <p>Change either the alternative text or the adjacent text to eliminate the redundancy. In most cases, you can give the image empty/null alternative text (alt="") because the content of the image is already provided in context through text. Linked images may often be combined with the adjacent text into one link, in which case the image may be given null/empty alternative text (alt="").</p>
            <h3>The Algorithm... in English:</h3>
            <p>The alternative text is the same as text that is within 15 characters of the image.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_duplicate">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_duplicate" aria-expanded="false" aria-controls="collapse_alt_duplicate">
              <img src="https://wave.webaim.org/img/icons/alt_duplicate.svg" class="img-fluid" style="width: 3%;" alt=""> A nearby image has the same alternative text - alt_duplicate
            </button>
          </h2>
        </div>
        <div id="collapse_alt_duplicate" class="collapse" aria-labelledby="alt_duplicate" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Two images near each other have the same alternative text.</p>
            <h3>Why It Matters:</h3>
            <p>When two images have the same alternative text, this often causes redundancy or indicates incorrect alternative text.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the alternative text for each image or image button is appropriate while removing unnecessary redundancy. If the content of the image is already conveyed elsewhere (through text or the alternative text of a nearby image) or if the image does not convey content, the image may generally be given empty/null alternative text (alt=""). Image buttons always convey a specific function, and thus cannot be given null alternative text.</p>
            <h3>The Algorithm... in English:</h3>
            <p>The same alternative text (case insensitive, but not null/empty) is present for two images or image buttons (&lt;input type='image'&gt;) near each other (no more than 2 other images separate them).</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_long">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_long" aria-expanded="false" aria-controls="collapse_alt_long">
              <img src="https://wave.webaim.org/img/icons/alt_long.svg" class="img-fluid" style="width: 3%;" alt=""> Long alternative text - alt_long
            </button>
          </h2>
        </div>
        <div id="collapse_alt_long" class="collapse" aria-labelledby="alt_long" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An image has very long alternative text.</p>
            <h3>Why It Matters:</h3>
            <p>Alternative text should be succinct, yet descriptive of the content and function of an image. Lengthy alternative text (more than around 100 characters) often indicates that extraneous content or content that is not available to sighted users is being presented.</p>
            <h3>What To Do:</h3>
            <p>Ensure the alternative text is succinct, yet descriptive. Ensure that no content is being presented in alternative text that is not available to sighted users viewing the image. When possible, either shorten the alternative text or provide the text alternative via another method (e.g., in text near the image, through a separate description page, etc.).</p>
            <h3>The Algorithm... in English:</h3>
            <p>The image's alt attribute value is more than 100 characters. Note that the 100 character limit is a rough and somewhat arbitrary length. For images that present complex content or lengthy text, alternative text longer than 100 characters may be appropriate.<h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="longdesc">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_longdesc" aria-expanded="false" aria-controls="collapse_longdesc">
              <img src="https://wave.webaim.org/img/icons/longdesc.svg" class="img-fluid" style="width: 3%;" alt=""> Long description - longdesc
            </button>
          </h2>
        </div>
        <div id="collapse_longdesc" class="collapse" aria-labelledby="longdesc" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>The longdesc attribute is present.</p>
            <h3>Why It Matters:</h3>
            <p>Because of poor support, the longdesc attribute should not be used.</p>
            <h3>What To Do:</h3>
            <p>Because of poor browser support for longdesc, it should not be used to provide the description of complex images. The description may be provided:
            <ul>
            <li>in the alt attribute, if possible. Alt text should be succinct (generally no more than ~100 characters).
            <li>in nearby text (e.g., a caption, data table, etc.)
            <li>via a link to a separate description page that contains an accurate and equivalent description.
            </ul>
            <h3>The Algorithm... in English:</h3>
            <p>An image has a longdesc attribute containing a valid URL.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="label_orphaned">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_label_orphaned" aria-expanded="false" aria-controls="collapse_label_orphaned">
              <img src="https://wave.webaim.org/img/icons/label_orphaned.svg" class="img-fluid" style="width: 3%;" alt=""> Orphaned form label - label_orphaned
            </button>
          </h2>
        </div>
        <div id="collapse_label_orphaned" class="collapse" aria-labelledby="label_orphaned" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A form label is present, but it is not correctly associated with a form control.</p>
            <h3>Why It Matters:</h3>
            <p>An incorrectly associated label does not provide functionality or information about the form control to the user. It usually indicates a coding or other form labeling issues.</p>
            <h3>What To Do:</h3>
            <p>Properly associate the label with its corresponding form control. If there is no corresponding form control, remove the label. Labels are not appropriate for image, submit, reset, button, or hidden form controls.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;label&gt; element:
            <ul>
            <li>does not surround a form control and the for attribute is missing/empty
            <li>references an element that is not present in the page
            <li>references an element that is not an &lt;input&gt;, &lt;select&gt; or &lt;textarea&gt; element
            <li>references an &lt;input&gt; element with image, submit, reset, button, or hidden type
            </ul>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li><li>3.3.2 Labels or Instructions (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="label_title">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_label_title" aria-expanded="false" aria-controls="collacollapse_label_titlepseThree">
              <img src="https://wave.webaim.org/img/icons/label_title.svg" class="img-fluid" style="width: 3%;" alt=""> Unlabeled form element with title - label_title
            </button>
          </h2>
        </div>
        <div id="collapse_label_title" class="collapse" aria-labelledby="label_title" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A form control does not have a label, but has a title.</p>
            <h3>Why It Matters:</h3>
            <p>The title attribute value for unlabeled form controls will be presented to screen reader users. However, a properly associated text label provides better usability and accessibility and should be used unless the purpose of the form control is intuitive without the label.</p>
            <h3>What To Do:</h3>
            <p>If a visible text label is available for the form control, associate the text label to the form control using the label element. This provides additional functionality for end users because if the label is clicked it will set focus to the form control. If the form control is intuitive without a &lt;label&gt;, the title attribute value may be used. Note that the title attribute value will not generally be read by a screen reader if the control has a label and may not be available to sighted users, particularly keyboard-only users.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;input&gt; (except types of image, submit, reset, button, or hidden), &lt;textarea&gt;, or &lt;select&gt; element has a non-empty title attribute value and is missing a label or valid aria-labelledby reference.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li><li>3.3.2 Labels or Instructions (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="fieldset_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_fieldset_missing" aria-expanded="false" aria-controls="collapse_fieldset_missing">
              <img src="https://wave.webaim.org/img/icons/fieldset_missing.svg" class="img-fluid" style="width: 3%;" alt=""> Missing fieldset - fieldset_missing
            </button>
          </h2>
        </div>
        <div id="collapse_fieldset_missing" class="collapse" aria-labelledby="fieldset_missing" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A group of check boxes or radio buttons is not enclosed in a fieldset.</p>
            <h3>Why It Matters:</h3>
            <p>A fieldset provides a visual and structural grouping of related form elements. It is typically necessary for groups of check boxes or radio buttons where a higher level description (called a legend) is necessary to understand the function of the check boxes or radio buttons. The description will be identified by a screen reader only if provided in a fieldset legend.</p>
            <h3>What To Do:</h3>
            <p>Determine whether the grouping of check boxes or radio buttons has or needs text that explains the purpose of the check boxes or radio button grouping. If so, mark up the group within a fieldset and put the group description in a legend element.</p>
            <h3>The Algorithm... in English:</h3>
            <p>Two or more checkbox or radio input elements within a form have the same name value, but are not enclosed in a fieldset.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li><li>3.3.2 Labels or Instructions (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="legend_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_legend_missing" aria-expanded="false" aria-controls="collapse_legend_missing">
              <img src="https://wave.webaim.org/img/icons/legend_missing.svg" class="img-fluid" style="width: 3%;" alt=""> Fieldset missing legend - legend_missing
            </button>
          </h2>
        </div>
        <div id="collapse_legend_missing" class="collapse" aria-labelledby="legend_missing" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A fieldset does not have a legend.</p>
            <h3>Why It Matters:</h3>
            <p>A fieldset legend presents a description of the form elements within a fieldset and is especially useful to screen reader users. A legend should be provided when a higher level description is necessary for groups of check boxes, radio buttons, or other form controls.</p>
            <h3>What To Do:</h3>
            <p>If a higher level description is necessary for the user to understand the function or purpose of the controls within the fieldset, provide this description within the &lt;legend&gt;. If this description or grouping is not necessary, the fieldset should probably be removed. Note that the legend is repeated to screen reader users for each form control within the fieldset.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A fieldset does not have a legend or the legend is empty.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li><li>3.3.2 Labels or Instructions (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="heading_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_heading_missing" aria-expanded="false" aria-controls="collapse_heading_missing">
              <img src="https://wave.webaim.org/img/icons/heading_missing.svg" class="img-fluid" style="width: 3%;" alt=""> No heading structure - heading_missing
            </button>
          </h2>
        </div>
        <div id="collapse_heading_missing" class="collapse" aria-labelledby="heading_missing" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>The page has no headings.<h3>Why It Matters:</h3>
            <p>Headings (&lt;h1&gt;-&lt;h6&gt;) provide important document structure, outlines, and navigation functionality to assistive technology users.</p>
            <h3>What To Do:</h3>
            <p>Provide a clear, consistent heading structure, generally one &lt;h1&gt; and sub-headings as appropriate. Except for very simple pages, most web pages should have a heading structure.</p>
            <h3>The Algorithm... in English:</h3>
            <p>No &lt;h1&gt;-&lt;h6&gt; elements are present in the page.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.2 Page Titled (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="h1_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_h1_missing" aria-expanded="false" aria-controls="collapse_h1_missing">
              <img src="https://wave.webaim.org/img/icons/h1_missing.svg" class="img-fluid" style="width: 3%;" alt=""> Missing first level heading - h1_missing
            </button>
          </h2>
        </div>
        <div id="collapse_h1_missing" class="collapse" aria-labelledby="h1_missing" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A page does not have a first level heading.</p>
            <h3>Why It Matters:</h3>
            <p>Headings facilitate page navigation for users of many assistive technologies. They also provide semantic and visual meaning and structure to the document. A first level heading (&lt;h1&gt;) should be present on nearly all pages. It should contain the most important heading on the page (generally the document title).</p>
            <h3>What To Do:</h3>
            <p>If the page presents a main heading, place it within an &lt;h1&gt; element. Add other sub-headings as necessary.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A page does not have an &lt;h1&gt; element.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.2 Page Titled (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="region_missing">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_region_missing" aria-expanded="false" aria-controls="collapse_region_missing">
              <img src="https://wave.webaim.org/img/icons/region_missing.svg" class="img-fluid" style="width: 3%;" alt=""> No page regions - region_missing
            </button>
          </h2>
        </div>
        <div id="collapse_region_missing" class="collapse" aria-labelledby="region_missing" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>No page regions or ARIA landmarks were found.</p>
            <h3>Why It Matters:</h3>
            <p>Regions and ARIA landmarks identify significant page areas. Most web pages should have regions defined, particularly for the main content area.</p>
            <h3>What To Do:</h3>
            <p>If the page has visual regions or significant page areas, ensure the regions are defined with header, nav, main, footer, etc. elements.</p>
            <h3>The Algorithm... in English:</h3>
            <p>No header, nav, main, footer, or aside HTML regions, or banner, navigation, main, or contentinfo landmark roles were present in the page.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="heading_skipped">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_heading_skipped" aria-expanded="false" aria-controls="collapse_heading_skipped">
              <img src="https://wave.webaim.org/img/icons/heading_skipped.svg" class="img-fluid" style="width: 3%;" alt=""> Skipped heading level - heading_skipped
            </button>
          </h2>
        </div>
        <div id="collapse_heading_skipped" class="collapse" aria-labelledby="heading_skipped" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A heading level is skipped.<h3>Why It Matters:</h3>
            <p>Headings provide document structure and facilitate keyboard navigation by users of assistive technology. These users may be confused or experience difficulty navigating when heading levels are skipped.</p>
            <h3>What To Do:</h3>
            <p>Restructure the document headings to ensure that heading levels are not skipped.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A heading level is skipped (e.g., an &lt;h1&gt; is followed by an &lt;h3&gt;, with no intermediate &lt;h2&gt;). Note that an &lt;h1&gt; is not required to be the first heading within the document.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="heading_possible">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_heading_possible" aria-expanded="false" aria-controls="collapse_heading_possible">
              <img src="https://wave.webaim.org/img/icons/heading_possible.svg" class="img-fluid" style="width: 3%;" alt=""> Possible heading - heading_possible
            </button>
          </h2>
        </div>
        <div id="collapse_heading_possible" class="collapse" aria-labelledby="heading_possible" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Text appears to be a heading but is not a heading element.</p>
            <h3>Why It Matters:</h3>
            <p>Heading elements (&lt;h1&gt;-&lt;h6&gt;) provide important document structure, outlines, and navigation functionality to assistive technology users. If heading text is not a true heading, this information and functionality will not be available for that text.</p>
            <h3>What To Do:</h3>
            <p>If the paragraph is a section heading, use a heading element instead (&lt;h1&gt;-&lt;h6&gt;).</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;p&gt; element contains less than 50 characters and is either:
            <ul>
            <li>20 pixels or bigger, or
            <li>16 pixels or bigger and bold and/or italicized.
            </ul>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="table_layout">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_table_layout" aria-expanded="false" aria-controls="collapse_table_layout">
              <img src="https://wave.webaim.org/img/icons/table_layout.svg" class="img-fluid" style="width: 3%;" alt=""> Layout table - table_layout
            </button>
          </h2>
        </div>
        <div id="collapse_table_layout" class="collapse" aria-labelledby="table_layout" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A layout table is present.</p>
            <h3>Why It Matters:</h3>
            <p>Layout tables exist merely to position content visually - to create columns, insert spacing, or align content neatly for sighted users. Their content is not at all tabular in nature. Layout tables should not be used in HTML5. They can introduce reading and navigation order issues. Screen readers may interpret them as data tables (i.e., announcing column and row numbers), especially if they contain table header (&lt;th&gt;) cells. This introduces significant overhead on screen reader users.</p>
            <h3>What To Do:</h3>
            <p>In almost every case, layout tables can be replaced with other HTML elements and styled with CSS to achieve the desired visual presentation. If the table contains tabular data, provide appropriate header (&lt;th&gt;) cells. If the layout table remains, verify that the reading and navigation order of table content (based on underlying source code order) is logical and give it role="presentation" to ensure it is not identified as a table to screen reader users.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;table&gt; element is present that does not contain any header (&lt;th&gt;) cells.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>1.3.2 Meaningful Sequence (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="table_caption_possible">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_table_caption_possible" aria-expanded="false" aria-controls="collapse_table_caption_possible">
              <img src="https://wave.webaim.org/img/icons/table_caption_possible.svg" class="img-fluid" style="width: 3%;" alt=""> Possible table caption - table_caption_possible
            </button>
          </h2>
        </div>
        <div id="collapse_table_caption_possible" class="collapse" aria-labelledby="table_caption_possible" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Text appears to be a table caption, but is not a caption element.</p>
            <h3>Why It Matters:</h3>
            <p>A table caption should be associated with a table using the &lt;caption&gt; element so it will be read by a screen reader with the table content.</p>
            <h3>What To Do:</h3>
            <p>If the text is a description of the table, associate the text with the table using the &lt;caption&gt; element (&lt;caption&gt; should be the first element within the &lt;table&gt;).</p>
            <h3>The Algorithm... in English:</h3>
            <p>A data table (has at least one table header) that does not already have a caption has:
            - A colspan attribute value of 3 or greater on the first cell of the table.
            - A element immediately before the table that contains less than 50 characters or contains less than 100 characters and is bold and/or centered.
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_internal_broken">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_internal_broken" aria-expanded="false" aria-controls="collapse_link_internal_broken">
              <img src="https://wave.webaim.org/img/icons/link_internal_broken.svg" class="img-fluid" style="width: 3%;" alt=""> Broken same-page link - link_internal_broken
            </button>
          </h2>
        </div>
        <div id="collapse_link_internal_broken" class="collapse" aria-labelledby="link_internal_broken" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A link to another location within the page is present but does not have a corresponding target.</p>
            <h3>Why It Matters:</h3>
            <p>A link to jump to another position within the the page assists users in navigating the web page, but only if the link target exists.</p>
            <h3>What To Do:</h3>
            <p>A link to jump to another position within the the page assists users in navigating the web page, but only if the link target exists.</p><h3>What To Do:</h3>
            <p>Ensure that the target for the link exists or remove the the same-page link.
            <h3>The Algorithm... in English:</h3>
            <p>An in-page link has an href attribute (starting with a #), but does not match either the id value of another element or the name attribute value of an anchor element within the page.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.1.1 Keyboard (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_suspicious">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_suspicious" aria-expanded="false" aria-controls="            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_suspicious" aria-expanded="false" aria-controls="collapse_link_suspicious">
              <img src="https://wave.webaim.org/img/icons/link_suspicious.svg" class="img-fluid" style="width: 3%;" alt=""> Suspicious link text - link_suspicious
            </button>
          </h2>
        </div>
        <div id="collapse_link_suspicious" class="collapse" aria-labelledby="link_suspicious" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Link text contains extraneous text or may not make sense out of context.<h3>Why It Matters:</h3>
            <p>Links, which are often read out of context, should clearly describe the destination or function of the link. Ambiguous text, text that does not make sense out of context, and extraneous text (such as "click here") can cause confusion and should be avoided.</p>
            <h3>What To Do:</h3>
            <p>Where appropriate, reword the link text so that it is more descriptive of its destination when read out of context. Remove any extraneous text (such as "click here").</p>
            <h3>The Algorithm... in English:</h3>
            <p>A link (including alt text of linked images) contains the phrase "click here" or "click", or the link text is "click here", "here", "more", "more...", "details", "more details", "link", "this page", "continue", "continue reading", "read more", or "button".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_redundant">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_redundant" aria-expanded="false" aria-controls="collapse_link_redundant">
              <img src="https://wave.webaim.org/img/icons/link_redundant.svg" class="img-fluid" style="width: 3%;" alt=""> Redundant link - link_redundant
            </button>
          </h2>
        </div>
        <div id="collapse_link_redundant" class="collapse" aria-labelledby="link_redundant" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Adjacent links go to the same URL.</p>
            <h3>Why It Matters:</h3>
            <p>When adjacent links go to the same location (such as a linked product image and an adjacent linked product name that go to the same product page) this results in additional navigation and repetition for keyboard and screen reader users.</p>
            <h3>What To Do:</h3>
            <p>If possible, combine the redundant links into one link and remove any redundant text or alternative text (for example, if a product image and product name are in the same link, the image can usually be given alt="").</p>
            <h3>The Algorithm... in English:</h3>
            <p>Two adjacent links go to the same URL.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_excel">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_excel" aria-expanded="false" aria-controls="collapse_link_excel">
              <img src="https://wave.webaim.org/img/icons/link_excel.svg" class="img-fluid" style="width: 3%;" alt=""> Link to Excel spreadsheet - link_excel
            </button>
          </h2>
        </div>
        <div id="collapse_link_excel" class="collapse" aria-labelledby="link_excel" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A link to a Microsoft Excel spreadsheet is present.</p>
            <h3>Why It Matters:</h3>
            <p>Unless authored with accessibility in mind, Microsoft Excel spreadsheets often have accessibility issues. Additionally, Excel documents are typically viewed using a separate application, and can thus cause confusion and navigation difficulties.</p>
            <h3>What To Do:</h3>
            <p>Ensure the Excel spreadsheet is natively accessible. Additionally, inform the user that the link will open an Excel spreadsheet. Because Excel spreadsheets have limitations in accessibility (particularly for complex content) and require a separate program, HTML content should usually be used in place of or in addition to the Excel spreadsheet.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A link to a .xls or .xlsx file is present.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_word">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_word" aria-expanded="false" aria-controls="collapse_link_word">
              <img src="https://wave.webaim.org/img/icons/link_word.svg" class="img-fluid" style="width: 3%;" alt=""> Link to Word document - link_word
            </button>
          </h2>
        </div>
        <div id="collapse_link_word" class="collapse" aria-labelledby="link_word" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A link to a Microsoft Word document is present.<h3>Why It Matters:</h3>
            <p>Unless authored with accessibility in mind, Microsoft Word documents often have accessibility issues. Additionally, Word documents are typically viewed using a separate application, and can thus cause confusion and navigation difficulties.<h3>What To Do:</h3>
            <p>Ensure that the Word document is natively accessible. Additionally, inform the user that the link will open a Word document. Because Word documents have limitations in accessibility (particularly for complex content) and require a separate program, HTML content should usually be used in place of or in addition to the Word document.<h3>The Algorithm... in English:</h3>
            <p>A link to a .doc or .docx file is present.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_powerpoint">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_powerpoint" aria-expanded="false" aria-controls="collapse_link_powerpoint">
              <img src="https://wave.webaim.org/img/icons/link_powerpoint.svg" class="img-fluid" style="width: 3%;" alt=""> Link to PowerPoint document - link_powerpoint
            </button>
          </h2>
        </div>
        <div id="collapse_link_powerpoint" class="collapse" aria-labelledby="link_powerpoint" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A link to a Microsoft PowerPoint presentation is present.</p>
            <h3>Why It Matters:</h3>
            <p>Unless authored with accessibility in mind, PowerPoint documents often have accessibility issues. Additionally, PowerPoint documents are typically viewed using a separate application, and can thus cause confusion and navigation difficulties.</p>
            <h3>What To Do:</h3>
            <p>Ensure the PowerPoint presentation is natively accessible. Additionally, inform the user that the link will open a PowerPoint document. Because PowerPoint documents have limitations in accessibility (particularly for complex content) and require a separate program, HTML content or an alternative accessible version (e.g., tagged PDF) should usually be used in place of or in addition to the PowerPoint presentation.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A link to a .ppt, .pptx, .pps, or .ppsx file is present.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_pdf">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_pdf" aria-expanded="false" aria-controls="collapse_link_pdf">
              <img src="https://wave.webaim.org/img/icons/link_pdf.svg" class="img-fluid" style="width: 3%;" alt=""> Link to PDF document - link_pdf
            </button>
          </h2>
        </div>
        <div id="collapse_link_pdf" class="collapse" aria-labelledby="link_pdf" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A link to a PDF document is present.</p>
            <h3>Why It Matters:</h3>
            <p>Unless authored with accessibility in mind, PDF documents often have accessibility issues. Additionally, PDF documents are typically viewed using a separate application or plug-in, and can thus cause confusion and navigation difficulties.</p>
            <h3>What To Do:</h3>
            <p>Ensure the PDF document is natively accessible. Additionally, inform the user that the link will open a PDF document. Because PDF documents may have limitations in accessibility (particularly for complex content) and require a separate program, HTML content should often be used in place of or in addition to the PDF document.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A link to a .pdf file is present.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_document">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_document" aria-expanded="false" aria-controls="collapse_link_document">
              <img src="https://wave.webaim.org/img/icons/link_document.svg" class="img-fluid" style="width: 3%;" alt=""> Link to document - link_document
            </button>
          </h2>
        </div>
        <div id="collapse_link_document" class="collapse" aria-labelledby="link_document" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A link to a non-HTML document is present.</p>
            <h3>Why It Matters:</h3>
            <p>Unless authored with accessibility in mind, documents that are not HTML often have accessibility issues. Additionally, these documents are typically viewed using a separate application, and can thus cause confusion and navigation difficulties.</p>
            <h3>What To Do:</h3>
            <p>Ensure the document is authored to be accessible, if possible. Additionally, inform the user that the link will open in a separate program. Because these documents have limitations in accessibility (particularly for complex content) and require a separate program, an accessible format should usually be used in place of or in addition to the document.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A link to a .rtf, .wpd, .ods, .odt, .odp, .sxw, .sxc, .sxd, .sxi, .pages, or .key file is present. Word, PowerPoint, Excel, and PDF are identified with separate icons.<img src="https://wave.webaim.org/img/icons/audio_video.svg" class="img-fluid" style="width: 3%;" alt=""> Audio/Video - audio_video</h2>

            <h3>What it means:</h3>
            <p>An audio or video file or link is present.</p>
            <h3>Why It Matters:</h3>
            <p>Audio content must be presented in a text format to be fully accessible to users who are deaf and hard of hearing. Video content with audio must have synchronized captions and a transcript. Audio-only content must have a transcript.</p>
            <h3>What To Do:</h3>
            <p>For video content, ensure that synchronized captioning and a transcript is provided. For audio-only content, ensure that a transcript is provided.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An embedded QuickTime, Windows Media Player, or RealPlayer movie is present or a link is present to a file with one of the following extensions: 3gp, aif, aiff, asf, asx, avi, flv, m4a, m4p, mov, mp2, mp3, mp4, mpa, mpeg, mpeg2, mpg, mpv, ogg, ogv, qtl, ra, ram, smi, smil, wav, wax, webm, wma, wmp, or wmx.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.2.1 Prerecorded Audio-only and Video-only (Level A)</li><li>1.2.2 Captions (Prerecorded) (Level A)</li><li>1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)</li><li>1.2.5 Audio Description (Prerecorded) (Level AA)</li><li>1.4.2 Audio Control (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="html5_video_audio">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_html5_video_audio" aria-expanded="false" aria-controls="collapse_html5_video_audio">
              <img src="https://wave.webaim.org/img/icons/html5_video_audio.svg" class="img-fluid" style="width: 3%;" alt=""> HTML5 video or audio - html5_video_audio
            </button>
          </h2>
        </div>
        <div id="collapse_html5_video_audio" class="collapse" aria-labelledby="html5_video_audio" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A &lt;video&gt; or &lt;audio&gt; element is present.</p>
            <h3>Why It Matters:</h3>
            <p>&lt;video&gt; defines video, such as a movie clip or other video streams. &lt;audio&gt; defines sound, such as music or other audio streams. Audio content must be presented in a text format to be fully accessible to users who are deaf and hard of hearing. Video content with audio must have synchronized captions and a transcript. Audio-only content must have a transcript.</p>
            <h3>What To Do:</h3>
            <p>For video content with audio, ensure that synchronized captioning and a transcript is provided. For audio-only content, ensure that a transcript is provided.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;video&gt; or &lt;audio&gt; element is present. Note that WAVE does not analyze fall-back content within the &lt;video&gt; or &lt;audio&gt; element. This content should be accessible because it will be presented to the user if the video or audio content is not supported.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.2.1 Prerecorded Audio-only and Video-only (Level A)</li><li>1.2.2 Captions (Prerecorded) (Level A)</li><li>1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)</li><li>1.2.5 Audio Description (Prerecorded) (Level AA)</li><li>1.4.2 Audio Control (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="flash">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_flash" aria-expanded="false" aria-controls="collapse_flash">
              <img src="https://wave.webaim.org/img/icons/flash.svg" class="img-fluid" style="width: 3%;" alt=""> Flash - flash
            </button>
          </h2>
        </div>
        <div id="collapse_flash" class="collapse" aria-labelledby="flash" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Flash content is present.</p>
            <h3>Why It Matters:</h3>
            <p>Flash content, if not authored to be accessible, will typically introduce significant accessibility issues.</p>
            <h3>What To Do:</h3>
            <p>If the Flash object does not present content, hide it from screen readers. If content is presented, provide an HTML alternative and/or make the Flash object natively accessible, including providing captions/transcripts when necessary and ensuring that the Flash object is keyboard-accessible.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;object&gt; element is present that has a classid attribute value of "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" or a type attribute value of "application/x-shockwave-flash", or an &lt;embed&gt; element is present that has a src attribute value of a .swf file or a type attribute value of "application/x-shockwave-flash".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.2.1 Prerecorded Audio-only and Video-only (Level A)</li><li>1.2.2 Captions (Prerecorded) (Level A)</li><li>1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)</li><li>1.2.5 Audio Description (Prerecorded) (Level AA)</li><li>2.1.2 No Keyboard Trap (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="applet">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_applet" aria-expanded="false" aria-controls="collapse_applet">
              <img src="https://wave.webaim.org/img/icons/applet.svg" class="img-fluid" style="width: 3%;" alt=""> Java Applet - applet
            </button>
          </h2>
        </div>
        <div id="collapse_applet" class="collapse" aria-labelledby="applet" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A Java applet is present.</p>
            <h3>Why It Matters:</h3>
            <p>Java applets will typically introduce significant accessibility issues.</p>
            <h3>What To Do:</h3>
            <p>Where possible, replace the Java content with a more accessible format. If Java is necessary, author the applet to support accessibility to the extent possible.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;applet&gt; element is present.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="plugin">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_plugin" aria-expanded="false" aria-controls="collapse_plugin">
              <img src="https://wave.webaim.org/img/icons/plugin.svg" class="img-fluid" style="width: 3%;" alt=""> Plugin - plugin
            </button>
          </h2>
        </div>
        <div id="collapse_plugin" class="collapse" aria-labelledby="plugin" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An unidentified plugin is present.</p>
            <h3>Why It Matters:</h3>
            <p>Plugins allow the introduction of non-HTML content, media players, etc. Because of limitations in non-HTML content, these often introduce accessibility issues.</p>
            <h3>What To Do:</h3>
            <p>Provide an HTML alternative or ensure the plugin content is accessible. Provide a link to download any required software.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;object&gt; or &lt;embed&gt; element is present that is not identified as Flash, Quicktime, RealPlayer, or Windows Media Player.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="noscript">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_noscript" aria-expanded="false" aria-controls="collapse_noscript">
              <img src="https://wave.webaim.org/img/icons/noscript.svg" class="img-fluid" style="width: 3%;" alt=""> Noscript element - noscript
            </button>
          </h2>
        </div>
        <div id="collapse_noscript" class="collapse" aria-labelledby="noscript" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A &lt;noscript&gt; element is present.</p>
            <h3>Why It Matters:</h3>
            <p>Content within &lt;noscript&gt; is presented if JavaScript is disabled. Because nearly all users (including users of screen readers and other assistive technologies) have JavaScript enabled, &lt;noscript&gt; cannot be used to provide an accessible version of inaccessible scripted content.</p>
            <h3>What To Do:</h3>
            <p>Ensure that scripted content is accessible. The &lt;noscript&gt; content will be presented to very few users, but must be accessible if used.</p><h3>The Algorithm... in English:</h3>
            <p>A &lt;noscript&gt; element is present.
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="event_handler">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_event_handler" aria-expanded="false" aria-controls="collapse_event_handler">
              <img src="https://wave.webaim.org/img/icons/event_handler.svg" class="img-fluid" style="width: 3%;" alt=""> Device dependent event handler - event_handler
            </button>
          </h2>
        </div>
        <div id="collapse_event_handler" class="collapse" aria-labelledby="headievent_handlerngTen" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Ensure that scripted content is accessible. The &lt;noscript&gt; content will be presented to very few users, but must be accessible if used.</p><h3>The Algorithm... in English:</h3>
            <p>An event handler is present that may not be accessible.</p>
            <h3>Why It Matters:</h3>
            <p>The JavaScript events in use do not appear to be accessible to both mouse and keyboard users. To be fully accessible, critical JavaScript interaction should be device independent.</p>
            <h3>What To Do:</h3>
            <p>Ensure that critical functionality and content is accessible by using a device independent event handler (which responds to both keyboard and mouse) or by using both a mouse dependent and a keyboard dependent event handler.</p>
            <h3>The Algorithm... in English:</h3>
            <p>One of the following is present:
            <ul>
            <li>an onmouseover event but not an onfocus event</li>
            <li>an onclick event on something other than a link, form control, or element with a tabindex value of 0</li>
            <li>ondblclick</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="javascript_jumpmenu">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_javascript_jumpmenu" aria-expanded="false" aria-controls="collapse_javascript_jumpmenu">
              <img src="https://wave.webaim.org/img/icons/javascript_jumpmenu.svg" class="img-fluid" style="width: 3%;" alt=""> JavaScript jump menu - javascript_jumpmenu
            </button>
          </h2>
        </div>
        <div id="collapse_javascript_jumpmenu" class="collapse" aria-labelledby="javascript_jumpmenu" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A JavaScript jump menu may be present.</p>
            <h3>Why It Matters:</h3>
            <p>A JavaScript jump menu is a select element that triggers a new web page with the onchange event handler. When navigating with the keyboard, each change in the select menu triggers a page change in some web browsers, thus making navigation very difficult.</p>
            <h3>What To Do:</h3>
            <p>If the onchange event handler triggers a new web page, eliminate the JavaScript jump menu and allow the user to change the select menu, then activate an adjacent button to trigger the new page.</p>
            <h3>The Algorithm... in English:</h3>
            <p>The onchange attribute is present on a &lt;select&gt; element.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.1.1 Keyboard (Level A)</li><li>3.2.2 On Input (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="accesskey">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_accesskey" aria-expanded="false" aria-controls="collapse_accesskey">
              <img src="https://wave.webaim.org/img/icons/accesskey.svg" class="img-fluid" style="width: 3%;" alt=""> Accesskey - accesskey
            </button>
          </h2>
        </div>
        <div id="collapse_accesskey" class="collapse" aria-labelledby="accesskey" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An accesskey attribute is present.</p>
            <h3>Why It Matters:</h3>
            <p>Accesskey provides a way to define shortcut keys for web page elements. Accesskeys often conflict with user or assistive technology shortcut keys and should be avoided or implemented with care.</p>
            <h3>What To Do:</h3>
            <p>Remove the accesskey or be aware that the accesskey may conflict with user shortcut keys.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An element has an accesskey attribute.<h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="tabindex">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_tabindex" aria-expanded="false" aria-controls="collapse_tabindex">
              <img src="https://wave.webaim.org/img/icons/tabindex.svg" class="img-fluid" style="width: 3%;" alt=""> Tabindex - tabindex
            </button>
          </h2>
        </div>
        <div id="collapse_tabindex" class="collapse" aria-labelledby="tabindex" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A positive tabindex value is present.</p>
            <h3>Why It Matters:</h3>
            <p>Tabindex values of 1 or greater specify an explicit tab/navigation order for page elements. Because it modifies the default tab order, cause confusion, and result in decreased keyboard accessibility, it should be avoided.</p>
            <h3>What To Do:</h3>
            <p>If the natural tab order is already logical, remove the tabindex. Otherwise, consider restructuring the page so that tabindex is not needed. If tabindex is maintained, ensure that the resulting navigation is logical and complete.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A tabindex attribute is present and has a positive value.<h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.4.3 Focus Order (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="text_small">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_text_small" aria-expanded="false" aria-controls="collapse_text_small">
              <img src="https://wave.webaim.org/img/icons/text_small.svg" class="img-fluid" style="width: 3%;" alt=""> Very small text -
            </button>
          </h2>
        </div>
        <div id="collapse_text_small" class="collapse" aria-labelledby="text_small" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Text is very small.</p>
            <h3>Why It Matters:</h3>
            <p>Text which is very small is difficult to read, particularly for those with low vision.</p>
            <h3>What To Do:</h3>
            <p>Increase the text to a more readable size.</p>
            <h3>The Algorithm... in English:</h3>
            <p>Text is present that is sized 10 pixels or smaller.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="text_justified">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_text_justified" aria-expanded="false" aria-controls="collapse_text_justified">
              <img src="https://wave.webaim.org/img/icons/text_justified.svg" class="img-fluid" style="width: 3%;" alt=""> Justified text - text_justified
            </button>
          </h2>
        </div>
        <div id="collapse_text_justified" class="collapse" aria-labelledby="text_justified" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Fully justified text is present.</p>
            <h3>Why It Matters:</h3>
            <p>Large blocks of justified text can negatively impact readability due to varying word/letter spacing and 'rivers of white' that flow through the text.</p>
            <h3>What To Do:</h3>
            <p>Remove the full justification from the text.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;p&gt;, &lt;div&gt;, or &lt;td&gt; element has more than 500 characters and is styled with text-align:justify.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="underline">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_underline" aria-expanded="false" aria-controls="collapse_underline">
              <img src="https://wave.webaim.org/img/icons/underline.svg" class="img-fluid" style="width: 3%;" alt=""> Underlined text - underline
            </button>
          </h2>
        </div>
        <div id="collapse_underline" class="collapse" aria-labelledby="underline" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Underlined text is present.</p>
            <h3>Why It Matters:</h3>
            <p>Underlines almost universally indicates linked text. Consider removing the underline from the non-link text. Other styling (e.g., bold or italics) can be used to differentiate the text.</p>
            <h3>What To Do:</h3>
            <p>Unless there is a distinct need for the underlined text, remove the underline from it. </p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;u&gt; element is present.</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="title_redundant">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_title_redundant" aria-expanded="false" aria-controls="collapse_title_redundant">
              <img src="https://wave.webaim.org/img/icons/title_redundant.svg" class="img-fluid" style="width: 3%;" alt=""> Redundant title text - title_redundant
            </button>
          </h2>
        </div>
        <div id="collapse_title_redundant" class="collapse" aria-labelledby="title_redundant" data-parent="#ADA-Alerts">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Title attribute text is the same as text or alternative text.</p>
            <h3>Why It Matters:</h3>
            <p>The title attribute value is used to provide <i>advisory</i> information. It typically appears when the users hovers the mouse over an element. The advisory information presented should not be identical to or very similar to the element text or alternative text.</p>
            <h3>What To Do:</h3>
            <p>In most cases the title attribute can be removed, otherwise modify it to provide advisory, but not redundant information. Note that the title text may or may not be read by a screen reader and is typically inaccessible to sighted keyboard users.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A title attribute value is identical to element text or image alternative text.</p>
          </div>
        </div>
      </div>
    </div>

  </div>  <!-- Close Tabe -->

  <!-- Tab #Features-->
  <div id="collapse-features" class="collapse" aria-labelledby="accessibility-features" data-parent="#TabMenu">
    <!-- Content -->
    <p>Features indicate things that probably improve accessibility (though these should be verified).</p>

    <div class="accordion" id="ADA-Features">
      <div class="card">
        <div class="card-header" id="alt">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt" aria-expanded="false" aria-controls="collapse_alt">
              <img src="https://wave.webaim.org/img/icons/alt.svg" class="img-fluid" style="width: 3%;" alt=""> Alternative text - alt
            </button>
          </h2>
        </div>
        <div id="collapse_alt" class="collapse" aria-labelledby="alt" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Image alternative text is present.</p>
            <h3>Why It Matters:</h3>
            <p>Alternative text presents the content or function of an image to screen reader users or in other situations where images cannot be seen or are unavailable.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the alternative text conveys the content and function of the image accurately and succinctly. The alt attribute should be equivalent, accurate, and succinct.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A non-empty alt attribute is present on an image.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_null">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_null" aria-expanded="false" aria-controls="collapse_alt_null">
              <img src="https://wave.webaim.org/img/icons/alt_null.svg" class="img-fluid" style="width: 3%;" alt=""> Null or empty alternative text - alt_null
            </button>
          </h2>
        </div>
        <div id="collapse_alt_null" class="collapse" aria-labelledby="alt_null" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Alternative text is null or empty (alt="").</p>
            <h3>Why It Matters:</h3>
            <p>If an image does not convey content or if the content of the image is conveyed elsewhere (such as in a caption or nearby text), the image should have empty/null alternative text (alt="") to ensure that it is ignored by a screen reader and is hidden when images are disabled or unavailable.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the image does not convey content or that the content of the image is conveyed in nearby text (e.g., a caption).</p>
            <h3>The Algorithm... in English:</h3>
            <p>An image has alt="".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_spacer">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_spacer" aria-expanded="false" aria-controls="collapse_alt_spacer">
              <img src="https://wave.webaim.org/img/icons/alt_spacer.svg" class="img-fluid" style="width: 3%;" alt=""> Null or empty alternative text on spacer - alt_spacer
            </button>
          </h2>
        </div>
        <div id="collapse_alt_spacer" class="collapse" aria-labelledby="alt_spacer" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Alternative text is null or empty (alt="") on a spacer image.<h3>Why It Matters:</h3>
            <p>Spacer images are used to control layout or positioning. Because they do not convey content, they should be given empty/null alternative text (alt="") to ensure that the content is not presented to screen reader users and is hidden when images are disabled or unavailable.<h3>What To Do:</h3>
            <p>Ensure that the image is a spacer image and that it does not convey content. Consider using CSS instead of spacer images for better control of positioning and layout.<h3>The Algorithm... in English:</h3>
            <p>An images with width and/or height of 3 pixels or less or file name of spacer.*, space.*, or blank.* has empty/null alt attribute value (alt="").<h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_link">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_link" aria-expanded="false" aria-controls="collapse_alt_link">
              <img src="https://wave.webaim.org/img/icons/alt_link.svg" class="img-fluid" style="width: 3%;" alt=""> Linked image with alternative text - alt_link
            </button>
          </h2>
        </div>
        <div id="collapse_alt_link" class="collapse" aria-labelledby="alt_link" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Alternative text is present for an image that is within a link.</p>
            <h3>Why It Matters:</h3>
            <p>Including appropriate alternative text on an image within a link ensures that the function and purpose of the link and the content of the image is available to screen reader users or when images are unavailable.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the alternative text presents the content of the image and/or the function of the link. If the full content and function of the link is presented in text within the link (an image and a text caption both within the same link, for example), then the image should generally be given empty/null alternative text (alt="") to avoid redundancy.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An image element has non-empty alternative text, is within a link, and no other text (or images with alternative text) is present within the link.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_input">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_input" aria-expanded="false" aria-controls="collapse_alt_input">
              <img src="https://wave.webaim.org/img/icons/alt_input.svg" class="img-fluid" style="width: 3%;" alt=""> Image button with alternative text - alt_input
            </button>
          </h2>
        </div>
        <div id="collapse_alt_input" class="collapse" aria-labelledby="alt_input" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Alternative text is present for an image input element.</p>
            <h3>Why It Matters:</h3>
            <p>Providing the functionality of image buttons in alternative text ensures that the button function is available to all users.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the alt attribute value presents the content and function of the image input element. If the image presents text, typically this text should be provided in the alt attribute.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;input type="image"&gt; element has a non-empty alt attribute value.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_map">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_alt_map" aria-expanded="false" aria-controls="collapse_alt_map">
              <img src="https://wave.webaim.org/img/icons/alt_map.svg" class="img-fluid" style="width: 3%;" alt=""> Image map with alternative text - alt_map
            </button>
          </h2>
        </div>
        <div id="collapse_alt_map" class="collapse" aria-labelledby="alt_map" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An alt attribute is present for an image that has hot spots.</p>
            <h3>Why It Matters:</h3>
            <p>If an image that uses an image map provides content or a function that is not already available through the hot spots (and their respective alternative texts), that information must be in the image's alt attribute in order for it to be available to screen reader users or when images are disabled.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the alternative text for the image map image is appropriate. The alternative text is typically empty (alt=""), unless the image conveys content not conveyed in the hot spot areas (e.g., "Map of the United States").</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;img&gt; element has both usemap and alt attributes.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="alt_area">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#alt_area" aria-expanded="false" aria-controls="alt_area">
              <img src="https://wave.webaim.org/img/icons/alt_area.svg" class="img-fluid" style="width: 3%;" alt=""> Image map area with alternative text - alt_area
            </button>
          </h2>
        </div>
        <div id="collapse_alt_area" class="collapse" aria-labelledby="alt_area" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Alternative text is present for an image map area (hot spot).</p>
            <h3>Why It Matters:</h3>
            <p>Presenting the functionality of image map areas (hot spots) in the &lt;area&gt; element's alt attribute value ensures that this information is presented to screen reader users or when images are disabled or unavailable.</p>
            <h3>What To Do:</h3>
            <p>Ensure the alternative text for the area element describes the function of the image map hot spot. Additionally, ensure that the area elements are listed in the code in a logical, intuitive order (e.g., matching the visual order, alphabetically, etc.).</p>
            <h3>The Algorithm... in English:</h3>
            <p>An image uses an image map containing an area element with a non-empty alt attribute value.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>2.4.4 Link Purpose (In Context) (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="label">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_label" aria-expanded="false" aria-controls="collapse_label">
              <img src="https://wave.webaim.org/img/icons/label.svg" class="img-fluid" style="width: 3%;" alt=""> Form label - label
            </button>
          </h2>
        </div>
        <div id="collapse_label" class="collapse" aria-labelledby="label" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A form label is present and associated with a form control.</p>
            <h3>Why It Matters:</h3>
            <p>A properly associated form label is presented to a screen reader user when the form control is accessed. Additionally, a label can be clicked with the mouse to set focus to the form control.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the label is accurate, descriptive, succinct, and that it is associated with the correct form control element.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;label&gt; element is present and properly associated to &lt;input&gt; (except types of image, submit, reset, button, or hidden), &lt;textarea&gt;, or &lt;select&gt; element.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="fieldset">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_fieldset" aria-expanded="false" aria-controls="collapse_fieldset">
              <img src="https://wave.webaim.org/img/icons/fieldset.svg" class="img-fluid" style="width: 3%;" alt=""> Fieldset - fieldset
            </button>
          </h2>
        </div>
        <div id="collapse_fieldset" class="collapse" aria-labelledby="fieldset" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A fieldset is present.</p>
            <h3>Why It Matters:</h3>
            <p>A fieldset provides a visual and structural grouping of related form elements. If present, a fieldset legend presents a description of the grouped form elements to screen reader users. A fieldset and legend are typically necessary for groups of check boxes or radio buttons.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the fieldset encloses the proper form elements. Most fieldsets should have an accurate, descriptive, and succinct legend. Note that the legend is repeated to screen reader users for each form control within the fieldsets.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A fieldset element is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_skip">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_skip" aria-expanded="false" aria-controls="collapse_link_skip">
              <img src="https://wave.webaim.org/img/icons/link_skip.svg" class="img-fluid" style="width: 3%;" alt=""> Skip link - link_skip
            </button>
          </h2>
        </div>
        <div id="collapse_link_skip" class="collapse" aria-labelledby="link_skip" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A link is present which allows users to skip over navigation or other content.</p>
            <h3>Why It Matters:</h3>
            <p>A link that provides functionality for the user to jump over navigation or other elements or jump to the main content of the page greatly assists keyboard users in navigating the web page.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the link is functioning properly and that the link text adequately describes the link functionality. If the skip link is hidden from sighted users, it should be made visible within the page when it has keyboard focus and must be accessible via the keyboard (do not use CSS display:none or visibility:hidden).</p>
            <h3>The Algorithm... in English:</h3>
            <p>An in-page link:
            <ul>
            <li>starts with the words "skip" or "jump"
            <li>has an href attribute value and that value matches the id value of another element within the page or the name attribute value of an anchor element within the page.
            <li>is NOT hidden with CSS display:none or visibility:hidden (this would result in a inaccessible "skip" link).
            </ul>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="link_skip_target">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_link_skip_target" aria-expanded="false" aria-controls="collapse_link_skip_target">
              <img src="https://wave.webaim.org/img/icons/link_skip_target.svg" class="img-fluid" style="width: 3%;" alt=""> Skip link target - link_skip_target
            </button>
          </h2>
        </div>
        <div id="collapse_link_skip_target" class="collapse" aria-labelledby="link_skip_target" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A target for a "skip" link is present.</p>
            <h3>Why It Matters:</h3>
            <p>A "skip" target identifies the location within the page where reading and navigation will resume after a "skip" link is activated.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the element is at the appropriate place within the page.<</p>
            h3>The Algorithm... in English:</h3>
            <p>An id value for any element or a name value for an anchor element matches the href value of a "skip" link within the page.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="lang">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_lang" aria-expanded="false" aria-controls="collapse_lang">
              <img src="https://wave.webaim.org/img/icons/lang.svg" class="img-fluid" style="width: 3%;" alt=""> Element language - lang
            </button>
          </h2>
        </div>
        <div id="collapse_lang" class="collapse" aria-labelledby="lang" data-parent="#ADA-Features">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>The language of a page element or part is identified.</p>
            <h3>Why It Matters:</h3>
            <p>Identifying the language of an element or portion of page that is in a different language than the page itself allows screen readers to read the content appropriately.</p>
            <h3>What To Do:</h3>
            <p>Ensure the lang attribute is necessary (it is different than the page's language) and the attribute value is a valid language code.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An element has a non-empty lang attribute value.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>3.1.2 Language of Parts (Level AA)</li></ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tab #Structural Elements-->
  <div id="collapse-structural-elements" class="collapse" aria-labelledby="accessibility-structural-elements" data-parent="#TabMenu">
    <!-- Content -->
    <p>Structural Elements areas of code where you should verify are coded correctly</p>

    <div class="accordion" id="ADA-Structural-Elements">
      <div class="card">
        <div class="card-header" id="1">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">
              <img src="https://wave.webaim.org/img/icons/h1.svg" class="img-fluid" style="width: 3%;" alt=""> Heading level 1 - h1
            </button>
          </h2>
        </div>
        <div id="collapse_1" class="collapse" aria-labelledby="1" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A first level heading (&lt;h1&gt; element) is present.</p>
            <h3>Why It Matters:</h3>
            <p>Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document. First level headings should contain the most important heading(s) on the page (generally the document title).</p>
            <h3>What To Do:</h3>
            <p>Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;h1&gt; element is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="h2">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_h2" aria-expanded="false" aria-controls="collapse_h2">
              <img src="https://wave.webaim.org/img/icons/h2.svg" class="img-fluid" style="width: 3%;" alt=""> Heading level 2 - h2
            </button>
          </h2>
        </div>
        <div id="collapse_h2" class="collapse" aria-labelledby="h2" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A second level heading (&lt;h2&gt; element) is present.</p>
            <h3>Why It Matters:</h3>
            <p>Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;h2&gt; element is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="h3">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_h3" aria-expanded="false" aria-controls="collapse_h3">
              <img src="https://wave.webaim.org/img/icons/h3.svg" class="img-fluid" style="width: 3%;" alt=""> Heading level 3 - h3
            </button>
          </h2>
        </div>
        <div id="collapse_h3" class="collapse" aria-labelledby="h3" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A third level heading (&lt;h3&gt; element) is present.</p>
            <h3>Why It Matters:</h3>
            <p>Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;h3&gt; element is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="h4">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_h4" aria-expanded="false" aria-controls="collapse_h4">
              <img src="https://wave.webaim.org/img/icons/h4.svg" class="img-fluid" style="width: 3%;" alt=""> Heading level 4 - h4
            </button>
          </h2>
        </div>
        <div id="collapse_h4" class="collapse" aria-labelledby="h4" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A fourth level heading (&lt;h4&gt; element) is present.</p>
            <h3>Why It Matters:</h3>
            <p>Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;h4&gt; element is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="h5">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_h5" aria-expanded="false" aria-controls="collapse_h5">
              <img src="https://wave.webaim.org/img/icons/h5.svg" class="img-fluid" style="width: 3%;" alt=""> Heading level 5 - h5
            </button>
          </h2>
        </div>
        <div id="collapse_h5" class="collapse" aria-labelledby="h5" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A fifth level heading (&lt;h5&gt; element) is present.<h3>Why It Matters:</h3>
            <p>Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.<h3>What To Do:</h3>
            <p>Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.<h3>The Algorithm... in English:</h3>
            <p>An &lt;h5&gt; element is present.<h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="h6">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_h6" aria-expanded="false" aria-controls="collapse_h6">
              <img src="https://wave.webaim.org/img/icons/h6.svg" class="img-fluid" style="width: 3%;" alt=""> Heading level 6 - h6
            </button>
          </h2>
        </div>
        <div id="collapse_h6" class="collapse" aria-labelledby="h6" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A sixth level heading (&lt;h6&gt; element) is present.<h3>Why It Matters:</h3>
            <p>Headings facilitate page navigation for users of assistive technologies. They also provide semantic and visual meaning and structure to the document.<h3>What To Do:</h3>
            <p>Ensure that the text in question is truly a heading and that it is structured correctly in the page outline.<h3>The Algorithm... in English:</h3>
            <p>An &lt;h6&gt; element is present.<h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="ol">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_ol" aria-expanded="false" aria-controls="collapse_ol">
              <img src="https://wave.webaim.org/img/icons/ol.svg" class="img-fluid" style="width: 3%;" alt=""> Ordered list - ol
            </button>
          </h2>
        </div>
        <div id="collapse_ol" class="collapse" aria-labelledby="ol" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An ordered (numbered) list (&lt;ol&gt; element) is present.<h3>Why It Matters:</h3>
            <p>Ordered lists present a group of related sequential items. Users of assistive technologies can navigate by and within lists.<h3>What To Do:</h3>
            <p>Ensure that an ordered (numbered) list is appropriate for the context. If list items are parallel or the order of the items is not important, an unordered list (&lt;ul&gt;) is likely more appropriate.<h3>The Algorithm... in English:</h3>
            <p>An &lt;ol&gt; element is present.<h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="ul">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_ul" aria-expanded="false" aria-controls="collapse_ul">
              <img src="https://wave.webaim.org/img/icons/ul.svg" class="img-fluid" style="width: 3%;" alt=""> Unordered list - ul
            </button>
          </h2>
        </div>
        <div id="collapse_ul" class="collapse" aria-labelledby="ul" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An unordered (bulleted) list (&lt;ul&gt; element) is present.</p>
            <h3>Why It Matters:</h3>
            <p>Ordered lists present a group of related, parallel items. Users of many assistive technologies can navigate by and within lists.</p>
            <h3>What To Do:</h3>
            <p>Ensure that an unordered (bulleted) list is appropriate for the context. If list items are sequential or numbered, an ordered list (&lt;ol&gt;) is likely more appropriate.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;ul&gt; element is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="dl">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_dl" aria-expanded="false" aria-controls="collapse_dl">
              <img src="https://wave.webaim.org/img/icons/dl.svg" class="img-fluid" style="width: 3%;" alt=""> Definition/description list - dl
            </button>
          </h2>
        </div>
        <div id="collapse_dl" class="collapse" aria-labelledby="dl" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A definition/description list (&lt;dl&gt; element) is present.</p>
            <h3>Why It Matters:</h3>
            <p>Definition lists (called description lists in HTML5) present the descriptions for terms or name/value pairs. Users of many assistive technologies can navigate by and within lists.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the list is appropriate for the context (it is used for definitions or name/value pairs) and that definition terms (&lt;dt&gt;) and descriptions (&lt;dd&gt;) are provided.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;dl&gt; element is present. </p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="header">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_header" aria-expanded="false" aria-controls="collapse_header">
              <img src="https://wave.webaim.org/img/icons/header.svg" class="img-fluid" style="width: 3%;" alt=""> Header - header
            </button>
          </h2>
        </div>
        <div id="collapse_header" class="collapse" aria-labelledby="header" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A &lt;header&gt; element or banner landmark is present.</p>
            <h3>Why It Matters:</h3>
            <p>Headers identify page introduction or navigation. They typically surrounds the site or page name, logo, top navigation, or other header content. Headers facilitate page semantics and navigation.</p>
            <h3>What To Do:</h3>
            <p>Ensure the header surrounds and defines page header content.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;header&gt; element or role="banner" is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="nav">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_nav" aria-expanded="false" aria-controls="collapse_nav">
              <img src="https://wave.webaim.org/img/icons/nav.svg" class="img-fluid" style="width: 3%;" alt=""> Navigation - nav
            </button>
          </h2>
        </div>
        <div id="collapse_nav" class="collapse" aria-labelledby="nav" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A &lt;nav&gt; element or navigation landmark is present.</p>
            <h3>Why It Matters:</h3>
            <p>The navigation identifies a section of navigation links and can facilitate page semantics and navigation.</p>
            <h3>What To Do:</h3>
            <p>Ensure the element defines page navigation. Multiple navigation elements on one page can be differentiated with ARIA labels.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;nav&gt; element or role="navigation" is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="search">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_search" aria-expanded="false" aria-controls="collapse_search">
              <img src="https://wave.webaim.org/img/icons/search.svg" class="img-fluid" style="width: 3%;" alt=""> Search - search
            </button>
          </h2>
        </div>
        <div id="collapse_search" class="collapse" aria-labelledby="search" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An ARIA search landmark is present.</p>
            <h3>Why It Matters:</h3>
            <p>The search landmark identifies the search area within the page and facilitates keyboard navigation to the search area.</p>
            <h3>What To Do:</h3>
            <p>Ensure the search landmark is implemented properly and surrounds the search area of the page.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An element has role="search".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="main">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_main" aria-expanded="false" aria-controls="collapse_main">
              <img src="https://wave.webaim.org/img/icons/main.svg" class="img-fluid" style="width: 3%;" alt=""> Main content - main
            </button>
          </h2>
        </div>
        <div id="collapse_main" class="collapse" aria-labelledby="main" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A &lt;main&gt; element or main landmark is present.</p>
            <h3>Why It Matters:</h3>
            <p>The &lt;main&gt; element or role="main" attribute identifies the main content for the page. This facilitate page semantics and navigation.</p>
            <h3>What To Do:</h3>
            <p>Ensure the element surrounds and defines page main content.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;main&gt; element or role="main"is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aside">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aside" aria-expanded="false" aria-controls="collapse_aside">
              <img src="https://wave.webaim.org/img/icons/aside.svg" class="img-fluid" style="width: 3%;" alt=""> Aside - aside
            </button>
          </h2>
        </div>
        <div id="collapse_aside" class="collapse" aria-labelledby="aside" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An &lt;aside&gt; element or complementary landmark is present.</p>
            <h3>Why It Matters:</h3>
            <p>An aside identifies secondary, related, or complementary content. It is typically presented in a sidebar.</p>
            <h3>What To Do:</h3>
            <p>Ensure the aside surrounds and defines secondary, related, or complementary content.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An &lt;aside&gt; element or role="complementary" is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="footer">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_footer" aria-expanded="false" aria-controls="collapse_footer">
              <img src="https://wave.webaim.org/img/icons/footer.svg" class="img-fluid" style="width: 3%;" alt=""> Footer - footer
            </button>
          </h2>
        </div>
        <div id="collapse_footer" class="collapse" aria-labelledby="footer" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A &lt;footer&gt; element or contentinfo landmark is present.</p>
            <h3>Why It Matters:</h3>
            <p>Footers identify a footer for the page or a page section. It typically identifies authorship, related links, copyright date, or other footer content. Footers facilitate page semantics and navigation.</p>
            <h3>What To Do:</h3>
            <p>Ensure the element surrounds and defines page or page section footer content.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;footer&gt; element or role="contentinfo" is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.1 Bypass Blocks (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="table_data">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_table_data" aria-expanded="false" aria-controls="collapse_table_data">
              <img src="https://wave.webaim.org/img/icons/table_data.svg" class="img-fluid" style="width: 3%;" alt=""> Data table - table_data
            </button>
          </h2>
        </div>
        <div id="collapse_table_data" class="collapse" aria-labelledby="table_data" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A data table is present.</p>
            <h3>Why It Matters:</h3>
            <p>Data tables present tabular data. Data tables should contain table header cells that identify the content of their respective row and/or columns. Tables with proper table headers provide additional information and navigation for screen reader users.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the table contains tabular data and that it is not used merely for page layout. Ensure that all column and row headers are &lt;th&gt; elements and ensure the data cells are associated with their proper header cells (typically by assigning scope to the table headers). Where appropriate, associate a descriptive caption (&lt;caption&gt; element) to the table.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;table&gt; element is present that contains at least one table header cell (&lt;th&gt;).</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="table_caption">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_table_caption" aria-expanded="false" aria-controls="collapse_table_caption">
              <img src="https://wave.webaim.org/img/icons/table_caption.svg" class="img-fluid" style="width: 3%;" alt=""> Table caption - table_caption
            </button>
          </h2>
        </div>
        <div id="collapse_table_caption" class="collapse" aria-labelledby="table_caption" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A table caption is present.</p>
            <h3>Why It Matters:</h3>
            <p>An associated table caption will be read by a screen reader with the table content.</p>
            <h3>What To Do:</h3>
            <p>Ensure the table caption is properly associated with the correct table (&lt;caption&gt; should be the first element within the &lt;table&gt;) and that it provides a succinct description of the table.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;caption&gt; element is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="th">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_th" aria-expanded="false" aria-controls="collapse_th">
              <img src="https://wave.webaim.org/img/icons/th.svg" class="img-fluid" style="width: 3%;" alt=""> Table header cell - th
            </button>
          </h2>
        </div>
        <div id="collapse_th" class="collapse" aria-labelledby="th" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A table header cell (&lt;th&gt;) is present.</p>
            <h3>Why It Matters:</h3>
            <p>Table headers describe the content of their respective row or column. They can be identified by screen readers when data cells are encountered.</p>
            <h3>What To Do:</h3>
            <p>Ensure the cell is a table header, otherwise change it to a data cell (&lt;td&gt;). For complex tables (particularly when there are spanned cells), the relationship between header and data cells may need to be defined using scope (e.g., &lt;th scope="col"&gt; or &lt;th scope="row"&gt;) or headers and id attributes.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A &lt;th&gt; element is present that does not have a scope attribute value of "row" or "col".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="th_col">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_th_col" aria-expanded="false" aria-controls="collapse_th_col">
              <img src="https://wave.webaim.org/img/icons/th_col.svg" class="img-fluid" style="width: 3%;" alt=""> Column header cell - th_col
            </button>
          </h2>
        </div>
        <div id="collapse_th_col" class="collapse" aria-labelledby="th_col" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A table column header (&lt;th scope="col"&gt;) is present.</p>
            <h3>Why It Matters:</h3>
            <p>Adding a column scope to a table header ensures the cells within that column will be programmatically associated to that header, particularly with complex tables. This facilitates screen reader navigation and orientation within the data table.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the cell is actually a header cell for tabular data and that it is a column header.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A table header cell (&lt;th&gt;) is present that has a scope attribute value of "col".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="th_row">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_th_row" aria-expanded="false" aria-controls="collapse_th_row">
              <img src="https://wave.webaim.org/img/icons/th_row.svg" class="img-fluid" style="width: 3%;" alt=""> Row header cell - th_row
            </button>
          </h2>
        </div>
        <div id="collapse_th_row" class="collapse" aria-labelledby="th_row" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A table row header (&lt;th scope="row"&gt;) is present.</p>
            <h3>Why It Matters:</h3>
            <p>Adding a row scope to a table header ensures the cells within that row will be programmatically associated to that header, particularly with complex tables. This facilitates screen reader navigation and orientation within the data table.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the cell is actually a header cell for tabular data and that it is a row header.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A table header cell (&lt;th&gt;) is present that has a scope attribute value of "row".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="iframe">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_iframe" aria-expanded="false" aria-controls="collapse_iframe">
              <img src="https://wave.webaim.org/img/icons/iframe.svg" class="img-fluid" style="width: 3%;" alt=""> Inline Frame - iframe
            </button>
          </h2>
        </div>
        <div id="collapse_iframe" class="collapse" aria-labelledby="iframe" data-parent="#ADA-Structural-Elements">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An inline frame (&lt;iframe&gt;) is present.</p>
            <h3>Why It Matters:</h3>
            <p>The content of an inline frame is read as if it were part of the page that contains it. The content of the iframe must be accessible. A title attribute value for the iframe will generally be read by a screen reader when the iframe is encountered.</p>
            <h3>What To Do:</h3>
            <p>The content of an inline frame is read as if it were part of the page that contains it. The content of the iframe must be accessible. A title attribute value for the iframe will generally be read by a screen reader when the iframe is encountered.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the content within the iframe is accessible. Optionally, a title attribute value can be added to provide a brief, advisory description of the iframe.
            <h3>The Algorithm... in English:</h3>
            <p>The content of an inline frame is read as if it were part of the page that contains it. The content of the iframe must be accessible. A title attribute value for the iframe will generally be read by a screen reader when the iframe is encountered.</p>
            <h3>What To Do:</h3>
            <p>An &lt;iframe&gt; element is present.
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tab #Aria-->
  <div id="collapse-aria" class="collapse" aria-labelledby="accessibility-aria" data-parent="#TabMenu">
    <!-- Content -->
    <p>Aria elements are present and help with accessibility verify they are being uses accuratel.</p>
    <p>It is always advisable if you can you use html first and aria if there is not other alternative.</p>

    <div class="accordion" id="ADA-Aria">
      <div class="card">
        <div class="card-header" id="aria">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria" aria-expanded="false" aria-controls="collapse_aria">
              <img src="https://wave.webaim.org/img/icons/aria.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA - aria
            </button>
          </h2>
        </div>
        <div id="collapse_aria" class="collapse" aria-labelledby="aria" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>The content of an inline frame is read as if it were part of the page that contains it. The content of the iframe must be accessible. A title attribute value for the iframe will generally be read by a screen reader when the iframe is encountered.</p>
            <h3>What To Do:</h3>
            <p>An ARIA role, state, or property is present.</p>
            <h3>Why It Matters:</h3>
            <p>ARIA provides enhanced semantics and accessibility for web content.</p>
            <h3>What To Do:</h3>
            <p>Ensure the ARIA role, state, or property is used correctly. Use standard HTML accessibility features when possible. Be aware that support for ARIA is limited in older browsers and assistive technologies.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An ARIA role, state, or property is present, excluding landmark roles, aria-labelledby, or aria-describedby which are distinct WAVE items.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_label">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_label" aria-expanded="false" aria-controls="collapse_aria_label">
              <img src="https://wave.webaim.org/img/icons/aria_label.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA label - aria_label
            </button>
          </h2>
        </div>
        <div id="collapse_aria_label" class="collapse" aria-labelledby="aria_label" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An aria-label or aria-labelledby attribute is present.</p>
            <h3>Why It Matters:</h3>
            <p>ARIA labels define accessible names to be read by screen readers for interface elements. They may be used when HTML associations (label, alternative text, etc.) are not sufficient.</p>
            <h3>What To Do:</h3>
            <p>Ensure the aria-label value or element referenced by aria-labelledby provides a descriptive, accurate label. When possible, use standard HTML &lt;label&gt; or other markup to make the association.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An aria-label or aria-labelledby attribute is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.1.1 Non-text Content (Level A)</li><li>1.3.1 Info and Relationships (Level A)</li><li>2.4.6 Headings and Labels (Level AA)</li><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_describedby">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_describedby" aria-expanded="false" aria-controls="collapse_aria_describedby">
              <img src="https://wave.webaim.org/img/icons/aria_describedby.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA description - aria_describedby
            </button>
          </h2>
        </div>
        <div id="collapse_aria_describedby" class="collapse" aria-labelledby="aria_describedby" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An aria-describedby attribute is present.</p>
            <h3>Why It Matters:</h3>
            <p>ARIA descriptions provide additional information about interface elements, primarily form controls.</p>
            <h3>What To Do:</h3>
            <p>Ensure the aria-describedby attribute references an element that provides a correct description.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An aria-describedby attribute is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>1.3.1 Info and Relationships (Level A)</li><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_live_region">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_live_region" aria-expanded="false" aria-controls="collapse_aria_live_region">
              <img src="https://wave.webaim.org/img/icons/aria_live_region.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA alert or live region - aria_live_region
            </button>
          </h2>
        </div>
        <div id="collapse_aria_live_region" class="collapse" aria-labelledby="aria_live_region" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An ARIA alert role or live region is present.</p>
            <h3>Why It Matters:</h3>
            <p>ARIA live regions and alerts can be used to dynamically inform screen reader users of content updates.</p>
            <h3>What To Do:</h3>
            <p>Ensure the live region is properly tested and presents important, succinct content updates. A live region should not be used if focus is set to the updated page element.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A role="alert", role="alertdialog", or aria-live attribute is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>3.3.1 Error Identification (Level A)</li><li>4.1.3 Status Messages (Level AA)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_menu">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_menu" aria-expanded="false" aria-controls="collapse_aria_menu">
              <img src="https://wave.webaim.org/img/icons/aria_menu.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA menu - aria_menu
            </button>
          </h2>
        </div>
        <div id="collapse_aria_menu" class="collapse" aria-labelledby="aria_menu" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An ARIA menu is present.</p>
            <h3>Why It Matters:</h3>
            <p>ARIA menus are application menus (like those used in software menu) with a specific keyboard interactions. They are NOT for navigation links on a web site.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the menu is an application menu and has the appropriate keyboard interactions (menu items are navigated via the arrow keys, not via the Tab key), otherwise remove the menu role.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An element with role="menu" or role="menubar" is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.1.1 Keyboard (Level A)</li><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="headingTen">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_headingTen" aria-expanded="false" aria-controls="collapse_headingTen">
              <img src="https://wave.webaim.org/img/icons/aria_button.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA button - aria_button
            </button>
          </h2>
        </div>
        <div id="collapse_headingTen" class="collapse" aria-labelledby="headingTen" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An element with role="button" is present.</p>
            <h3>Why It Matters:</h3>
            <p>Elements with role="button" must function like native buttons. These should typically be replaced with true button elements.</p>
            <h3>What To Do:</h3>
            <p>Replace the element with a true button element, or ensure the element is keyboard navigable, can be activated with Enter or Space key presses (key detection is typically necessary), and provides a visible focus indicator.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An element (other than a button) has role="button".</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.1.1 Keyboard (Level A)</li><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_expanded">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_expanded" aria-expanded="false" aria-controls="collapse_aria_expanded">
              <img src="https://wave.webaim.org/img/icons/aria_expanded.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA expanded - aria_expanded
            </button>
          </h2>
        </div>
        <div id="collapse_aria_expanded" class="collapse" aria-labelledby="aria_expanded" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An aria-expanded attribute is present.</p>
            <h3>Why It Matters:</h3>
            <p>The aria-expanded attribute indicates the status of content that can be expanded and collapsed.</p>
            <h3>What To Do:</h3>
            <p>Ensure that aria-expanded is used correctly (typically on a button that controls expandable content) and that the value (true or false) reflects the expansion state.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An element with an aria-expanded attribute is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_haspopup">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_haspopup" aria-expanded="false" aria-controls="collapse_aria_haspopup">
              <img src="https://wave.webaim.org/img/icons/aria_haspopup.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA popup - aria_haspopup
            </button>
          </h2>
        </div>
        <div id="collapse_aria_haspopup" class="collapse" aria-labelledby="aria_haspopup" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>An element triggers a popup menu, dialog, or other element.</p>
            <h3>Why It Matters:</h3>
            <p>The aria-haspopup element, when applied to a button, indicates that triggering the element will open an ARIA menu, dialog, listbox, tree, or grid.</p>
            <h3>What To Do:</h3>
            <p>Ensure that the element triggers an ARIA menu, dialog, listbox, tree, or grid and that the aria-haspop attribute value aligns with the type of element that is opened.</p>
            <h3>The Algorithm... in English:</h3>
            <p>An aria-haspopup attribute is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_tabindex">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_tabindex" aria-expanded="false" aria-controls="collapse_aria_tabindex">
              <img src="https://wave.webaim.org/img/icons/aria_tabindex.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA tabindex - aria_tabindex
            </button>
          </h2>
        </div>
        <div id="collapse_aria_tabindex" class="collapse" aria-labelledby="aria_tabindex" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>A tabindex value of 0 or less is present.</p>
            <h3>Why It Matters:</h3>
            <p>Tabindex can facilitate keyboard navigation for interactive elements. A tabindex attribute value of 0 places an item into the keyboard navigation order (i.e., you can navigate to it using the Tab key). A value of less than 0 (typically -1) removes an element from the keyboard flow (you cannot Tab to it), but allows it to receive programmatic focus (e.g., via scripting).</p>
            <h3>What To Do:</h3>
            <p>Ensure that tabindex is being used correctly by navigating and interacting with the elements using only the keyboard. Positive tabindex values specify a distinct tab order and should typically be avoided.</p>
            <h3>The Algorithm... in English:</h3>
            <p>A tabindex attribute is present and has a value of 0 or less.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>2.1.1 Keyboard (Level A)</li></ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header" id="aria_hidden">
          <h2 class="mb-0">
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapse_aria_hidden" aria-expanded="false" aria-controls="collapse_aria_hidden">
              <img src="https://wave.webaim.org/img/icons/aria_hidden.svg" class="img-fluid" style="width: 3%;" alt=""> ARIA hidden - aria_hidden
            </button>
          </h2>
        </div>
        <div id="collapse_aria_hidden" class="collapse" aria-labelledby="aria_hidden" data-parent="#ADA-Aria">
          <div class="card-body">
            <h3>What it means:</h3>
            <p>Content is hidden with ARIA.</p>
            <h3>Why It Matters:</h3>
            <p>Content hidden with aria-hidden="true" is not presented to screen reader users.</p>
            <h3>What To Do:</h3>
            <p>Ensure the content is intended to be hidden from screen reader users. The hidden content must not contain any navigable elements (such as links or form controls).</p>
            <h3>The Algorithm... in English:</h3>
            <p>An element with aria-hidden="true" is present.</p>
            <h3>Relevant WCAG 2.1 Success Criteria:</h3>
            <ul><li>4.1.2 Name, Role, Value (Level A)</li></ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
