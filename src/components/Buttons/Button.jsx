function Button({ children }) {
  return (
    <a
      className="inline-block rounded-md border-2 border-solid border-accent bg-accent px-8 py-3.5 text-base font-medium text-white duration-300 hover:bg-transparent hover:text-accent"
      href=""
    >
      {children}
    </a>
  );
}

export default Button;
