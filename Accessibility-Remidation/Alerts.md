---
layout: template
mine-image: ADAComplinaceLogo.png
img-size: 100
meta-title: Accessibility Alerts
title: Accessibility Alerts
category: Accessibility Remediation
subtitle: Alerts Documentation
description: How to resolve Alerts accessibility issuse.
permalink: Accessibility-Remidation/Alerts.html
---

<!-- <p><a href="https://wave.webaim.org/"><img src="https://wave.webaim.org/img/wavelogo.svg" alt="WAVE Web Accessibility Evaluation Tool" style="width:50%"></a></p>
<h1>WAVE Documentation</h1> -->

<p>Welcome, thank you for chooseing Kaffeinated Kodemonkey for your ADA certification and/or VPAT needs.</p>

<p>Through an Accessibility Evaluation you recived a How-To-Fix Report outlining errors, alerts, features, structure elements, and aria
content found throught your site. Each page has been listed with the number of issues or warnings that linked to the item on this page to
help your team in understanding what they means, why it matters, and how to resolve it.</p>

<p>If at any time you do not understand how to resolve and issue please reach out to your accessibiltiy specalist for further explination.</p>

  <!-- Tab #Alerts-->
  <div id="collapse-alerts" class="collapse show" aria-labelledby="accessibility-alerts" data-parent="#TabMenu">
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
