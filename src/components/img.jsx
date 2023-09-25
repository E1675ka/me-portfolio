export default function Image(props) {
  return (
    <>
      <div className="logo-img card">
        <img src={`${props.img}`} alt="" />
      </div>
    </>
  );
}
