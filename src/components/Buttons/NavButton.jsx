function NavButton({ children, bg }) {
  return (
    <a
      className={`inline-block rounded-md px-5 py-[10px] text-sm font-medium duration-300 ${
        bg === "accent"
          ? "bg-accent text-white hover:bg-white hover:text-accent"
          : "bg-white text-accent hover:bg-accent hover:text-white"
      }`}
      href=""
    >
      {children}
    </a>
  );
}

export default NavButton;
