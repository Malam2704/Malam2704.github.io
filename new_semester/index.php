<?php
    $path = "./";
    include $path."assets/inc/header.php";
?>
    <!-- Top Nav bar to goto the links for projects -->
    <nav id="navigation">
        <ul>
            <li ><a href="#about">About</a></li>
            <li ><a href="#exercises">Exercises</a></li>
            <li ><a href="#individual">Individual Projects</a></li>
            <li ><a href="#group">Group Projects</a></li>
            <li ><a href="<?php echo $path . "emailform.php"; ?>">Contact Form</a></li>
            <li onclick="myFunction()"><a>Dark Mode</a></li>
        </ul>
    </nav>
    
    <header>
        <h1>Mohammed Alam</h1>
    </header>

    <!-- A description of me and 4 paragraphs entailing my eduction
    past prgramming knowledge, what my hobbies are, and my contact information -->
    <div id="about" >
        <h2 class="ht">A bit about me</h2>
        <p class="p1">
            Well, my name is Mohammed Alam, and I'm from New York City.
            I am currently a Computing Exploration Major at RIT, looking at either Software
            Engineering, Computer Science, or Web & Mobile Computing.
        </p>
        <p class="p2">
            My hobbies include playing video games, trading in the stock market, and 
            doign some general research about a few topics I deem interesting, such as
            the elections, infastructure development, and any data that pertains to maps.
            I have thousands of hours of history on these maps alone. 
        </p>
        <p class="p3">For Programming, I have been doing so since my Sophmore Year fo Highschool
            Transitioning through the drag and drgo based programs in Scratch, in AP CS to
            Java in my Software Development Class. I've dabbled in Python the most, and I would
            say I'm the most confident using Python's Object Oriented framework. 
        </p>
        <p class="p4">My email is ma3655@rit.edu / ma3655@g.rit.edu , so if you have any questions ask away.</p>

        <figure class="picture">
            <img src="assets/images/my_photo.jpg" width="500" height="600" alt="A picture of myself">
        </figure>
    </div>

    <!-- Belwo are jsut a variety of links that will be edited in teh future as
    a goto for my projects in teh remainder fo this course. -->

    <div id="exercises">
        <h2>Exercises</h2>
        <ol>
            <li ><a href="#navigation">Exercise 1</a> - My homepage website, literally this one you're looking at.</li>
            <li ><a href="exercise2/index.html">Exercise 2</a> - This is an excercise inclusing responsive web design, a placement of images, positions, and transitions</li>
            <li ><a href="exercise3/index.html">Exercise 3</a> - Forms example of creation</li>
            <li ><a href="exercise4/EX04/EX04.html">Exercise 4</a> - Forms and Javascript exercise</li>
            <li ><a href="exercise5/EX05/EX05.html">Exercise 5</a> - JavaScript part 2, where we delve into deeper topics such as simplifying the document calss and nodes.</li>
            <li ><a href="exercise6phpFormsStart/orderform.php">Exercise 6</a> - PHP Pizza Ordering Form</li>
            <li ><a href="exercise_seven.html">Exercise 7</a></li>
        </ol>
    </div>

    <div id="individual">
        <h2>Individual Projects</h2>
        <ol>
            <li ><a href="project1/index.php">Project 1 In Progress</a> - First edition of my education website about my home, New York City, The Mobile Version is in Progress</li>
            <li ><a href="project2/index.php">Project 1 Final</a> - </li>
        </ol>
    </div>

    <div id="group">
        <h2>Group Projects</h2>
        <ol>
            <li ><a href="ISTE240-Group-Project/index.html">Project 1</a></li>
        </ol>
    </div>

    <div id="group">
        <h2>Published Projects</h2>
        <ol>
            <li ><a href="last_semester/project3/index.html">My CyberPunk 2077 Website</a> - I created a website to showcase the release of CyberPunk 2077 and tell a user what it's all about</li>
            <li ><a href="last_semester/project2/index.html">A Guide About All The Fake News</a> - A website to introduce users on the plethora of fake news plagueing society, and why it's so harmful, and mopre importantly, how to avoid it.</li>
            <li ><a href="last_semester/project1/index.html">My Extended Resume</a> - My resume and other information that is an extension of my resume and showcases what I've done, for my work experience.</li>
            <li ><a href="last_semester/midterm2201/index.html"> Welcome to Wyoming</a> - A guide about visitng the state of Wyoming and all the natural wonders hidden inside.</li>
            <li ><a href="last_semester/pages/jojodoss/index.html"> Jojodoss's Webpage (In Progress)</a> - A introduction to my friend's Youtube Channel</li>
            <li ><a href="last_semester/pages/pokegar/index.html"> Pokegar's Webpage (In Progress)</a> - A introduction to my other friend's Youtube Channel</li>
            <li ><a href="last_semester/pages/atlantean_Empire/index.html"> The Atlantean Empire (In Progress)</a> - The video game website towards one of my organizations/guild's in this game AQW</li>
        </ol>
    </div>

<?php
    include $path . "assets/inc/footer.php";
?>
