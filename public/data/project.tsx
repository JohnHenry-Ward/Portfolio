interface Project {
    title: string,
    subtitle: string,
    body: string[],
    imgName: string[],
    imgDesc: string[],
    gh_link: string,
    key: number
  }

const data: Array<Project> = [
    {
        "title": "Fantasy Futbol",
        "subtitle": "JavaScript, React.js, Node.js, MongoDB, API Integration, Heroku",
        "body": [
            "I created this project out of my love for soccer, fantasy sports, and full-stack engineering. In previous international soccer tournaments (World Cup, Euros, etc.), I tracked the teams each user drafted and awarded points based on team performance. Initially, I used spreadsheets to manually track each person's teams and scores. With each iteration, I added more complex formulas, in-depth score tracking, and graphical elements like flags and color coding. However, I eventually reached the limitations of spreadsheet functionalities for what I wanted to achieve with graphics and automation. The next logical step was to create a full-stack web application, and with the 2022 World Cup only a few months away, I set a deadline to have a fully functional web app before the tournament kicked off.",
            "I began by scoping out the desired features of the app, including user capabilities like drafting and league creation, as well as visual elements like flags and user colors. My goal was to create a fully automated and functional web app for my family to use while also learning new tools to enhance my skills as a full-stack engineer. Through this project, I became much more proficient in tools like React.js, Node.js, and MongoDB, and gained a deeper understanding of concepts like RESTful APIs, user authentication, and the deployment process.",
            "In this web application, users can create and/or join leagues where they compete against other users by scoring points based on how well their teams perform in a tournament. Before the tournament begins, users draft their teams in a typical draft format. The web app has this draft functionality built in, allowing users to draft from their own devices and see the draft update in real time. Once the draft is complete, users can sit back and enjoy the tournament while tracking their scores, which update automatically as the matches are played.",
            "Future plans for this project include updating the graphics to give it a more professional look, as I still need to improve my graphic design and UI/UX skills. Additionally, I plan to add functionality that allows users to select the tournament they want to create a league for, enabling the app to be used for multiple upcoming tournaments, as this version was built specifically for the 2022 World Cup. This project has been a fantastic way to merge my interests in soccer, fantasy sports, and web development, and I am excited to continue improving it.",
        ],
        "imgName": ["temp.png"],
        "imgDesc": ["Image coming soon!"],
        "gh_link": "https://github.com/JohnHenry-Ward/WorldCup2022Game",
        "key": 1
    },
    {
        "title": "Movie Script Sentiment Analysis",
        "subtitle": "Python, NLP",
        "body": [
            "The Movie Script Sentiment Analysis project was created during my Natural Language Processing course. I posed the question: Can the highs and lows of movies be visualized using script sentiment analysis? More specifically, I aimed to determine if a movie could be categorized into one of the six main arcs of storytelling, as conceptualized by author Kurt Vonnegut in his rejected master’s thesis.",
            "The goal of the project was to develop an algorithm that could read a movie script, perform sentiment analysis on it, track and plot the sentiment, and see if the resulting graph resembled any of the six arcs of storytelling. I successfully created an algorithm that accomplished all these tasks. My results indicated that it is indeed possible to generate graphs that align with one of the six storytelling arcs.",
            "I was very pleased with the outcome and thrilled that I could combine my passion for movies and programming to create something both cool and fascinating. This project not only showcased the practical application of sentiment analysis in understanding narrative structures but also highlighted the intersection of technology and creative arts.",
            "A more detailed description and analysis can be seen by following the GitHub link."
        ],
        "imgName": ["sentiment1.png"],
        "imgDesc": ["An example graph"],
        "gh_link": "https://github.com/JohnHenry-Ward/Script-Sentiment-Analysis",
        "key": 2
    },
    {
        "title": "Instructor Efficiency Web Tool",
        "subtitle": "JavaScript, Node.js, Express.js, HTML, CSS",
        "body": [
            "The Instructor Efficiency Web Tool, also referred to as CAAML, was my senior project at WWU. Collaborating with a group of three other students and a professor, we aimed to extend a previous project called CAAML. That project utilizes machine learning to label parts of an audio file from a classroom setting, identifying activities such as lecture, instructor question, student question, group work, and silence, among others, with a total of nine possible labels.",
            "Our team required only a high-level understanding of CAAML to develop our web tool. The primary purpose of our tool is to take these labeled outputs and create various graphs and visualizations to present the data in multiple ways. The goal was to provide instructors with insights into their use of class time and offer suggestions for better classroom management. Additionally, we collaborated with the professor leading the project to design functionality to record and upload audio directly from the browser and store the resulting files.",
            "Although we did not achieve all our initial objectives, we successfully created four different visualizations and gained significant knowledge about the software development process. We employed an agile scrum approach, which involved weekly meetings with our professor and regular team meetings to ensure we stayed on track. I acted as the tech lead for this project, delegating work and ensuring everyone was on the same page through clear communication and organization.",
        ],
        "imgName": ["caaml1.png"],
        "imgDesc": ["Toggleable Activity Trace and Heat Map"],
        "gh_link": "",
        "key": 3
    },
    {
        "title": "Deadwood",
        "subtitle": "Java, OOP, Pair Programming",
        "body": [
            "Deadwood was one of the first major projects I worked on. Alongside another undergraduate student, we developed the board game Deadwood in Java. The game accommodates 2-8 players, utilizes multiple classes, and implements design patterns we learned in our Object-Oriented Design class. For the graphical user interface, we used the Java Swing framework.",
            "This project taught me a lot about the software design process and the importance of strong communication skills when working on a development team. It also highlighted the significance of version control using Git. My teammate and I encountered multiple merge conflicts, which helped us learn valuable lessons about version control and code organization. Although the code is a bit clunky, as this was created earlier on in my computer science journey, I am really proud of the final product. I look forward to creating a similar project in the future to apply what I've learned and to improve upon my past work.",
        ],
        "imgName": ["deadwood1.png"],
        "imgDesc": ["Main Game Board"],
        "gh_link": "https://github.com/JohnHenry-Ward/Deadwood",
        "key": 4
    },
    {
        "title": "Microshell",
        "subtitle": "C, UNIX",
        "body": [
            "MicroShell is a project built using the C language, leveraging C system calls and its pointer-focused design, along with dynamic memory allocation for storing commands in arrays. Its primary function is to read commands from the command line and execute them accordingly. MicroShell is capable of handling a wide range of terminal commands, similar to those managed by most standard shells.",
            "This project provided me with a deeper understanding of the UNIX operating system and enhanced my experience in writing C code. It also helped me grasp essential programming concepts such as pointers, the distinction between system and library calls, and memory management. For a more in-depth description of the commands supported by MicroShell, please follow the GitHub link.",            
        ],
        "imgName": ["microshell1.png"],
        "imgDesc": ["Example of commands"],
        "gh_link": "https://github.com/JohnHenry-Ward/Microshell",
        "key": 5
    },
    {
        "title": "Buy Better",
        "subtitle": "JavaScript, Express.js, REST API, HTML, CSS",
        "body": [
            "BuyBetter is a full-stack web tool developed for my Tech for Social Good class during my undergrad studies at WWU. Its goal was to promote ethical shopping and support local businesses. The tool encourages users to buy products directly from third-party sellers or local stores instead of through Amazon, thereby reducing the negative impact of online shopping on small businesses and the environment.",
            "BuyBetter is designed for simplicity and ease of use. Users start by copying the URL of the product they are interested in from Amazon, then enter their zip code or allow the tool to use their exact location. Upon submission, the tool scrapes the Amazon product page to get Universal Product Code (UPC) of the product, and then checks if the product is sold by a third-party seller. If a third-party seller is detected, a pop-up appears, offering the user the option to visit the seller's website and purchase directly. Simultaneously, the tool searches for local stores that may carry the same or similar products using Google's Places API. A map is shown with markers indicating the locations of these stores, and they are also listed below the map with their addresses for easy reference. Additionally, news articles about the impact of Amazon and online shopping on local businesses and the environment are displayed to provide context.",
            "BuyBetter utilizes various technologies to achieve its functionality, including Google's Places API to find local stores based on product categories, JavaScript and HTML/CSS for the front-end user interface, as well as Node.js and Express.js for the back-end server. The goal was to provide a practical tool that helps consumers make more informed and ethical shopping decisions, ultimately supporting local economies and reducing environmental impact. By redirecting purchases from Amazon to third-party sellers and local shops, BuyBetter seeks to foster a more sustainable and community-oriented shopping experience.",
            "This tool, as well as my Tech for Social Good class as a whole, made me realize the importance of creating software and technology that does more good than harm. There is a lot of technology that is built on unethical values or is not used for good, and it’s important to me that I am a part of a team whose values align and whose goal is to create ethical software.",
        ],
        "imgName": ["buybetter.png"],
        "imgDesc": ["The Home Page"],
        "gh_link": "https://github.com/JohnHenry-Ward/buyBetter",
        "key": 6
    },
]

export default data;