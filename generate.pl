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

foreach my $src (glob "src/*.html") {
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
    my $out = 'app/' . substr $src, 4;
    $t->process('page.tmpl', \%data, $out) or die $t->error;
}
