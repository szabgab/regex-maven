#!/usr/bin/perl
use strict;
use warnings;

use Cwd qw(abs_path);
use File::Basename qw(dirname);
#use Plack::Builder;
use Plack::App::Directory;

my $root = dirname(abs_path($0)) . '/app';
my $app = Plack::App::Directory->new({ root => $root })->to_app;


__END__
# my $app = sub {
  # my $env = shift;
 
  # return [
    # '200',
    # [ 'Content-Type' => 'text/html' ],
    # [ $root ],
  # ];
# };

my $app = sub {
  my $env = shift;
  
  my %MIME = ();
  
  my $file = "$root/$env->{PATH_INFO}";
  my $mime = $MIME{$file} || 'text/html';

  if (-e $file and open my $fh, "<:raw", $file) {
    return [ 200, ['Content-Type' => $mime], $fh ];
  } else {
    return [ 404, ['Content-Type' => 'text/html'], [ '404 Not Found' ] ];
  }
};

