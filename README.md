<textarea id="source">

<h1 class="slide-header">Adjusting Layout with CSS</h1>

<span id=time-estimate class="color-grey-500">30 mins</span>

<p id="lesson-description">
  Have you ever tried to find something on a website only to realize you had no idea where to look? Once you understand how to create website layouts in CSS, you’ll never subject your users to that frustration again.
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Inline and Block Elements

<hr>

The Box Model

<hr>

Positioning

<hr>

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/adjusting-layout-with-css-1927d7.pdf" target="_blank" download="adjusting_layout_with_css_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Distinguish between inline and block HTML elements.</li>
  <li>Use the box model to adjust the size and spacing of HTML elements.</li>
  <li>Use CSS positioning to move HTML elements on a webpage.</li>
</ul>

---
<h1 class="slide-header">Connecting With Our Client</h1>

We’ve made some great progress on Hannah’s portfolio page. She now has some unique fonts and colors that make the text pop. 

But the images of her work still look kind of funny, right? And the navigation bar — the list of links to other pages on the site — doesn’t look very navigable.

In this lesson, we’ll learn how to move these images and list items to make a more visually appealing site.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/lesson2-start.png)

---

<h1 class="slide-header">Display Basics</h1>

All HTML elements have some default styling; `<h1>`s are always bigger than `<h2>`s, `<ul>`s always have solid black bullets, etc.

  Likewise, all HTML elements have a default way of being displayed on a page: as either a **block element** or an **inline element**.
  
  | Block Elements | Inline Elements |
  | -- | -- |
  | Always starts on a new line. | Sit within the content that surrounds them. | 
  | Take up the full width available on the screen. | Only take up as much width as necessary. | 
  | Stack on top of each other when new ones are added. | Render in one line. |
  | Can have set margins, padding, widths, or heights. | Cannot have set margins or padding. |
  | `<h1-6>`, `<div>`, `<p>`, `<ul>`, etc. | `<a>`, `<span>`, `<img>`, etc. |
  
  Want to see a visual? Click to the next slide.

---

<h1 class="slide-header">Block vs. Inline Elements</h1>

<details>
  <summary>Block Elements</summary>

  Headings are perfect examples of block elements. See how they stack on top of each other in the order they are added?

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/block-element.png)
</details>

<details>
  <summary>Inline Elements</summary>
  An `<a>` tag is an inline element. See how it lines up on the same level as the adjacent elements instead of beginning a new line?

    ![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/inline.png)
</details>

---

<h1 class="slide-header">Changing the Display</h1>

What do we do when we have an element that is _naturally_ inline, such as an `<img>`, but we want to display it as a _block_ element? Or, when we have a natural block element, like a `<ul>`, but we want to display it all on one line, like an inline element?

  There’s a CSS fix for that! We can use the CSS `display` property to override the default and tell the browser how to display our elements. 
  
  Let's look at four common `display` values:
  * `none`: The element won’t display at all.
  * `inline`: The element will display in one horizontal line.
  * `block`: The element will appear stacked and take up the entire width of the page.
  * `inline-block`: Elements will sit next to each other (inline) but can have `margin`, `padding`, `width`, and `height` properties (block).

---

<h1 class="slide-header">Knowledge Check</h1>

Let’s say you’ve added four images in HTML, like so:

```html
<img src="img/firstpic.png" alt="first pic"/>
<img src="img/secondpic.png" alt="second pic"/>
<img src="img/thirdpic.png" alt="third pic"/>
<img src="img/fourthpic.png" alt="fourth pic"/>
```

How could you use the CSS `display` property to stack these images on top of each other in a vertical column?

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" correct="true"/><label for="track">`display: block`</label><br />
  <input type="radio" name="action" id="event" value="event"  /><label for="event">`display: inline`</label><br />
  <input type="radio" name="action" id="message" value="message" /><label for="message">`display: none`</label><br />
  <input type="radio" name="action" id="answer4" value="answer4" /><label for="answer4">They'd display like that automatically</label><br />

</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Knowledge Check</h1>

Hannah would like us to create a **horizontal navigation bar** for her page, but right now the `<nav>` is displaying a vertical list. Sounds like a job for `display: inline`!

