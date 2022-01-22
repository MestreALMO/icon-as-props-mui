import DoneIcon from "@mui/icons-material/Done";

const MyComponentWithIcon = ({ statusImage }: any) => {
  return (
    <>
      <div>{statusImage}</div>
    </>
  );
};

function App() {
  return (
    <>
      <div>
        aaa
        <MyComponentWithIcon statusImage={<DoneIcon />} />
        bbb
      </div>
    </>
  );
}

export default App;
