// Copyright 2010 Google Inc. All Rights Reserved.

/**
 * @fileoverview Builds Blogger URL and sends request to background.html for
 * opening the Blogger Window.
 * @author prateekk@google.com (Prateek Khurana).
 */
var doc = document;
var loc = location;
var wnd = window;
var BLOG_THIS_URL = 'http://www.blogger.com/blog-this.g';
var SOURCE_TYPE = 'chrome';

/**
 * Extracts and returns the text in the selected portion of web page.
 * @return {String} The text available in the selected space.
 */
function getSelectedText() {
  if (doc.selection) {
    return doc.selection.createRange().text;
  } else if (wnd.getSelection) {
    return query = wnd.getSelection();
  } else if (doc.getSelection) {
    return query = doc.getSelection();
  } else {
    return '';
  }
}

/**
 * Builds the Blogger URL using title, text and href of the html page.
 * @param {String} text Text in the selected range.
 * @return {String} Blogger URL.
 */
function build_url(text) {
  // Adding double quotes to non-empty string.
  if(text != '') {
    text = "\"" + text + "\"";
  }
  // Making an array to make inner content of the blog.
  var blogText = [
      text,
      '<br><br>',
      '<a style="font-size:13px;" href="https://chrome.google.com/webstore',
      '/detail/pengoopmcjnbflcjbmoeodbmoflcgjlk">\'via Blog this\'</a>'
      ];

  // Encodes special characters while building the URL.
  return BLOG_THIS_URL + '?t=' + encodeURIComponent(blogText.join('')) +
      '&u=' + encodeURIComponent(loc.href) +
      '&n=' + encodeURIComponent(doc.title) +
      '&source=' + SOURCE_TYPE;
}

var selected_text = getSelectedText();
var request_url = build_url(selected_text);
// Sends request to background page to open a Blogger window.
chrome.extension.sendRequest({
  message: 'openBloggerWindow',
  url: request_url
});