Which of the following elements should we target with this `display` property to fix the `<nav>`?

  <fieldset>
    <legend>Please select one of the following</legend>
    <input type="radio" name="action" id="event" value="event"  /><label for="event">`nav`</label><br />
    <input type="radio" name="action" id="message" value="message" /><label for="message">The `ul` in the `nav`</label><br />  
    <input type="radio" name="action" id="track" value="track" correct="true"/><label for="track">The `li`s in the `nav`</label><br />
  </fieldset>
  <button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

  ---

<h1 class="slide-header">Cleaning Up Our Nav</h1>

Let’s make a few final adjustments to the `<nav>`. It would look better in the middle of the page, and we could enlarge it to increase its visibility.

  To make these adjustments, we need to set the rules on the parent element; in this case, the `<ul>`. Here’s how that looks:
  ```css
  nav ul {
   text-align: center;
   font-size: 18px;
  }
  ```
  
  Notice how we’re taking a slightly different approach to targeting. Even though we didn’t assign a class to this `<ul>`, we can target it specifically by adding the parent element into the rule. Because this `<ul>` is inside the `<nav>`, we’ll write `nav ul` in the rule. Leaving a space between these two elements indicates the parent/child relationship.

  ---

<h1 class="slide-header">Everything is a Box</h1>

Remember how we mentioned that block elements can have `margin`, `padding`, `width`, and `height` properties?

These properties comprise what we call the CSS “box model.” Think of any HTML element as having a “box” that wraps around its content and determines its total height and width.

Here’s what’s in that box:
* The **content** within the box, or whatever you added in the HTML.
* The **padding**, or the space that wraps around the content and pushes the borders of the box away.
* The **border** around the content and padding (which can be styled).
* The **margin**, or the space around the border that pushes the element away from other elements on the page.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/content-padding-border-margin.png)

---

<h1 class="slide-header">The Box Model</h1>

Check out the following code snippet and how it renders.

See how there’s some space around the text before the blue border? That’s the **padding** pushing the edge of the box away from the content. And see how there’s space between the box and the other text elements on the page? That’s the **margin** pushing other content away from the element.

Margin and padding help us space out elements on the page and organize how they appear:

![](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/box-model.png)

---

<h1 class="slide-header">Knowledge Check</h1>

We want to add some space around the `<nav>` so that it’s separated from `<h1>` and `<h2>`. Which property would we use?

  <fieldset>
    <legend>Please select one of the following</legend>
    <input type="radio" name="action" id="track" value="track" correct="true"/><label for="track">`margin`</label><br />
    <input type="radio" name="action" id="event" value="event"  /><label for="event">`padding`</label><br />
  </fieldset>
  <button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Knowledge Check</h1>

We’d also like to add more space inside of the `<li>`s in the `<nav>` (“About Me,” “Portfolio,” etc.) so that it’s more obvious that they’re separate items. Which property would we use to accomplish this?

  <fieldset>
    <legend>Please select one of the following</legend>
    <input type="radio" name="action" id="track" value="track" /><label for="track">`margin`</label><br />
    <input type="radio" name="action" id="event" value="event"  correct="true" /><label for="event">`padding`</label><br />
  </fieldset>
  <button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

  ---

<h1 class="slide-header">Specific Margins and Padding</h1>

So far, we’ve been adding margins and padding to all sides of an HTML element. However, you can also specify the sides of the box you want to adjust — maybe you only want to add padding to the top, or add more to the left than the right.

To do so, you’d write the CSS like so:
```css
div {
 padding: 10px 0px 5px 15px;
}
```

This means that the top of the `<div>` gets 10px of `padding`, the right side gets none, the bottom gets 5px, and the left side gets 15px. The acronym **TR**ou**BL**e can help you remember this order!

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/top-right-bottom-left.png)

---

<h1 class="slide-header">Adjusting Width and Height</h1>

The `width` and `height` properties control — you guessed it — an element’s width and height.

Take a look at the icons in the social media list. They’re huge! Luckily, we can change their size by adjusting their `width` property. 

To fix it, add in the CSS rule below. Because we only want to apply this sizing to the `<img>` tags in the social list, make sure to target them with their class.
```css
.social img {
  width: 30px;
}
```

We only need to set the width of the images, as the browser will automatically adjust the height proportionally. In other words, our images won’t get distorted! If we set a defined height _as well as_ a defined width, we could end up stretching them out.

---

<h1 class="slide-header">Knowledge Check</h1>

