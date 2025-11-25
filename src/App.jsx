import Welcome from "./Welcome";
import "./App.css";
import Card from "./Card";
import Product from "./Product";
import UserCard from "./UserCard";
import TodoList from "./TodoList";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import Counter from "./Counter";
import ToggleText from "./ToggleText";
import ThemeToggle from "./ThemeToggle";
import LikeButton from "./LikeButton";
import handleClick from "./handleClick";
import { useState } from "react";
import Button from "./Button";
import InputBox from "./InputBox";
import LoginMessage from "./ LoginMessage";
import FavoriteFruits from "./FavoriteFruits";
import ColorBox from "./ColorBox";
import NameForm from "./NameForm";
import MultiForm from "./MultiForm";
import LoginToggle from "./LoginToggle";
import ShowHide from "./ShowHide";
import Login from "./Login";
import EvenOdd from "./EvenOdd";
import UserList from "./UserList";
import ToDo from "./ToDo";
import ControlledForm from "./ControlledForm";
import MultiInputForm from "./MultiInputForm";
import PreferencesForm from "./PreferencesForm";
import CounterApp from "./CounterApp";
import Example from "./Example";
import Users from "./Users";
import CounterEffect from "./CounterEffect";
import { useEffect } from "react";
import Timer from "./Timer";
import StartStopTimer from "./StartStopTimer";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";




function App() {
  const [data, setData] = useState([]);
   const user = { name: "Shravani", age: 26 };


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 5)));
  }, []);
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  function sayMessage(msg) {
    alert(msg);
  }
  function handleChildClick() {
    alert("Child button clicked!");
  }
  
  return (
    <div className="container">
      <h1 className="title">Hello React!</h1>
    className="flex flex-col items-center mt-10"
      <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700">
        Click Me

      </button>

      
      
    

       <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
              <Route path="/products/:id" element={<ProductDetails />} />

      </Routes>

      <Welcome name="Shravani" />
      <Welcome name="John" />
      <Welcome name="Aisha" />

      <h1>React Day 8 – useEffect + Cleanup</h1>
      <Timer />

      <h1>React Day 7 – API + useEffect (Enhanced)</h1>
      <UserList />

      <StartStopTimer />

      <h2>Posts</h2>
      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}

      <Button onPress={handleChildClick} />
  
  <input type="text" placeholder="Enter name" onChange={handleChange} />
      <h2>Hello, {name}</h2>

       <button onClick={() => sayMessage("Hello Shravani!")}>
        Say Hello
      </button>

      <InputBox />
      <LoginMessage />
      <FavoriteFruits />
      <ColorBox />
    <NameForm />
<MultiForm />
<LoginToggle />
<ShowHide />
<Login />
<EvenOdd />
<UserList />
<ControlledForm />


<h1>React Day 4 – To-Do App</h1>
      <ToDo />

      <Card title="React Basics" text="Learning JSX and Props" />
      <Card title="Frontend Dev" text="HTML, CSS, JS Progress" />
      <Card title="Goals" text="Become a React Developer" />

      <Product title="Laptop" price={1200} />
<Product title="Phone" price={800} />
<UserCard name="Shravani" email="shravani@example.com" />
<UserCard name="John" email="john@example.com" />

<TodoList todos={['Learn React', 'Build Project', 'Practice']} />
      <Navbar title="My React Website" />
      <Footer year={2025} />
      <HeroSection heading="Welcome!" text="This is my first React layout using props." />
      <AboutSection name="Shravani" hobby="Painting" />
<Counter />
 <h1>React State – Day 3</h1>
      <ToggleText />
<h1>React State – Day 3</h1>
      <ThemeToggle />
      <h1>React Day 3 – Like Button</h1>
      <LikeButton />
<handleClick />

<MultiInputForm />
<PreferencesForm />
<CounterApp />
<Example />
<Users />
<CounterEffect />

    </div>
  );
}

export default App;

