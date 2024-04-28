const Card = ({children}) => {
  return (
    <>
    
      <div className="card" style={{ width: "38rem" }}>
        <div className="card-body" >
        {children}
        </div>
      </div>
    </>
  );
};
export default Card;
