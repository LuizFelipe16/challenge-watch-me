import { useState } from 'react';
import { GenreResponseProps, MovieProps } from './interfaces/global';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setMovies={setMovies} setSelectedGenre={setSelectedGenre} />
      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}