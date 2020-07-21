const removeWPClass = (data) => {
  return data
    .replace(`class="wp-block-image size-large"`, "")
    .replace(`class="wp-image-30"`, "")
    .replace(`class="wp-image-27"`, "");
};

export default removeWPClass;
