---
layout: posts
title:  "Guideline 1.1 – Text Alternatives"
date: 2020-04-03
categories: Accessibility
tags: [WCAG, Compliance, Criteria, Principle 1, Perceivable]
banner: Blog/Accessibility/pour-web-design.png
excerpt_separator: "<!-- more -->"
description: Understanding Guideline 1.1 – Text Alternatives under Principle 1 – Perceivable.
permalink: blog/:categories/:title:output_ext
---

<h2>Overview</h2>

<p>For those of you that may not know, Kaffeinated Kodemonkey is an Accessibility Driven Web Design Agency. Our mission is to develop websites that are accessible by nature in doing so we follow POUR Web Design.</p>

<p>We will start with the first principle in POUR Web Design, Perceivable, the four (4) Guidelines, and how to use them.</p>

<h2>What does Perceivable mean?</h2>
<blockquote class="blockquote ">
  <p class="mb-0">Information and user interface components must be presentable to users in ways they can perceive. ]</p>
</blockquote>

<p>This means the user can comprehend the information being presented.</p>

<p>Guidelines we will cover in this series:</p>
<ul>
  <li>1.1 Text Alternatives</li>
  <li>1.2 Time-based Media</li>
  <li>1.3 Adaptable</li>
  <li>1.4 Distinguishable </li>
</ul>

<h2>Guideline - 1.1 Text Alteratives</h2>
<blockquote class="blockquote shadow-sm p-3 m-4 bg-light rounded">
  <p class="mb-0">Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.</p>
  <footer class="blockquote-footer">WCAG<cite title="Source Title"><a href="https://www.w3.org/WAI/WCAG21/quickref/#text-alternativeshttps://www.w3.org/WAI/WCAG21/Understanding/text-alternatives" target="blank">Guideline 1.1 – Text Alternatives</a></cite></footer>
</blockquote>

<h3>Article 1.1.1 - Level A Criterion</h3>
<p>All non-text content that is presented to the user has a text alternative that serves the equivalent purpose, except for the situations listed below.</p>

<ul>
  <li><strong>Controls, Input:</strong> If non-text content is a control or accepts user input, then it has a name that describes its purpose. </li>
  <li><strong>Time-Based Media:</strong> If non-text content is time-based media, then text alternatives at least provide descriptive identification of the non-text content.</li>
  <li><strong>Test:</strong> If non-text content is a test or exercise that would be invalid if presented in text, then text alternatives at least provide descriptive identification of the non-text content.</li>
  <li><strong>Sensory:</strong> If non-text content is primarily intended to create a specific sensory experience, then text alternatives at least provide descriptive identification of the non-text content.</li>
  <li><strong><span class="text-uppercase">captcha:</span></strong> If the purpose of non-text content is to confirm that content is being accessed by a person rather than a computer, then text alternatives that identify and describe the purpose of the non-text content are provided, and alternative forms of <span class="text-uppercase">captcha</span> using output modes for different types of sensory perception are provided to accommodate different disabilities.</li>
  <li><strong>Decoration, Formatting, Invisible:</strong> If non-text content is pure decoration, is used only for visual formatting, or is not presented to users, then it is implemented in a way that it can be ignored by assistive technology.</li>
</ul>

<h3>Okay, What does that mean?</h3>
<p>First, we have "non-text" - which refers to any content that is not a series of characters that can be programmatically determined or where the series is not expressing something in human language. Such as an image, form inputs, video or audio.</p>

<p>Second, we have "text alternative" - which refers to text that is programmatically associated with non-text content or referred to from text that is programmatically associated with non-text content. </p>

<p>Programmatically associated text is text whose location can be programmatically determined from the non-text content. Such as an image of a chart is described in the text in the paragraph after the chart. The short text alternative for the chart indicates that a description follows. </p>

<h3>Putting it into action</h3>
<p>Here how this works. Let's take the Data chart we used above. Say we have an image of a pie chart showing productivity over six (6) months. You would use the alt tag to let the user know a detailed explanation is below.</p>

<p>Example:</p>
<blockquote class="blockquote shadow-sm p-3 m-4 bg-light rounded">
  &lt;img src="pie-chart.png alt="six month productivity pie chart. See Explanation below."&gt;
  &lt;p&gt;In May we showed 10% productivity, in June we have 30% however in July productivity levels dropped by 10% showing an
  increase from May of 20%. &lt;/p&gt;
</blockquote>

<p>You could even follow the description with a table outlining the pie chart.</p>

<h3>Examples where this would come into play:</h3>

<p><strong>Animation</strong></p>
<p>Or animation showing how a car engine works. There is no audio and the animation is part of a tutorial that describes how an engine works. Since the text of the tutorial already provides a full explanation, the image is an alternative for text and the text alternative includes only a brief description of the animation and refers to the tutorial text for more information.</p>

<p><strong>A traffic Web camera</strong></p>
<p>A Web site allows users to select from a variety of Web cameras positioned throughout a major city. After a camera is selected, the image updates every two minutes. A short text alternative identifies the Web camera as a "traffic Web camera." The site also provides a table of travel times for each of the routes covered by the Web cameras. The table is also updated every two minutes.</p>

<p><strong>An audio recording of a press conference </strong></p>
<p>A Web page includes a link to an audio recording of a press conference. The link text identifies the audio recording. The page also links to a text transcript of the press conference. The transcript includes a verbatim record of everything the speakers say. It identifies who is speaking as well as noting other significant sounds that are part of the recording, such as applause, laughter, questions from the audience, and so on.</p>

<p><strong>An audio recording of a speech</strong></p>
<p>The link to an audio clip says, "Chairman's speech to the assembly." A link to a text transcript is provided immediately after the link to the audio clip.</p>

<p><strong>Benefits:</strong></p>
<ul>
<li>This Success Criterion helps people who have difficulty perceiving visual content. Assistive technology can read text aloud, present it visually, or convert it to braille.</li>
<li>Text alternatives may help some people who have difficulty understanding the meaning of photographs, drawings, and other images (e.g., line drawings, graphic designs, paintings, three-dimensional representations), graphs, charts, animations, etc.</li>
<li>People who are deaf, are hard of hearing, or who are having trouble understanding audio information for any reason can read the text presentation. Research is ongoing regarding the automatic translation of the text into sign language.</li>
<li>Deaf-blind people can read the text in braille.</li>
<li>Additionally, text alternatives support the ability to search for non-text content and to repurpose content in a variety of ways.</li>
</ul>

<hr />
<p><strong>Disclaimer:</strong></p>
<p>This article is written by our accessibility expert in the effort to help individuals better understand the meaning of <a href="https://www.w3.org/WAI/WCAG21/Understanding/text-alternatives" target="blank">WCAG 2.1 Guideline 1.1 Text Alternative</a>. We gathered our information form the <a href="https://www.w3.org/WAI/WCAG21/Understanding/" target="blank">WCAG</a> and invite you to visit their site for more information and further explanations.</p>
