Regex Maven
* Regex cheat sheet a selector to see the various constructs of
  regular expressions with short explanation. The explanations could be language specific.
* There can be a table for each regex constracts and what language (and which version of it)
  supports it.
* List of more complex regexes
* Examples regex -> what is being matched

* Quiz - show a regex and a bunch of string and ask which one matches (or the other way around)

* Even a tool using JavaScript to actually test Regular Expressions.


Development
============

Have Perl and install Plack and Template.
Windows users can install DwimPerl http://dwimperl.com/

run     perl generate.pl
to generate the html files from the templates.

Run plackup in the main direstory of the application to launch the development
web server and then browse to http://localhost:5000/index.html


Web site
=========
The source code of the http://regexmaven.com/ web site is in the www/ subdirectory.
running   plackup www.psgi    will launch the development web server.


Contributor agreement
=======================

While this application is open source, I plan to make part
of available only for people who made a payment.

The plan is, that all the application will be installed and
I'll use "in-game payment" to allow access to the advanced
parts of the product. What exactly will be considered "advanced"
I am not sure.

So if you plan to contribute to the code, please make sure
you accept the idea, that in the mobile compiler versions,
I might restrict access to some part of it and I might
make some money enabling it.

