<!-- <textarea id="source"> -->

<h1 class="slide-header">Adjusting Layout with CSS</h1>

<span id=time-estimate class="color-grey-500">30 mins</span>

<p id="lesson-description">
Have you ever visited a website and had no idea where to look? A cluttered, unorganized layout can make even the best content frustrating to navigate.

With CSS, you have the power to **structure your website** exactly how you want. You'll learn how to control spacing, alignment, and positioning to create a layout that looks great and guides users effortlessly.

By the end of this lesson, you’ll be designing pages that are **clean, professional, and easy to navigate**—no more confusing websites!

</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Inline and Block Elements

<hr>

The Box Model

<hr>

Positioning

<hr>

<a href="./assets/adjusting_layout_with_css_study_guide.pdf" target="_blank" download="adjusting_layout_with_css_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

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

Hannah’s portfolio is coming to life with unique fonts and colors—but the layout still needs work.

Right now, her **navigation links are stacked** instead of sitting neatly in a row, and the **social media icons in the footer** have the same issue. Plus, everything feels a little cramped—there’s no spacing between elements!

In this lesson, we’ll learn how to **align navigation links, organize the social icons, and create better spacing** using **margin and padding**. We’ll also explore **positioning and display** techniques to control how elements are arranged, helping the site look polished, balanced, and easy to navigate!

<img src="./assets/website-progress-2.png" alt="Website Progress" style="width:800px;"/>

---

<h1 class="slide-header">Understanding Display: Block vs. Inline</h1>

Every HTML element has **default styling**, like `<h1>` being larger than `<h2>` or `<ul>` having bullet points. But did you know that elements also have a **default way of displaying** on a webpage?

HTML elements are either **block elements** or **inline elements**.

| **Block Elements**                                     | **Inline Elements**                                   |
| ------------------------------------------------------ | ----------------------------------------------------- |
| Always start on a **new line**.                        | Stay **within the same line** as surrounding content. |
| Take up the **full width** of the container.           | Only take up as much width as needed.                 |
| Stack **vertically** when multiple are added.          | Appear **side by side** if space allows.              |
| Can have **margin, padding, width, and height**.       | Cannot have set margins, width, or height.            |
| Examples: `<h1>` - `<h6>`, `<div>`,<br> `<p>`, `<ul>`. | Examples: `<a>`, `<span>`, `<img>`.                   |

These default behaviors affect how elements are arranged on a page. Want to see a visual? Click to the next slide!

---

<h1 class="slide-header">Block vs. Inline Elements</h1>

**Block Elements**

- Block elements **always start on a new line** and take up the full width available.
- As you add more block elements, they **stack on top of each other**, creating a vertical structure.

<img src="./assets/block-elements.png" alt="Block Elements" style="width:800px;"/>

<br>

**Inline Elements**

- Inline elements **stay within the same line** as surrounding content.
- They only take up as much space as needed and **don’t force a new line**.

<img src="./assets/inline-elements.png" alt="Inline Elements" style="width:800px;"/>

Anchor `<a>`, span `<span>`, and image `<img>` elements all line up **side by side** instead of stacking by default.

---

<h1 class="slide-header">Changing the Display of Elements</h1>

Sometimes, an element’s default behavior doesn’t quite fit what we need.

- Ever added an `<img>` and wished it took up its own line instead of sitting next to text? By default, images are **inline elements**, but we might want them to act like **block elements** instead.
- Or maybe you’ve seen a `<ul>` where all the items appear in a row instead of stacking? That’s because even though lists are naturally **block elements**, we can make them **inline** if we want them to display side by side like in a nav bar.

Thankfully, CSS makes this easy! We can use the **`display` property** to change how elements behave on a webpage.

### **Common `display` Values:**

- **`none`** – The element **disappears completely** (it won’t take up space on the page).
- **`inline`** – The element stays **in line** with surrounding content.
- **`block`** – The element stacks **on its own line** and takes up the **full width** available.
- **`inline-block`** – The element stays **inline** but behaves like a **block**, meaning it can have `margin`, `padding`, `width`, and `height`.

