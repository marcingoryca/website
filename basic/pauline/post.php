<?php 
define('PAGETITLE', 'Post');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo PAGETITLE; ?></title>
</head>
<body>
    <main>
        <header>
            <h1><?php echo PAGETITLE; ?>
        </header>
        <section id="content">
            <form id="books" action="booksindex.php" method="post">
                <div>
                    <input type="text" name="bookTitle" id="bookTitle" placeholder="Book title...">
                    <input type="text" name="bookAuthor" id="bookAuthor" placeholder="Author...">
                </div>
                <div>
                    <input type="submit" name="submit" value="OK">
                    <input type="reset" name="cancel" value="Cancel">
                </div>
            </form>
        </section>
    </main>
    
</body>
</html>