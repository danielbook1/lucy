const Sidebar = () => {
  return (
    <div className="w-min pl-17 py-10 h-screen bg-[#e4e3e3]">
      <img
        src="/cat.svg"
        alt="cat"
        className="mb-50 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-100 ease-in-out"
      />
      <div className="w-full mr-34">
        <p>dashboard</p>
        <p>projects</p>
        <p>tasks</p>
        <p>clients</p>
        <p>notes</p>
        <p>links / asset library</p>
      </div>
      <div className="absolute bottom-10 font-bold">
        <p>account</p>
        <p>settings</p>
      </div>
    </div>
  );
};

export default Sidebar;
