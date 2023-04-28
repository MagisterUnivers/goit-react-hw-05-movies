export const CastCard = ({ photoPath, name, character, gender }) => {
  const actorPhoto = photoPath ? (
    <img src={`https://image.tmdb.org/t/p/w200/${photoPath}`} alt={name} />
  ) : (
    <img
      src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_300/https://cadprojekt.com.pl/wp-content/uploads/2022/03/avatar-placeholder-300x300.gif"
      alt="cast placeholder"
      width="200"
    />
  );
  return (
    <>
      {actorPhoto}
      <p>{name}</p>
      <p>Character: {character}</p>
    </>
  );
};
