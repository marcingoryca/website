<?php
if(isset($_POST['userName']) && isset($_POST['submit'])) {
    echo 'Username: ' . $_POST['userName'];
}