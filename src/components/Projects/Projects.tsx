import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography, useTheme } from '@mui/material';
import { GitHub } from '@mui/icons-material';

import { getUserRepos } from '../../api/githubApi';
import { IRepo } from '../../types/projects';
import './projects.css';

const username = 'victorCS46';

const Projects = () => {

  const [repos, setRepos] = useState<IRepo[]>([]);
  const { palette } = useTheme();

  useEffect(() => {
    getUserRepos(username)
      .then(({ data }: AxiosResponse) => {
        const repoList: IRepo[] = data.map((item: any): IRepo => ({
          name: item.name,
          description: item.description,
          url: item.html_url,
          language: item.language,
          avatar: item.owner.avatar_url,
        }));
        setRepos(repoList);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box
        width={{xs: '60%', md: '80%'}}
        margin="auto"
        display="flex"
        flexWrap="wrap"
        gap={3}
        justifyContent="center"
      >
        {
          (repos.length !== 0)
          ? repos.map((item, index) => (
            <Card key={ index } sx={{ width: 345 }} className="repo-shadow">
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
                <Typography variant="body2" color={palette.text.secondary}>
                  { item.description }
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={item.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Go to repo
                </Button>
              </CardActions>
            </Card>
          )) : (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress />
              <Typography color={palette.primary.light}>
                Requesting from github <GitHub fontSize="small" />
              </Typography>
            </Box>
          )
        }
      </Box>
    </>
  );
}

export default Projects;