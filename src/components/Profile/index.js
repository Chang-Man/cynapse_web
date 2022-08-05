import React from 'react';
import {Avatar, Typography} from "@mui/material";
import {Box} from "@mui/system";


const Profile = ({name, imgSrc, role, profile, belong}) => {
    return (
        <Box sx={{width: 190}}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Avatar alt={name} src={imgSrc} sx={{width: 120, height: 'auto', margin: 0}}/>
            </Box>
            <Typography align={'center'} variant="h6">
                {name}
            </Typography>
            <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
                <Typography fontSize={14} variant={'body1'} width={'fit-content'} color={"#446ff2"}>
                    {belong}
                </Typography>
                <Typography>
                    {role}
                </Typography>
                {profile ? <a target={"_blank"} style={{
                    fontFamily: 'NotoSans',
                    fontSize: 14,
                    fontWeight: 800,
                    color:"black",
                }} rel="noreferrer" href={`https://${profile}`}>{profile}</a> : "temp"}

                {/*<Typography color={"text.secondary"}>

                </Typography>*/}
            </Box>

        </Box>
    );
};

export default Profile;