#!/usr/bin/perl
use strict;
use warnings;

use File::Temp qw(tempdir);
use Cwd qw(cwd);

my $dir = tempdir(CLEANUP => 1);

my $home = cwd;
END {
    chdir $home;
}

chdir $dir;
system "svn export https://svn1.hostlocal.com/gabor/training/html5/examples/regex-maven";
foreach my $f (qw(app.psgi build.pl README.txt)) {
    unlink "regex-maven/$f";
}

system "zip -r $home/regex-maven.zip regex-maven";