Let’s try this out with the images of Hannah’s artwork! Right now, they are a bit all over the place. We should give them the same width so they look more consistent.

Before jumping into the code, think through how you’d target those `<img>`s specifically. In the HTML, they’re grouped together in a `<div>`. What could we add to the `<div>` to make it easier to target the `<img>`s it contains?

<details>
  <summary>Reveal Answer</summary>
  Here’s how we did it.

We added an ID to the `<div>` surrounding the images so that we could target them specifically. (A class could also work here, and you could name it whatever you want.) 

The HTML now reads:
```html
<div id = "image-grid">
 <img src="https://a4f42852c57948e7b836e53123af7b1a.production.codepen.plumbing/img/coeur.jpg" alt = "artwork"/>
 ...
</div>
```

Then, we added a CSS rule targeting the images in the `<div>` with a `width` property:
```css
#image-grid img {
 width: 250px;
}
```
</details>

---

<h1 class="slide-header">The Position Property</h1>

Our last layout tool, the `position` property, helps us determine how our elements are positioned on a page. Do we want an element to sit all the way to the right? Or at the very bottom? Adjusting its `position` will accomplish that!

We’ll look at two common `position` values:
* **_Relative_** positioning means that the element is positioned relative to its normal position on the page — where it is already located. Other content won’t be affected by it.
* **_Absolute_** positioning means that the element’s position is adjusted relative to a parent element with a set position. If it has no parent element, or if the parent doesn’t have a set position, it will be adjusted relative to the `<body>` of the document.

---

<h1 class="slide-header">Positioning Our Elements</h1>

Once we tell an element _how_ it should be displayed, let’s get it to display _where_ we want. We can do this by targeting the `top`, `right`, `bottom`, and `left` properties. These properties take distance values, like pixels, that measure based on the point _from which_ we would like to place our element. 

For example, this styling would push the `<div>` 20px **away from the top** of the page and 10px **away from the left side** of the page:
```css
div {
  position: absolute;
  top: 20px;
  left: 10px;
}
```
**Remember**: You’ll need to add the `position` property (`relative` or `absolute`), as well as the directions to get an object to move.

---

<h1 class="slide-header">Position: Relative</h1>

Setting `position: relative` moves an element relative to its original location.

Let’s say we start out with two colored `<div>`s of the same size. With no set positioning, as block elements, they’re stacked on top of each other and begin in the top-left corner of the page.

If we add in some relative positioning to the top yellow `<div>`...
```css
#yellow {
 position: relative;
 top: 100px;
 left: 100px;
}
```
... we’d end up with the format on the right! The `position-relative` property will push the yellow block 100px away from where it started at the top and 100px away from where it started at the left.

---

<h1 class="slide-header">Position: Absolute</h1>

Using `position: absolute` will move an element relative to a parent element with a set position, or to the body of the page. 

For example, the yellow `<div>` starts out in the upper left-hand corner. Because it doesn’t have a parent element, when we add absolute positioning, it’s positioned against the `<body>`. The `right` and `top` properties define where it goes. (When one of these properties, like `right`, is set to `0`, it means that the element is 0px away from this side — all the way against it.)

```css
div {
 position: absolute;
 right: 0;
 top: 80px;
}
```

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/no-positioning-absolute-positioning.png)

---

<h1 class="slide-header">Knowledge Check</h1>

Let’s look at the social icons on Hannah’s website, which are listed in a `<ul>`. They’re taking up a lot of space on the page, don’t you think? Let’s get them out of the way and stick them in the upper right-hand corner.

What type of positioning would we use?

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" /><label for="track">`relative`</label><br />
  <input type="radio" name="action" id="event" value="event"  correct="true" /><label for="event">`absolute`</label><br />
</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Conclusion</h1>

<a href="https://codepen.io/GAmarketing/pen/dLqmVb?editors=1100" target="_blank" rel="noreferrer noopener">Here’s</a> how Hannah’s site will look with its fancy new layout.

And here are some more resources on CSS layouts:
* <a href="http://learnlayout.com/display.html" target="_blank" rel="noreferrer noopener">Display Property</a>.
* <a href="https://internetingishard.com/html-and-css/css-box-model//" target="_blank" rel="noreferrer noopener">A box model overview</a>.
* <a href="http://learnlayout.com/position.html" target="_blank" rel="noreferrer noopener">Positioning in CSS</a>.

</textarea>