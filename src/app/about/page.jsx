export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl text-center font-extrabold py-8">About</h1>
      <div className="lg:px-40 space-y-8 text-center">
        <p>
          Welcome to YoteShin, your ultimate destination for discovering the latest and greatest in movies and TV shows! Our platform is designed to provide a seamless and immersive experience for film enthusiasts and binge-watchers alike.
        </p>
        <div>
          <p>
            Using TMDB API, we strive to offer the best experience of browsing through tons of movies and TV shows from around the world. Our goal is to help you explore and discover new favorites, stay updated on upcoming releases, and delve deep into the world of cinema and television.
          </p>
        </div>
        <div>
          <p>
            We value your feedback and suggestions. If you have any questions, comments, or ideas to share, please don't hesitate to contact us. Join us on our journey to celebrate the magic of movies and TV shows.
          </p>
        </div>
        <p className="text-center">
          Thank you for choosing YoteShin!
        </p>
      </div>
    </div>
  );
}