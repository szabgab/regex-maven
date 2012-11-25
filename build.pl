#!/usr/bin/perl
use strict;
use warnings;

#use File::Temp qw(tempdir);
use Cwd qw(cwd);
#
#my $dir = tempdir(CLEANUP => 1);
#
my $home = cwd;
END {
    chdir $home;
}

chdir '..';
#chdir $dir;
#system "svn export https://svn1.hostlocal.com/gabor/training/html5/examples/regex-maven";


my $cmd = "zip -r regex-maven.zip regex-maven -x \\*/.git/\\* 0x \\*.swp";
foreach my $f (qw(app.psgi build.pl README.txt)) {
    $cmd .= " -x regex-maven/$f";
}

system $cmd;


