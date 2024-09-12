import Button from "./Component/Button";
import Header from "./Component/Header";
import './App.css'
import { Box } from "@mui/material";
export default function App() {
  return (
    <main style={{width:'100%'
      ,height:'100vh',
      background:'black'
    }}>
    <Box className='main'>
    <Header/>
    </Box>
    </main>
  )
}
