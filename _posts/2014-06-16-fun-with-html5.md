---
layout: post
title: Fun with HTML5
---

HTML 5 offers an easy way to begin creating interesting web pages.  All it takes is:  

*   A computer.
*   A web browser, e.g., [Chrome](http://chrome.com), [Firefox](http://firefox.com), [Safari](http://www.apple.com/safari/), or [Internet Explorer](http://internetexplorer.com).
*   A simple text editor, e.g., [Notepad++](http://notepad-plus-plus.org/).

HTML 5 pages start with a _doctype declaration_ (so the browser knows how to interpret it) and includes two main sections:

*   _Head._ The head usually includes the page title and supporting information.
*   _Body._ The body usually includes the interesting content to display in the page.  

### Simple HTML 5 Page

To make a very simple page, just type or copy the text below into a file and save it as _index.html_.



```html
<!DOCTYPE html>  
<html>
  <head> 
     <title>My Page Title</title>
  </head> 
  <body> 
      <h3>This is a third-level heading.</h3>
      Try adding more headings 
      or see what happens with h1 or h2 instead. 
  </body> 
</html>
```
 
 * gist https://gist.github.com/denisecase/f487610439a72a03cda9
 
 
 
Open your browser. Instead of a website, enter the path to your new index.html, for example:  

[![](http://3.bp.blogspot.com/-YY1YKBs7NVs/U59mI-zfOYI/AAAAAAAADyU/32MqGRq0LnM/s1600/open_page.png)](http://3.bp.blogspot.com/-YY1YKBs7NVs/U59mI-zfOYI/AAAAAAAADyU/32MqGRq0LnM/s1600/open_page.png)

When you hit enter, the page should appear in your browser.  The title appears up on the tab and the content (from the body) shows in the page.

[![](http://1.bp.blogspot.com/-TyDWCd5kOv8/U59mI4tLqnI/AAAAAAAADyY/iGUQgoqjf9g/s1600/webpage.png)](http://1.bp.blogspot.com/-TyDWCd5kOv8/U59mI4tLqnI/AAAAAAAADyY/iGUQgoqjf9g/s1600/webpage.png)

### Less Simple HTML 5 Page

There's a more interesting single page here:  [d3slider.html](http://people.cis.ksu.edu/~dmcase/fun_with_html5/d3slider.html).  

The page references the [D3.js](http://d3js.org/) library which provides some nice animations.  The code is available on [GitHub](https://github.com/ksucase/fun_with_html5).  [View the contents of the html file](https://github.com/ksucase/fun_with_html5/blob/master/d3slider.html).  

*   Can you find the <span style="color: blue; font-family: Courier New, Courier, monospace;">head</span> section?
*   Can you see where the page finds the D3.js code it needs?  
*   The page uses a custom <span style="color: blue; font-family: Courier New, Courier, monospace;">icon</span>.  Can you see where the page gets the name of the icon file?
*   Opening tags are usually paired with a closing tag that is the exact same except the closing tag has one extra character. What is it?

The page includes some JavaScript code that uses the D3 library.  

*   Can you find the <span style="color: blue; font-family: Courier New, Courier, monospace;">body</span> section?
*   Can you see where the YouTube video gets included?  
*   Can you see where the JavaScript code is written?  
*   What tags surround the code?

### Embedding Videos

YouTube makes it easy to embed a video in your web page.  Just go to the video you want and select "Share", then "Embed", then copy and paste the text into your document and surround it with div tags.   Don't forget to use a slash in the closing tag! :) 


[![](http://4.bp.blogspot.com/-MSk2XCcfynQ/U59AkjL2J1I/AAAAAAAADyA/gNyUO57A7dI/s1600/embeddingAVideo.png)](http://4.bp.blogspot.com/-MSk2XCcfynQ/U59AkjL2J1I/AAAAAAAADyA/gNyUO57A7dI/s1600/embeddingAVideo.png)

### Learn More

A list of all HTML 5 tags is available at: [https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/HTML5_element_list).  

If you find an interesting page, you can often right-click on the page and select "View page source" to see the code behind it.  

More information on HTML 5 is available at [HTML5 Rocks](http://www.html5rocks.com/en/resources).

  
The pages you make are visible from your own computer. If you want to share, you can put the file in [Dropbox](https://www.dropbox.com/) and share the Dropbox folder - or you can [find a place to "host" your web pages](http://en.wikipedia.org/wiki/Comparison_of_free_web_hosting_services). 