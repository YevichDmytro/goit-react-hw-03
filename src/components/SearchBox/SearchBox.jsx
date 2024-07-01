const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <input
        type='input'
        value={value}
        onChange={e => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
