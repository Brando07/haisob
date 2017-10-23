//<![CDATA[
$('#comments p, #comments dd').each(function() {
   $('b[rel^="h"]', this).nextAll().filter('br').remove();
    $('i[rel="pre"]', this).replaceWith(function() {
        return $('<pre></pre>').append($(this).contents());
    });
    $('i[rel="image"]', this).replaceWith(function() {
        return $('<img />').attr('src', $(this).text());
    });
    // Menyisipkan tag `<h3>`
    $('b[rel="h3"]', this).replaceWith(function() {
        return $('<h3></h3>').append($(this).contents());
    });
    $('b[rel="quote"]', this).replaceWith(function() {
        return $('<blockquote></blockquote>').append($(this).contents());
    });
    $('i[rel="code"]', this).contents().unwrap().wrap('<code></code>');
});
//]]>
