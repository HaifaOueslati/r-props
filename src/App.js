
import Profile from './Profile/Profile';
import haifa from './haifa.jpg';


function App() {
  const handleName = name => alert(name);

  const styleApp = {textAlign:"center",
    backgroundColor: "bisque"}
  return (
    <div style={styleApp}>
      <Profile fullName="Haifa Oueslati" bio="
      i am haifa oueslati i am a web developer" profession="Student" handleName={handleName}>
        <img style={{width: 350}} src={haifa} alt='haifa' />
        </Profile>
    </div>
  );
}

export default App;
