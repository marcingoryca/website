<?php
if (isset($_GET['movieTitle']) && 
    isset($_GET['movieDirector']) && 
    isset($_GET['movieGenre']) && 
    isset($_GET['submit'])) {
        echo '<h2>' . $_GET['movieTitle'] . '</h2>';
        echo '<h2>' . $_GET['movieDirector'] . '</h2>';
        echo '<h2>' . $_GET['movieGenre'] . '</h2>';

        if($_GET['movieGenre'] === 'scifi') {
            echo '<p>This movie is super awesome!</p>';
            echo '<p>Movie description goes here...</p>';
        }
} else {
    print('<h3>Sorry, there was a problem...</h3>');
}

