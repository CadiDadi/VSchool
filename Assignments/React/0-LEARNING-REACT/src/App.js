//required
import React from 'react'
//component imports
import Navbar from './Navbar'
import Welcome from './Welcome'
import Members from './Members'
import big1 from './img/big1.jpg'
import Comment from './Comment'
import ContactCard from './ContactCard'
import Boxes from './Boxes'


const App = () => {
    return (

        <div> 
            <Navbar />
            <Welcome name='WelcomeName'/>

            {/* note: use of PROPS,  (see Members.js file for secondary part and 0-REACT-NOTES.md file) */}
            {/* note: Images - different syntax for an image file vs a url */}
            <div>
                <Members id='scott' name='Scott' pic={big1}/>
                <Members id='sam' name='Sam' pic='https://coursework.vschool.io/content/images/2016/10/v-school-abbreviated-coursework-logo.jpg'/>
            </div>

            <Comment comment='Hi, I am a comment' 
                     date='11/15/18'
                     user={{name: 'bob', pic: "https://bit.ly/2FqiQOW"}} />
            {/* strings go in '', everything else goes inside {}. EXCEPT string template literals must be: {``}.    */}
            {/* ternary if statement using '?' and ':', is the same as: if boolean is true, display 'live', else display 'dead' */}

            <ContactCard name="Morty" age={13} isLiving= {false ? "live" : "dead"} />

            <Boxes backgroundColor='blue' color='grey' textAlign='center' margin='5px' padding='5px' title='Seven' genre='Thriller' year='2000' />
            <Boxes backgroundColor='grey' color='green' textAlign='center' margin='5px' padding='5px' title='Seven' genre='Thriller' year='2000' />
            <Boxes backgroundColor='green' color='purple' textAlign='center' margin='5px' padding='5px' title='Seven' genre='Thriller' year='2000' />
            <Boxes backgroundColor='purple' color='yellow' textAlign='center' margin='5px' padding='5px' title='Seven' genre='Thriller' year='2000' />

        </div>
    )
}
export default App
