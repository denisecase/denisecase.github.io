# denisecase.github.io

Personal website content for [http://denisecase.github.io/](http://denisecase.github.io/).

## Setup

* Hosted (for free!) by [GitHub Pages](https://pages.github.com/).
* Powered by [Jekyll](http://jekyllrb.com) static site generator.
* Initialized with [Poole](http://getpoole.com), the Jekyll starter setup.
* Styled with [Hyde](http://hyde.getpoole.com), a Poole theme.

## Resources

* [Git for Windows](https://msysgit.github.io/) - enables Git BASH 
* [TortoiseGit](https://code.google.com/p/tortoisegit/) - Git integration with File Explorer

## Guides

* ["Getting Started with GitHub Pages"](https://guides.github.com/features/pages/)
* [Joshua Lande](http://www.joshualande.com)'s ["How I Created a Beautiful and Minimal Blog Using Jekyll, Github Pages, and poole"](http://joshualande.com/jekyll-github-pages-poole/).

## Utilities

* [to-markdown](https://domchristie.github.io/to-markdown/) - converts HTML to Markdown
* [Favicon Generator](http://realfavicongenerator.net/) - creates a full set of icons

## Initial setup

* Download Ruby installer from [http://rubyinstaller.org/downloads/](http://rubyinstaller.org/downloads/).
* Check all boxes and install.
* Download RubyGems from [https://rubygems.org/pages/download](https://rubygems.org/pages/download).
* Extract to C:\.

Open Git Bash window in the RubyGems folder:

```     
$ ruby setup.rb    
``` 

Open Git Bash window in the github.io folder:    

```     
$ gem install jekyll      
$ gem install jekyll-paginate    
$ gem install jekyll-gist    
$ gem update jekyll    
``` 

## Test Locally

In _config.yml add:


port:   4000
 

Open Git Bash window in the github.io folder: 
    
```
$ jekyll serve 
``` 

Open browser to: [http://localhost:4000/](http://localhost:4000/).






 



