import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import InfoList from '../components/InfoList'
import { getMarineInfo, getOneMarineItem } from '../components/MarineService'
import NavBar from '../components/NavBar'
import Quizz from '../components/Quizz'
import HomePage from '../components/HomePage'

const MainContainer = () => {

const[listOfMarineInfo, setListOfMarineInfo] = useState([])
const [tickedCount, setTickedCount] = useState(0)

useEffect(() => {
    getMarineInfo()
    .then((allMarineInfo) =>{
        setListOfMarineInfo(allMarineInfo)
    })
}, [])

const changeCounter = (isChecked) => {
    let checkedCount = tickedCount
    if (isChecked){
        checkedCount = checkedCount + 1
    }
    else {
        checkedCount = checkedCount - 1
    }
    setTickedCount(checkedCount)
    console.log(tickedCount)
}



    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path='/modules' exact element={<InfoList listOfMarineInfo = {listOfMarineInfo} changeCounter={changeCounter}/>}/>
                <Route path='/quizz' element={<Quizz/>}/>
            </Routes>
        </Router>
    )
}

export default MainContainer
