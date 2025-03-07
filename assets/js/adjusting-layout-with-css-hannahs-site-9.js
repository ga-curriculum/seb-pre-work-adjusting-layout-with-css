describe('The .nav-item display styling', function () {
  it('should set the display property of .nav-item to inline-block', function () {
    const navItems = document.querySelectorAll('.nav-item');

    if (navItems.length === 0) {
      fail(
        'No elements with class="nav-item" found. Ensure that each <li> in the navigation has class="nav-item".'
      );
    } else {
      navItems.forEach((item, index) => {
        const computedStyle = window.getComputedStyle(item);

        expect(computedStyle.display).toBe(
          'inline-block',
          `The .nav-item element at index ${index} should have display set to inline-block.`
        );
      });
    }
  });
});
