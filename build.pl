#!/usr/bin/perl
use strict;
use warnings;

use Cwd qw(cwd);
#my $home = cwd;
#END {
#    chdir $home;
#}
#
#chdir '..';

# Check for version number


my ($versionCode, $version, $about) = get_versions();
die if not $version;
die if $version ne $versionCode or $version ne $about;

my $cmd = "zip -r regex-maven-$version.zip app -x \\*/.git/\\* -x \\*.swp";
foreach my $f (qw(app.psgi build.pl README.txt .gitignore)) {
    $cmd .= " -x regex-maven/$f";
}

system $cmd;


sub get_versions {
    my $versionCode;
    my $version;
    my $about;

    open my $fh, '<', 'app/config.xml' or die;
    while (my $line = <$fh>) {
        chomp $line;
        if ($line =~ /versionCode\s*=\s*"(\d+)"/) {
            $versionCode = $1;
        }
        if ($line =~ /version\s*=\s*"0\.0\.(\d+)"/) {
            $version = $1;
        }
    }
    open my $in, '<', 'app/index.html' or die;
    while (my $line = <$in>) {
        chomp $line;
        if ($line =~/version\s+0\.0\.(\d+)/) {
            $about = $1;
        }
    }
    return $versionCode, $version, $about;
}