With the `display` property, you can **control how elements are arranged** and adjust them to fit your design!

---

<h1 class="slide-header">Knowledge Check</h1>

Let’s say you’ve added four images in HTML, like so:

```html
<img
  src="img/firstpic.png"
  alt="first pic"
/>
<img
  src="img/secondpic.png"
  alt="second pic"
/>
<img
  src="img/thirdpic.png"
  alt="third pic"
/>
<img
  src="img/fourthpic.png"
  alt="fourth pic"
/>
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

Right now, the navigation links are stacking **vertically**, one on top of the other. But we want them to sit **side by side** in a row.

To do this, we need to change how the **list items (`<li>`)** are displayed. By default, `<li>` elements are **block elements**, which means they stack on top of each other. We can fix this by changing the **`display` property** in CSS.

**1. In your HTML, find the `<li>` elements inside the navigation menu. Give each `<li>` a class called `nav-item`.**

**2. Create a CSS rule for `.nav-item`. Set `display: inline-block;` so the list items sit _side by side_ instead of stacking.**

Once you apply these styles, your navigation links will **line up horizontally** instead of stacking vertically. Try it out and see the difference!

<!-- adjusting-layout-with-css-hannahs-site-9 -->
<iframe   sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Cleaning Up Our Nav" src="https://codepen.io/GAmarketing/embed/bNGRObx?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/bNGRObx">
  Cleaning Up Our Nav</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**TIP** If your tests still fail after adding your style code, try hitting the **"Rerun"** button on CodePen to ensure all styles are applied before selecting **View Test Results**.

---

<h1 class="slide-header">Everything is a Box</h1>

Remember how we mentioned that **block** elements can have `margin`, `padding`, `width`, and `height` properties?

This idea is called the **CSS box model**, and it helps define **spacing, sizing, and layout**. Even though we don’t always see these boxes, they control how elements fit together on the page.

**What’s Inside the Box?**

1. **Content** – The actual text, image, or element inside the box (whatever you wrote in the HTML).
2. **Padding** – The space **between the content and the border**, pushing the edges of the box outward.
3. **Border** – The outer edge of the element (can be visible or invisible, depending on styles).
4. **Margin** – The space **outside the border**, pushing the element away from other elements.

Each of these properties affects **how big an element appears and how much space it takes up on the page**.

<img src="./assets/box-model.png" alt="The Box Model Diagram" style="width:800px;"/>

---

<h1 class="slide-header">The Box Model in Action</h1>

Take a look at the code snippet below and how it appears on the page.

- The **padding (20px)** creates space **inside the box**, pushing the text away from the blue border.
- The **margin (40px)** creates space **outside the box**, pushing it away from surrounding elements.

Both **margin** and **padding** are essential for organizing content and making a webpage easier to read.

<img src="./assets/box-model-example.png" alt="The Box Model Example" style="width:800px;"/>

---

<h1 class="slide-header">Knowledge Check</h1>

Imagine you want to create space **around** the `<nav>` element so that it doesn’t sit too close to the `<header>` and `<h2>`.

Which CSS property would you use to **push the `<nav>` away from the surrounding elements**?

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" correct="true"/><label for="track">`margin`</label><br />
  <input type="radio" name="action" id="event" value="event"  /><label for="event">`padding`</label><br />
</fieldset>

<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Knowledge Check</h1>

Imagine you want to add more space **inside** each `<li>` in the `<nav>` (“About Me,” “Portfolio,” etc.) to make them easier to read and visually distinct.

Which CSS property would you use to **increase the space inside each list item**?

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" /><label for="track">`margin`</label><br />
  <input type="radio" name="action" id="event" value="event"  correct="true" /><label for="event">`padding`</label><br />
</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

---

<h1 class="slide-header">Applying Margin and Padding</h1>

So far, we’ve seen how to apply **equal** margins and padding to all sides of an element. But what if you only want to adjust **one side**—like adding extra space to the top or increasing the padding on the left?

You can _specify individual sides_ by listing values in a specific order:

```css
div {
  padding: 10px 0px 5px 15px;
}
```

The values follow this pattern:

- **Top** → `10px`
- **Right** → `0px`
- **Bottom** → `5px`
- **Left** → `15px`

This order always follows a **clockwise direction**: **Top → Right → Bottom → Left**.

<img src="./assets/top-right-bottom-left.png" alt="Top Right Bottom Left Model" style="width:400px;"/>

---

<h1 class="slide-header">Adjusting our Content</h1>

Now that we know how to use **margin and padding**, let’s apply them to improve the spacing in our layout. This will help create a more balanced and visually appealing design.

**1. Find the `<header>` element in your CSS. Set `padding` to `20px` to add space inside the header.**

**2. Find the `<nav>` element in your CSS. Set `padding` to `10px 0;` so there’s vertical space inside the navigation bar but no extra space on the sides.**

**3. Find the `.nav-item` class in your CSS. Set `margin` to `0 20px;` so each item has 20px of horizontal space between them but no extra space above or below.**

Once you've added these styles, check the webpage and see how much better everything looks with proper spacing!

<iframe   sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Adjusting Width and Height" src="https://codepen.io/GAmarketing/embed/KwKqbNj?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/KwKqbNj">
  Adjusting Width and Height</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**TIP** If your tests still fail after adding your style code, try hitting the **"Rerun"** button on CodePen to ensure all styles are applied before selecting **View Test Results**.

--- TKTKTKTKTKTK Stopped HERE

<h1 class="slide-header">Adjusting Width and Height in Image Gallery</h1>

TKTK adjust the size of the images in the gallery and add flex to them with box shadow

<iframe   sandbox="allow-scripts allow-top-navigation allow-top-navigation-by-user-activation allow-forms allow-popups allow-same-origin"  height="400" style="width: 100%;" scrolling="no" title="Adjusting Width and Height" src="https://codepen.io/GAmarketing/embed/JjVbmaN?default-tab=css%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GAmarketing/pen/JjVbmaN">
  Adjusting Width and Height</a> by General Assembly (<a href="https://codepen.io/GAmarketing">@GAmarketing</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

---

<h1 class="slide-header">Knowledge Check</h1>

Let’s try this out with the images of Hannah’s artwork! Right now, they are a bit all over the place. We should give them the same width so they look more consistent.

Before jumping into the code, think through how you’d target those `<img>`s specifically. In the HTML, they’re grouped together in a `<div>`. What could we add to the `<div>` to make it easier to target the `<img>`s it contains?

---

<h1 class="slide-header">Here's How We Did It</h1>

We added an ID to the `<div>` surrounding the images so that we could target them specifically. (A class could also work here, and you could name it whatever you want.)

The HTML now reads:

```html
<div id="image-grid">
  <img
    src="https://a4f42852c57948e7b836e53123af7b1a.production.codepen.plumbing/img/coeur.jpg"
    alt="artwork"
  />
  ...
</div>
```

Then, we added a CSS rule targeting the images in the `<div>` with a `width` property:

```css
#image-grid img {
  width: 250px;
}
```

---

<h1 class="slide-header">The Position Property</h1>

Our last layout tool, the `position` property, helps us determine how our elements are positioned on a page. Do we want an element to sit all the way to the right? Or at the very bottom? Adjusting its `position` will accomplish that!

We’ll look at two common `position` values:

- **_Relative_** positioning means that the element is positioned relative to its normal position on the page — where it is already located. Other content won’t be affected by it.
- **_Absolute_** positioning means that the element’s position is adjusted relative to a parent element with a set position. If it has no parent element, or if the parent doesn’t have a set position, it will be adjusted relative to the `<body>` of the document.

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

<img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/no-positioning-relative-positioning.png">

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

- <a href="http://learnlayout.com/display.html" target="_blank" rel="noreferrer noopener">Display Property</a>.
- <a href="http://learnlayout.com/position.html" target="_blank" rel="noreferrer noopener">Positioning in CSS</a>.

<!-- </textarea> -->
