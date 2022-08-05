import React from 'react';
import {Avatar, Typography} from '@mui/material';
import {Box} from '@mui/system';

const Profile = ({name, imgSrc, role, profile, belong}) => {
    return (
        <Box sx={{width: 190}}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Avatar
                    alt={name}
                    src={imgSrc}
                    sx={{backgroundColor: 'white', width: 120, height: 120, margin: 0}}
                />
            </Box>
            <Box fontSize={15} sx={{display: 'flex', justifyContent: 'center'}}>
                {name}
            </Box>
            <Box
                sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
            >
                <Box fontSize={12} sx={{display: 'flex', justifyContent: 'center'}}>
                    {belong}
                </Box>
                <Box fontSize={14} sx={{display: 'flex', justifyContent: 'center'}}>
                    {role}
                </Box>

                {profile ? (
                    <a

                        target={'_blank'}
                        style={{
                            fontFamily: 'NotoSans',
                            textDecoration: 'none',
                            fontSize: 12,
                            fontWeight: 600,
                            color: 'white',
                        }}
                        rel='noreferrer'
                        href={`https://${profile}`}
                    >
                        {profile}
                    </a>
                ) : (
                    <Box fontSize={12} sx={{display: 'flex', justifyContent: 'center'}}>
                        {'tmp'}
                    </Box>
                )}

                {/*<Typography color={"text.secondary"}>

                </Typography>*/}
            </Box>
        </Box>
    );
};

export default Profile;
