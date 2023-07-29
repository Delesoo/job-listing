import Remove from "../assets/icon-remove.svg";



const Filters = ({filterArray, setFilterArr}) => {
  
    const buttonRemoveHandler = (index) => {
        const copy = [...filterArray];
        copy.splice(index, 1);
        setFilterArr(copy);
      };
    
      const clearHandler = () => {
        setFilterArr([]);
      };
    
    return (
    <div className="filters">
    <div className="choiceBTNS">
      {filterArray.map((buttonClear, index) => {
        return (
        <button className="filterBTN" key={buttonClear.value}>
          <h3>{buttonClear.value}</h3>
          <div className="removeIconBox" onClick={() => buttonRemoveHandler(index)}>
          <img src={Remove} alt=""/>
          </div>
        </button>
        );
      })}
    </div>
    <button className="clearBTN" onClick={clearHandler}>Clear</button>
  </div>
  );
};

export default Filters;