<?php
if(isset($_POST['bookTitle']) && isset($_POST['bookAuthor']) && isset($_POST['submit'])) {
    echo "<h2>" . $_POST['bookTitle'] . "</h2>";
    echo "<h2>" . $_POST['bookAuthor'] . "</h2>";
}