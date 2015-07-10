---
layout: post
title: Embedding a Calendar in a GitHub Pages Website
---

<p class="message">
   Using GitHub Pages makes it easy to add a custom calendar to your website.
</p>

This website uses [GitHub Pages](https://pages.github.com/). For information on how to create a similar website, see the earlier article on [creating a GitHub Pages site]({{site.baseurl}}posts/2015-06-26-new-site.md). 
The repository with the site content is available at [http://denisecase.github.io/](http://denisecase.github.io/).

Follow the four steps below to add a top-level calendar page to your site.

## 1. Create your calendars

* Create different calendars for different projects or focus areas.
* See the Google article for [directions on how to create calendars](https://support.google.com/calendar/answer/37095?hl=en).
* I use different calenders for our sports teams and holidays, along with a custom calendar showing the weeks of the semester.


## 2. Grab the calendar content

From Google Calendar, access the calendar settings by clicking on the gear in the upper right. 

![]({{ site.baseurl }}public/cal/settings.png)

Click the Calendars link.
![]({{ site.baseurl }}public/cal/click.png)

Click the link to one of the calendars to be embedded. Under the Embed this Calender option, click the link to Customize the color, size, and other options.

![]({{ site.baseurl }}public/cal/embed.png)

Use the helper to adjust the content to show. Check all the calendars to be included. Update the calendar title. After customizing, select the HTML as indicated and copy to your clipboard (CTRL-C).

![]({{ site.baseurl }}public/cal/helper.png)

## 3. Add your new calendar page

Create a calendar.md file in the root folder. Add a [YAML front matter block](http://jekyllrb.com/docs/frontmatter/) with the following content - the weight is used to set the order in which the menu items will appear.  
 

layout: page  
title: Calendar  
weight : 98  


Paste the HTML from Step 2 at the end of the file (CTRL-V).  

[This calendar.md file](https://raw.githubusercontent.com/denisecase/denisecase.github.io/master/calendar.md) can be found in the [GitHub repo for this site](https://github.com/denisecase/denisecase.github.io).

## 4. Test and commit

  If you're editing your files locally, open a Git Bash window in your github.io folder and run:  
  
  `$ jekyll serve `

Open browser to: http://localhost:4000/.

Verify the appearance, git add the new file, commit your changes locally, and then push them to your GitHub repository.






