#!/usr/bin/perl
use strict;
use warnings;

use Cwd qw(cwd);
my $home = cwd;
END {
    chdir $home;
}

chdir '..';


my $cmd = "zip -r regex-maven.zip regex-maven -x \\*/.git/\\* 0x \\*.swp";
foreach my $f (qw(app.psgi build.pl README.txt .gitignore)) {
    $cmd .= " -x regex-maven/$f";
}

system $cmd;


