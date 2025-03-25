describe('Padding and margin styling for header, nav, and .nav-item', function () {
  it('should set the header padding to 20px', function () {
    const header = document.querySelector('header');

    if (!header) {
      fail(
        'No <header> element found. Make sure you have added a <header> to your HTML.'
      );
    } else {
      const computedStyle = window.getComputedStyle(header);

      expect(computedStyle.padding).toBe(
        '20px',
        'The <header> element should have padding set to 20px.'
      );
    }
  });

  it('should set the nav padding to 10px 0', function () {
    const nav = document.querySelector('nav');

    if (!nav) {
      fail(
        'No <nav> element found. Make sure you have added a <nav> to your HTML.'
      );
    } else {
      const computedStyle = window.getComputedStyle(nav);

      expect(computedStyle.paddingTop).toBe(
        '10px',
        'The <nav> element should have top padding set to 10px.'
      );

      expect(computedStyle.paddingBottom).toBe(
        '10px',
        'The <nav> element should have bottom padding set to 10px.'
      );

      expect(computedStyle.paddingLeft).toBe(
        '0px',
        'The <nav> element should have left padding set to 0.'
      );

      expect(computedStyle.paddingRight).toBe(
        '0px',
        'The <nav> element should have right padding set to 0.'
      );
    }
  });

  it('should set the .nav-item margin to 0 20px', function () {
    const navItems = document.querySelectorAll('.nav-item');

    if (navItems.length === 0) {
      fail(
        'No elements with class="nav-item" found. Ensure that each <li> in the navigation has class="nav-item".'
      );
    } else {
      navItems.forEach((item, index) => {
        const computedStyle = window.getComputedStyle(item);

        expect(computedStyle.marginTop).toBe(
          '0px',
          `The .nav-item at index ${index} should have top margin set to 0px.`
        );

        expect(computedStyle.marginBottom).toBe(
          '0px',
          `The .nav-item at index ${index} should have bottom margin set to 0px.`
        );

        expect(computedStyle.marginLeft).toBe(
          '20px',
          `The .nav-item at index ${index} should have left margin set to 20px.`
        );

        expect(computedStyle.marginRight).toBe(
          '20px',
          `The .nav-item at index ${index} should have right margin set to 20px.`
        );
      });
    }
  });
});
