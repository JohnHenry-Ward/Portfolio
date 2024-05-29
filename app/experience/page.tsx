import Header from "../components/Header";
import ExperienceCard from "../components/ExperienceCard";
import data from '../../public/data/experience';

const Experience = () => {

  return (
    <div>
      <Header title='Experience' subtitle='Work, Volunteer, & Education' />
        <div className='experience-container'>
          {
            data.map((exp) => {
              return (
                <ExperienceCard title={exp.title} date={exp.date} body={exp.body} key={exp.key} />
              )
            })
          }
        </div>
    </div>
  )
}

export default Experience
