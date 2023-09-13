export default function Image(props) {
  return (
    <>
      <div className="logo-img">
        <img src={`${props.img}`} alt="" />
      </div>
    </>
  );
}
