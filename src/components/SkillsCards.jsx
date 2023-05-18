import { Carousel } from 'react-bootstrap'
import { responsive } from '../utils/responsiveData'
import '../styles/SkillCard.css'


export function SkillsCards(skill) {
  return (
    <Carousel responsive={responsive} className='skill-slider' infinite='true' keyboard={true} touch='true'>
      {skill.stacks.map((stack) => (
        <Carousel.Item interval={1000} key={stack.name}>
          <div className='item' key={stack.name}>
            <i>{stack.image}</i>
            <Carousel.Caption>
              <h5>{stack.name}</h5>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
