import React from 'react';
import styles from '../../styles/Profile.module.scss';
import {Avatar, Card, CardContent, Typography} from "@mui/material";


const Profile = ({name, imgSrc, role, contact, belong}) => {
    return (
        <Card sx={{width: 250, justifyContent:'center'}}>
            <CardContent sx={{justifyContent:'center'}}>
                <Avatar alt={name} src={imgSrc} sx={{ width: 'auto', height: 'auto', margin:0}}/>
                <Typography variant="h5">
                    {name}
                </Typography>
                <Typography color={"text.secondary"}>
                    {role}
                </Typography>
                <Typography>
                    {belong}
                </Typography>
                <Typography color={"text.secondary"}>
                    {contact}
                </Typography>

            </CardContent>
        </Card>
    );
};

export default Profile;