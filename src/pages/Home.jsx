import React, { useState } from "react"
import { Box } from "@mui/material"

import HeroBanner from "../components/HeroBanner"
import SearchExercises from "../components/SearchExercises"

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState("all")

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercise={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
    </Box>
  )
}

export default Home
