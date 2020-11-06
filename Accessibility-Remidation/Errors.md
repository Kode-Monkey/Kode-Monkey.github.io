---
layout: template
mine-image: ADA Complinace Logo.png
img-size: 100
meta-title: Accessibility Errors
title: Accessibility Errors
category: Accessibility Remediation
subtitle: Error Documentation
description: How to resolve Errors accessibility issuse.
permalink: Accessibility-Remedation/Errors
---

<!-- <p><a href="https://wave.webaim.org/"><img src="https://wave.webaim.org/img/wavelogo.svg" alt="WAVE Web Accessibility Evaluation Tool" style="width:50%"></a></p>
<h1>WAVE Documentation</h1> -->

<p>Welcome, thank you for chooseing Kaffeinated Kodemonkey for your ADA certification and/or VPAT needs.</p>

<p>Through an Accessibility Evaluation you recived a How-To-Fix Report outlining errors, alerts, features, structure elements, and aria
content found throught your site. Each page has been listed with the number of issues or warnings that linked to the item on this page to
help your team in understanding what they means, why it matters, and how to resolve it.</p>

<p>If at any time you do not understand how to resolve and issue please reach out to your accessibiltiy specalist for further explination.</p>



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