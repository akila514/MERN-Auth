const Home = () => {
  return (
    <div
      className="h-screen w-full relative bg-cover bg-center text-sm font-medium"
      style={{
        backgroundImage:
          'url("https://r4.wallpaperflare.com/wallpaper/516/763/582/abstract-blur-blurred-gaussian-wallpaper-f8c6ec2a7ffc47791ed0094262391bd0.jpg")',
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row gap-4 pt-10 px-5">
        <div className="w-[400px] rounded-md bg-white bg-opacity-70 flex flex-col">
          <h1 className="font-bold bg-white p-2 rounded-t-md">My Profile</h1>
          <div className="p-4">My Profile</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
