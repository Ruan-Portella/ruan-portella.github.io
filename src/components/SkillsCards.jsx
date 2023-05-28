import { useContext } from 'react';
import '../styles/SkillCard.css'
import PageContext from '../context/PageContext';


export function SkillsCards(skill) {
  const { isDark } = useContext(PageContext);
  return (
      skill.stacks.map((stack) => (
          <li className={`item ${isDark ? '' : 'light'}`} key={stack.name}>
            <i>{stack.image}</i>
              <h5>{stack.name}</h5>
          </li>
      ))
  )
}
