import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Users from './User'
import Friends from './Friends'
import Posts from './Posts'

// const fetchUsers= fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=> res.json())
// .then(data=> console.log(data))
// ..
// 

const fetchPosts=async()=>{
  const res= await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

// const fetchFriends=async ()=>{
// const res= await fetch('https://jsonplaceholder.typicode.com/users')
// return res.json()
// }

function App() {
  
  const postsPromise=fetchPosts()
// const friendsPromise=fetchFriends()

//   function HandleClick(){
// alert('i am clicked')
//   }
//   const HandleClick3=()=>{
//     alert('i am clicked 3')
//   }
// const HandleAdd5=(num)=>{
// const newNumber=num+5;
// alert(newNumber);
// }
  return (
    <>

          <h3>Vite +React</h3>
<Suspense fallback={<h3>Posts Are loading</h3>}>
<Posts postsPromise={postsPromise} >

</Posts>

</Suspense>

{/* <Suspense fallback={<h3>Friends are comming......</h3>}>
  <Friends friendsPromise={friendsPromise}></Friends>
</Suspense> */}
{/* 
          <Suspense fallback={<h3>Loading....</h3>}>
                <Users fetchUsers={fetchUsers}></Users>
          </Suspense> */}
{/* <Batsman></Batsman>

<Counter></Counter> */}


       {/* <button onClick={HandleClick}>Click Me</button>  
       <button onClick={()=> {alert('I am click by short arraw func')}}>Click Me4</button>  
       <button onClick={HandleClick3}>Click Me3</button>  
       <button onClick={function HandleClick2(){
        alert('i am clicked 2')
       }}>Click Me2</button>  
       <button onClick={()=>HandleAdd5(7)}>Clickme 5</button> */}

    </>
  )
}

export default App
