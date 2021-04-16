<?php include('form.php'); ?>
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
            <h1><?php echo PAGETITLE; ?></h1>
        </header>
        <section id="content">
            <form id="userName" action="formsubmit.php" method="post" >
                <div>
                    <input type="text" placeholder="User name:" value="" name="userName">
                </div>
                <div>
                    <input type="submit" value="OK!" name="submit">
                    <input type="reset" value="Cancel" name="cancel">
                </div>
            </form>
        </section>
    </main>
</body>
</html>