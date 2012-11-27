#!/usr/bin/perl
use strict;
use warnings;

use Cwd qw(abs_path);
use File::Basename qw(dirname);

use Plack::Builder;
use Plack::Request;
use Plack::App::Directory;

use RM;

my $static = builder {
        my $root = dirname(abs_path(__FILE__)) . '/app';
		my $app = Plack::App::Directory->new({ root => $root })->to_app;
		enable 'Plack::Middleware::Static',
			path => sub { s{/$}{/index.html} } , root => $root;
		$app;
	};


my $app = sub {
  my $env = shift;
 
  my $request = Plack::Request->new($env);

  if ($request->path_info =~ /\.html/) {
    my $root = dirname(abs_path(__FILE__)) . '/src';
    my $src = $root . $request->path_info;
    return [
      '200',
      [ 'Content-Type' => 'text/html' ],
      [ RM::process($src) ],
    ];
  }
};

sub {
  my $env = shift;
 
  my $request = Plack::Request->new($env);

  if ($request->path_info =~ /\.html/) {
      return $app->($env);
  }
  return $static->($env);
}

