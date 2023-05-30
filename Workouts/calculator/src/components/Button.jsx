let Button = ({ onClick, children }) => {
  return (
    <div>
      <button className="bg-cyan-700 m-4 rounded-sm h-8 w-10 p-1" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
