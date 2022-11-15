import react, {useState} from 'react'
import {BsXLg, BsDashLg, BsCaretDownFill } from 'react-icons/bs'
import { Container,     TextContainer } from './styles'
const ExpansiveCard = ({title, description}) => {
    const [open, setOpen] = useState(false);
    return (
        <Container>
          <div id="title">
            <div id="text">
                    <p>{title}</p>
            </div>
            <div id="button">
                {!open ? <BsCaretDownFill onClick={() => setOpen(!open)} color='#9A74B8' size={22}/> : <BsDashLg onClick={() => setOpen(!open)} color='#9A74B8' size={16}/>}
            </div>
          </div>
        {open && (
             <TextContainer>
             <p>
             {description}
             </p>
             </TextContainer>
        )}
        </Container>
    )
}


export default ExpansiveCard