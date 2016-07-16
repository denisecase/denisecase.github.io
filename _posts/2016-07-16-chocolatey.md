---
layout: post
title: Manage Windows Software Easily with Chocolately
---

Looking for an easy way to manage the software on your Windows computer?  Chocolatey makes managing Windows software easy (as easy as apt-get on Linux).

[https://chocolatey.org/](https://chocolatey.org/)

Install it from the [Chocolately](https://chocolatey.org/) website, 
or use **WIN-X** and **A**. (Hold down the WINDOWS key and hit the "x" key at the same time to bring up a menu, 
then hit the "a" key or click on "Windows Powershell (Admin)" option.)

In the administrator Powershell window, type:

```
 install-packageprovider chocolatey
```

If it needs more software, type "Y" for yes as needed.

![Installing Chocolatey]({{ site.baseurl }}public/2016-07-16_1426.png)

Now, you can use the **install-package** command to install desired software, for example:

```
install-package firefox
```

![Installing Firefox]({{ site.baseurl }}public/2016-07-16_1429.png)

Use it to install chrome, nodejs, notepadplusplus, jdk8, 7zip, git, groovy, gradle, python, filezilla, skype, ccleaner, dotnet5, adobereader. and others. 

To get a **current list of the most popular Chocolatey packages**, enter the following command[1]:

```
 find-package -provider chocolatey | select -first 30 | ogv -outputmode multiple | install-package
```

See all Chocolatey commands at: [https://github.com/chocolatey/choco/wiki/CommandsReference](https://github.com/chocolatey/choco/wiki/CommandsReference).
 
 [1] Thanks to [Flueworks](https://www.reddit.com/user/Flueworks), as shared [here](https://www.reddit.com/r/AskReddit/comments/4t467w/what_is_the_first_thing_you_install_on_a_new/d5eo6i3)
