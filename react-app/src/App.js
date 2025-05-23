import logo from './logo.svg';
import './App.css';
function Header(props){
  console.log('props', props, props.title);
  return <header>
    <h1><a href="/">{props.title}</a></h1>
  </header>
}
function Nav(){
  return <nav>
  <ol>
    <li><a href="/read/1">html</a></li>
    <li><a href="/read/2">css</a></li>
    <li><a href="/read/3"></a></li>
  </ol>
 </nav>
}
function Article(){
  return <article>
  <h2>Welcome</h2>
  Hello, WEB
 </article>
}
function App() {
  const topics = [
    {id:1, title:'html', body:'html is ...'}
  ]
  return (
    <div>
     <Header title="REACT"></Header>
     <Nav></Nav>
     <Article title="Welcome" body="Hello, WEB"></Article>
     <Article title="Hi" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
