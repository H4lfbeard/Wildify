import { Link } from "react-router-dom";
import "./style.css";

interface Artist {
  id: string;
  name: string;
  images?: {
    url: string;
  }[];
}

interface Album {
  id: string;
  name: string;
  release_date: string;
  images?: {
    url: string;
  }[];
}

interface Episode {
  id: string;
  name: string;
  artists: {
    name: string;
  }[];
  album: {
    name: string;
  };
}

interface SearchResultListProps {
  items: Artist[] | Album[] | Episode[];
  title: string;
  type: "artist" | "album" | "episode";
}

function SearchResultList({ items, title, type }: SearchResultListProps) {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <ul className="dropdownItem">
      <h2>{title}</h2>
      <li>
        {items.map((item) => {
          if (type === "artist") {
            const artist = item as Artist;
            return (
              <li key={artist.id} className={`${type}-item`}>
                <Link to={`/artists/${artist.id}`} className="artist-link">
                  <div className="artist-content-wrapper">
                    {artist.images?.[0] && (
                      <img
                        src={artist.images[0].url}
                        alt={artist.name}
                        width="50"
                        height="50"
                        className={`${type}-image`}
                      />
                    )}
                    <p>{artist.name}</p>
                  </div>
                </Link>
              </li>
            );
          }
          if (type === "album") {
            const album = item as Album;
            return (
              <li key={album.id} className={`${type}-item column`}>
                {album.images?.[0] && (
                  <img
                    src={album.images[0].url}
                    alt={album.name}
                    width="50"
                    height="50"
                    className={`${type}-image`}
                  />
                )}
                <p>
                  {album.name}
                  <br />
                  Date de sortie : {album.release_date}
                </p>
              </li>
            );
          }
          if (type === "episode") {
            const episode = item as Episode;
            return (
              <li key={episode.id} className={`${type}-item`}>
                <p>{episode.name}</p>
                <p>
                  Artiste : {""}
                  {episode.artists?.map((artist) => artist.name).join(", ")}
                </p>
                <p>Album : {episode.album.name}</p>
              </li>
            );
          }
          return null;
        })}
      </li>
    </ul>
  );
}

export default SearchResultList;
