import React from 'react';
import { AxiosResponse } from 'axios';
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography, useTheme } from '@mui/material';
import { getUserRepos } from '../../api/githubApi';
import './projects.css';
import { GitHub } from '@mui/icons-material';

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
  const { palette } = useTheme();

  React.useEffect(() => {
    getUserRepos(username)
      .then(({ data }: AxiosResponse) => {
        const repo: IRepo[] = data.map((item: any): IRepo => ({
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
                  Repository
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
    </React.Fragment>
  );
}

export default Projects;