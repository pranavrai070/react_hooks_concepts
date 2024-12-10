import React, { useState, useEffect } from "react";

const JokeApp = () => {
  const jokeApi = "https://api.chucknorris.io/jokes/random";

  const [joke, setJoke] = useState();
  const [loading,setLoading]=useState(false);
  const [getNextJoke,setGetNextJoke]=useState(false);

  useEffect(() => {
    console.log("use Effect runs");
    const fetchJoke = async () => {
     try {
      setLoading(true);
      const jokeRes = await fetch(jokeApi);

      const jokeResponse=await jokeRes.json();
      console.log("getting jokeres",jokeResponse.value);
      const Realoke=jokeResponse.value;
      setJoke(()=>Realoke);
     } catch (error) {
      console.error("Error fetching jokes",error);
     }finally{
      setLoading(false);
     }
    };

    fetchJoke();
  }, [getNextJoke]);

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      JokeApp
      <h2>Joke</h2>
      <p>{loading?"Jokes Loading...............":joke}</p>
      <button disabled={loading?true:false} onClick={()=>setGetNextJoke((prev)=>!prev)}>Next Joke</button>
    </div>
  );
};

export default JokeApp;
