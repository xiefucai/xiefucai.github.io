echo '<ul style="line-height:1.5;">'>ls.htm;for f in `find . -name '*.html'`;do echo "<li>${f%/*}/<a href=\"$f\">${f##*/}</a></li>">>ls.htm;done;echo '</ul>'>>.ls.htm;
