describe('Image container and image styling', function () {
  it('should have a <div> with id="image-container"', function () {
    const imageContainer = document.getElementById('image-container');

    if (!imageContainer) {
      fail(
        'No <div> with id="image-container" found. Ensure you have added id="image-container" to the <div> that holds all artwork images.'
      );
    }

    expect(imageContainer).not.toBeNull();
  });

  it('should apply border-radius and box-shadow to images inside #image-container', function () {
    const images = document.querySelectorAll('#image-container img');

    if (images.length === 0) {
      fail(
        'No <img> elements found inside #image-container. Ensure your artwork images are inside the <div id="image-container">.'
      );
    }

    images.forEach((img, index) => {
      const computedStyle = window.getComputedStyle(img);

      // Check if border-radius is applied (any non-default value)
      expect(computedStyle.borderRadius !== '0px').toBe(
        true,
        `The image at index ${index} inside #image-container should have border-radius applied.`
      );

      // Check if box-shadow is applied (not 'none')
      expect(computedStyle.boxShadow !== 'none').toBe(
        true,
        `The image at index ${index} inside #image-container should have box-shadow applied.`
      );
    });
  });
});
