import "./style.css";

type DisplayItem = {
  id: number;
  name: string;
  external_urls: {
    spotify: string;
  };
  images: {
    url: string;
  }[];
};

type MyBlocksProps = {
  items: DisplayItem[];
};

export default function MyBlocks({ items }: MyBlocksProps) {
  return (
    <>
      <article>
        <ul>
          {items && items.length > 0 ? (
            items.slice(0, 4).map((item, index) => (
              <li key={item.id}>
                <a
                  href={item.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.images[0] && (
                    <img src={item.images[0].url} alt={item.name} />
                  )}
                  <h3>{item.name}</h3>
                </a>
              </li>
            ))
          ) : (
            <p>Mes données YOvont s'afficher ici</p>
          )}
        </ul>
      </article>
    </>
  );
}
