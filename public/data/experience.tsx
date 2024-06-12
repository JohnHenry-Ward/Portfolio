interface Experience {
    title: string,
    date: string,
    body: string[],
    key: number
  }

const data: Array<Experience> = [
    {
        "title": "Software Engineer @ AKASA",
        "date": "Apr 2022 - Apr 2024",
        "body": [
            "At AKASA, my team designed and built workflows that significantly streamlined parts of the revenue cycle process for hospital networks in the United States. We used tools like Python, SQL, robotic process automation (RPA) and machine learning to automate human interactions in electronic health records (EHRs). In this remote role, communication and teamwork were key, and I collaborated daily with technical and non-technical colleagues to design, implement, deploy, monitor, and debug our workflows.",
            "One of my most impactful contributions involved diagnosing and resolving a critical product issue, restoring yield from less than 20% back to 100% within three weeks, which earned recognition from executives. I also led a process improvement initiative that established an operational team focused on high priority production issues as they arose, significantly decreasing production downtime. Additionally, I was the primary contributor in doubling a legacy product's output by analyzing and refactoring the product to integrate with a new workflow while also adding comprehensive output reporting. I also occasionally led stand ups, performed code reviews, and mentored new hires.",
            "Adapting to a fully remote work environment was initially challenging, but it taught me the importance of proactive communication and meticulous organization. I leveraged tools such as Slack and Jira to maintain clear and consistent communication with my team, ensuring that projects stayed on track and everyone was aligned. This experience has equipped me to thrive in a remote environment, which I believe allows companies to hire more diverse individuals and bring new and necessary perspectives to the workplace.",
            "I’m grateful for my time at AKASA, and while my technical skills grew and developed, my interpersonal skills, such as communication, teamwork, and leadership are what really blossomed while I was there. I worked with some incredibly talented individuals, and made some lasting connections that I don’t take for granted.",
        ],
        "key": 1
    },
    {
        "title": "B.S. in Computer Science @ WWU",
        "date": "Sep 2017 - Dec 2021",
        "body": ["I received a Bachelor of Science in Computer Science with a Minor in Mathematics from Western Washington University in December 2021. During my time at WWU, I collaborated with classmates on numerous projects, developed lasting relationships, and volunteered as a peer mentor (which you can read more about below). My coursework included Data Structures and Algorithms, Object-Oriented Design, Operating Systems, Databases, and Networks. My favorite non-Computer Science classes were Anthropology 102, where we studied the evolution of the human lineage from primitive primates to the origins of civilization, and Geology 211, which covered the origins, structure, and composition of the Earth, as well as common rocks and minerals. I was lucky enough to continue my studies virtually when Covid hit, and the lessons that taught me in adaptability are things I still use today. I greatly enjoyed my time at WWU, and the city of Bellingham feels like home to me. It’s a place I will always enjoy being in, no matter where life takes me."],
        "key": 2
    },
    {
        "title": "C.S. Peer Mentor @ WWU",
        "date": "Sep 2019 - Jun 2021",
        "body": [
            "At WWU, we had a group of upperclassmen who volunteered their time to help students early in the Computer Science classes with coursework. When I first started my journey into Computer Science, I heavily relied on the Peer Mentors. They were available every weekday during the evenings in the Computer Science lab. Once I was accepted into the major, I wanted to give back to the community that allowed me to succeed in the major.",
            "Computer Science was a challenging major to get into, and I often felt frustrated and stuck with coursework. I knew I wanted to help those who felt similarly so they could find their own success. As Peer Mentors, we focused on assisting students with course work in the three pre major classes at WWU: Data Structures and Algorithms, Systems, and Logic. Our goal was to guide students to a solution rather than simply telling them how to do something, so that they could learn and take that knowledge and continue to apply it to other problems. We aimed to foster an environment for students to connect to other students as well as faculty, so that they felt accepted in the Computer Science department.",
            "Being a Peer Mentor was one of, if not the best decision I made during my time at WWU. It taught me invaluable communication skills, helped me refine my Computer Science fundamentals, and allowed me to be a part of a growing community in the Computer Science department. I believe that my time as a Peer Mentor showed me that I want to work in an environment that values communication, leadership, teamwork, growth, and learning. These are my core values, and they enable me to be the best Software Engineer, and person, I can be."
        ],
        "key": 3
    },
    {
        "title": "Registrar Program Staff @ WWU",
        "date": "Sep 2019 - Jun 2021",
        "body": ["I worked part-time in the Registrar Office on campus at WWU. I processed thousands of degree evaluations, demonstrating high attention to detail and discretion. I also organized degree applications to ensure easy access for other degree evaluators. Additionally, I assisted in graduation ceremonies each quarter, which developed my teamwork and communication skills. I enjoyed this job and felt it provided valuable insight into working in an organization that handles dynamic information flow."],
        "key": 4
    },
]

export default data;