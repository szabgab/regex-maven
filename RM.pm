package RM;
use strict;
use warnings;
use 5.010;

use Template;
my $t = Template->new(
   INCLUDE_PATH => 'templates',
   INTERPOLATE  => 0,
   POST_CHOMP   => 1,
   EVAL_PERL    => 0,
);

sub process {
    my ($src, $out) = @_;

    #say $page;
    my %data;
    if (open my $in, '<', $src) {
        #$data{title} = <$in>;
        #$data{title} =~ s/=title\s+//;
        $data{title} = 'Regex Maven';
        local $/ = undef;
        $data{content} = <$in>;
        close $in;
    } else {
        die "$src $!";
    }
    if ($out) {
        $t->process('page.tmpl', \%data, $out) or die $t->error;
        return;
    } else {
        $t->process('page.tmpl', \%data, \$out) or die $t->error;
        return $out;
    }
}

1;