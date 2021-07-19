<?php
$title="File Handling";
include 'head.php';
include 'body.php';

// Code here
echo readfile('readme.md');

// Open file for read only
$test_file = fopen('test.txt', 'r') or die("Unable to open file!");

// Open file for write only
$test_file = fopen('test.txt', 'w') or die("Unable to open file!");

// Try to open file 
$no_file = fopen('mynoexistentfile.yua', 'r') or die("Unable to open file!");


include 'footer.php';
include 'end.php';