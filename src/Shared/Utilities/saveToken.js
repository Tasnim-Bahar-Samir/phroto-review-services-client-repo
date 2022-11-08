
export const saveToken = (currentUser,from,navigate)=>{
    fetch('http://localhost:5000/login',{
        method:"POST",
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        localStorage.setItem("user_token",data.token)
        navigate(from,{replace:true})
      })
}