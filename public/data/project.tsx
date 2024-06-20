interface Project {
    title: string,
    subtitle: string,
    body: string,
    imgName: string[],
    imgDesc: string[],
    key: number
  }

const data: Array<Project> = [
    {
        "title": "Fantasy Futbol",
        "subtitle": "JavaScript, React.js, Node.js, MongoDB, API Integration, Heroku",
        "body": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sapiente qui minus minima doloribus, repellat voluptas non ullam, pariatur delectus distinctio nemo asperiores, magni voluptates vel sed itaque libero. Illo, vero optio suscipit dolore facere, quos atque aut commodi sit libero quaerat vel nobis! Facilis, quidem! Modi, placeat quo? Debitis aut voluptate exercitationem dignissimos nemo perferendis tempore, quae voluptas in ad. Natus ex accusantium vitae eum fugiat ipsum! Pariatur similique hic ad libero nihil eos voluptas dignissimos natus, ipsa, error eum illum totam sint distinctio iure soluta at. Voluptate unde a amet quaerat id ex reiciendis deserunt placeat molestias iusto.",
        "imgName": ["temp.png"],
        "imgDesc": ["description of image"],
        "key": 1
    },
    {
        "title": "Movie Script Sentiment Analysis",
        "subtitle": "Python, NLP",
        "body": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sapiente qui minus minima doloribus, repellat voluptas non ullam, pariatur delectus distinctio nemo asperiores, magni voluptates vel sed itaque libero. Illo, vero optio suscipit dolore facere, quos atque aut commodi sit libero quaerat vel nobis! Facilis, quidem! Modi, placeat quo? Debitis aut voluptate exercitationem dignissimos nemo perferendis tempore, quae voluptas in ad. Natus ex accusantium vitae eum fugiat ipsum! Pariatur similique hic ad libero nihil eos voluptas dignissimos natus, ipsa, error eum illum totam sint distinctio iure soluta at. Voluptate unde a amet quaerat id ex reiciendis deserunt placeat molestias iusto.",
        "imgName": ["sentiment1.png"],
        "imgDesc": ["description of image"],
        "key": 2
    },
    {
        "title": "Instructor Efficiency Web Tool",
        "subtitle": "JavaScript, Node.js, Express.js, HTML, CSS",
        "body": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sapiente qui minus minima doloribus, repellat voluptas non ullam, pariatur delectus distinctio nemo asperiores, magni voluptates vel sed itaque libero. Illo, vero optio suscipit dolore facere, quos atque aut commodi sit libero quaerat vel nobis! Facilis, quidem! Modi, placeat quo? Debitis aut voluptate exercitationem dignissimos nemo perferendis tempore, quae voluptas in ad. Natus ex accusantium vitae eum fugiat ipsum! Pariatur similique hic ad libero nihil eos voluptas dignissimos natus, ipsa, error eum illum totam sint distinctio iure soluta at. Voluptate unde a amet quaerat id ex reiciendis deserunt placeat molestias iusto.",
        "imgName": ["caaml1.png"],
        "imgDesc": ["description of image"],
        "key": 3
    },
    {
        "title": "Deadwood",
        "subtitle": "Java, OOP, Pair Programming",
        "body": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sapiente qui minus minima doloribus, repellat voluptas non ullam, pariatur delectus distinctio nemo asperiores, magni voluptates vel sed itaque libero. Illo, vero optio suscipit dolore facere, quos atque aut commodi sit libero quaerat vel nobis! Facilis, quidem! Modi, placeat quo? Debitis aut voluptate exercitationem dignissimos nemo perferendis tempore, quae voluptas in ad. Natus ex accusantium vitae eum fugiat ipsum! Pariatur similique hic ad libero nihil eos voluptas dignissimos natus, ipsa, error eum illum totam sint distinctio iure soluta at. Voluptate unde a amet quaerat id ex reiciendis deserunt placeat molestias iusto.",
        "imgName": ["deadwood1.png"],
        "imgDesc": ["description of image"],
        "key": 4
    },
    {
        "title": "Microshell",
        "subtitle": "C, UNIX",
        "body": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sapiente qui minus minima doloribus, repellat voluptas non ullam, pariatur delectus distinctio nemo asperiores, magni voluptates vel sed itaque libero. Illo, vero optio suscipit dolore facere, quos atque aut commodi sit libero quaerat vel nobis! Facilis, quidem! Modi, placeat quo? Debitis aut voluptate exercitationem dignissimos nemo perferendis tempore, quae voluptas in ad. Natus ex accusantium vitae eum fugiat ipsum! Pariatur similique hic ad libero nihil eos voluptas dignissimos natus, ipsa, error eum illum totam sint distinctio iure soluta at. Voluptate unde a amet quaerat id ex reiciendis deserunt placeat molestias iusto.",
        "imgName": ["microshell1.png"],
        "imgDesc": ["description of image"],
        "key": 5
    },
    {
        "title": "Buy Better",
        "subtitle": "JavaScript, Express.js, REST API, HTML, CSS",
        "body": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque sapiente qui minus minima doloribus, repellat voluptas non ullam, pariatur delectus distinctio nemo asperiores, magni voluptates vel sed itaque libero. Illo, vero optio suscipit dolore facere, quos atque aut commodi sit libero quaerat vel nobis! Facilis, quidem! Modi, placeat quo? Debitis aut voluptate exercitationem dignissimos nemo perferendis tempore, quae voluptas in ad. Natus ex accusantium vitae eum fugiat ipsum! Pariatur similique hic ad libero nihil eos voluptas dignissimos natus, ipsa, error eum illum totam sint distinctio iure soluta at. Voluptate unde a amet quaerat id ex reiciendis deserunt placeat molestias iusto.",
        "imgName": ["buybetter.png"],
        "imgDesc": ["description of image"],
        "key": 6
    },
]

export default data;