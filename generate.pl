use strict;
use warnings;
use 5.010;

use RM;

foreach my $src (glob "src/*.html") {
    my $out = 'app/' . substr $src, 4;
    RM::process($src, $out);
}
    
