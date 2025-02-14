import React from 'react';
import RenderInstructorCard from './Card/InstructorCard';
import {Typography,Box} from '@material-ui/core';


export default function PopularInstructor() {
    return (
        <div>
            <Box >
                <Box style={{display:"flex",justifyContent:"space-between"}}>
                    <Typography  variant="h5" style={{display:"flex",justifyContent:'left', alignItems:'left',marginLeft:'55px',marginTop:'20px',color:'black'}}>
                    Our  <span style={{fontWeight:600}}> &nbsp;Instructors</span> 
                    </Typography> 
                   
                </Box>
            </Box>
           
                 <RenderInstructorCard />
           
        </div>
    )
}
