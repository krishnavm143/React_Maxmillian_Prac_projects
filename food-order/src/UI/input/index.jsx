const Input = ({ name, id, ...props }) => {
  return (
    <p className="control">
      <label htmlFor={id}>{name}</label>
      <input required id={id} name={id} {...props} />
    </p>
  );
};

export { Input };
