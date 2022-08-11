import React from 'react';
import { AxiosResponse } from 'axios';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { getUserRepos } from '../../api/githubApi';

interface IRepo {
  name: string;
  description: string;
  url: string;
  language: string;
  avatar: string;
};

const username = 'victorCS46';

const Projects = () => {

  const [repos, setRepos] = React.useState<IRepo[]>([]);

  React.useEffect(() => {
    getUserRepos(username)
      .then(({ data }: AxiosResponse) => {
        const repo = data.map((item: any): IRepo => ({
          name: item.name,
          description: item.description,
          url: item.html_url,
          language: item.language,
          avatar: item.owner.avatar_url,
        }));
        setRepos(repo);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="space-around"
      >
        {
          (repos.length !== 0)
          ? repos.map((item, index) => (
            <Card key={ index } sx={{ maxWidth: 345 }} >
              <CardMedia
                component="img"
                height="225"
                image={ item.avatar }
                alt="profile pic"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  { item.name }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  { item.description }
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          )) : (
            <></>
          )
        }
      </Box>
    </React.Fragment>
  );
}

export default Projects;