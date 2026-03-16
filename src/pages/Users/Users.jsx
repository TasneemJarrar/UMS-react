import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../../components/loader/Loader';

export default function Users() {

  const [users, setUsers] = useState([]);
  const [isLoader, setIsLoader] = useState(true);
  const [error, setIsError] = useState(null);


  const getUsers = async ()=>{
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/users`);
      console.log(response);
      setUsers(response.data.users);

    } catch (error) {
      setIsError('...server error');
    }
    finally{
      setIsLoader(false);
    }
  }

  useEffect( ()=>{
    getUsers();
  },[])

  if (isLoader) {
    return <Loader />
  }

  if (error) {
    return <h2 className='alert alert-danger'>{error}</h2>
  }

  return (
    <section className="users py-5 text-center">
      <div className="container">
        <div className="row g-5">
          {users.map( (user)=>
            <div className="col-md-4">
              <div className="card user  p-4 rounded-4 d-flex flex-column gap-3">
                <img src={user.imageUrl} className='card-card-img-top w-100 rounded-4' alt="" />
                <div className="card-body">
                  <h5 class="card-title">{user.name}</h5>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>


    </section>
  )
}
