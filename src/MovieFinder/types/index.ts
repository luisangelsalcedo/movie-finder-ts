export interface APIResponse {
  Response: string;
  Search?: Movie[];
  totalResults?: string;
  Error?: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieMapper {
  id: string;
  title: string;
  year: string;
  type: string;
  image: string;
}
