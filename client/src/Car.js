const Car = ({cars}) => {
  return <>{cars && cars.length > 0 ? <>I have {cars.length} cars</>:<>I have no cars</>}</>;
};


export default Car;
